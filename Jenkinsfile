pipeline {
  environment {
    registryCredential = "keen-dockerhub"
    scmVars = ""
    helmRelease = ""
    valuesFile = ""
    projectEnv = ""
  }
  agent any
    stages {
      stage('Clone') {
        steps {
          echo "Branch: ${GIT_BRANCH}"
          script {
            scmVars = checkout([
              $class: 'GitSCM',
              branches: [[name: GIT_BRANCH]],
              doGenerateSubmoduleConfigurations: false,
              userRemoteConfigs: [[credentialsId: 'csssr.com', url: 'git@github.com:csssr/csssr.com']]
            ])
          }
          script {
            if (scmVars.GIT_BRANCH == 'origin/jenkins') {
              helmRelease = "csssr-com"
              valuesFile = "values.yaml"
              projectEnv = "production"
            } else {
              helmRelease = "csssr-com-master"
              valuesFile = "values-preproduction.yaml"
              projectEnv = "preproduction"
            }
          }
          echo "Helm Release: ${helmRelease}"
          echo "Values: ${valuesFile}"
          echo "GIT_BRANCH: ${scmVars.GIT_BRANCH}"
          echo "GIT_COMMIT: ${scmVars.GIT_COMMIT.substring(0,8)}"
        }
      }
      stage('Build') {
        steps {
          script {
            sh "docker build --network host . -t zaebutton/csssr-com:${scmVars.GIT_COMMIT.substring(0,8)}"
          }
        }
      }
      stage('Deploy Image') {
        steps {
          script {
            withCredentials([usernamePassword(credentialsId: registryCredential, usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
              sh '''
                set +x
                docker login -u $USERNAME -p$PASSWORD
                '''
              sh "docker push zaebutton/csssr-com:${scmVars.GIT_COMMIT.substring(0,8)}"
              sh "docker rmi zaebutton/csssr-com:${scmVars.GIT_COMMIT.substring(0,8)}"
            }
          }
        }
      }
      stage('Update Chart') {
        steps {
          script {
            sshagent(credentials: ['csssr-chart']) {
              sh """
                git config --global user.name "Jenkins CI"
                rm -rf csssr.com
                git clone git@github.com:csssr-team/csssr-chart.git
                cd csssr-chart
                git checkout jenkins
                sed -i 's/siteGitCommit.*/siteGitCommit: \"${scmVars.GIT_COMMIT.substring(0,8)}\"/g' ${valuesFile}

              """
            }
          }
          script {
            withCredentials([string(credentialsId: 'csssr-gpg-passphrase', variable: 'GPG_PASSPHRASE')]) {
              sh """#!/bin/bash
                whoami
                pwd
                source ~/.bashrc
                cd csssr-chart
                export KUBECONFIG=/var/lib/jenkins/.kube/csssr-com-k3s.config
                printf "$GPG_PASSPHRASE" | helm secrets upgrade -f secrets.yaml -f ${valuesFile} ${helmRelease} ./
                """
            }
          }
        }
      }
    }
}

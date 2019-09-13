pipeline {
  environment {
    registryCredential = "keen-dockerhub"
    scmVars = ""
    branch = ""
    commit = ""
    helmRelease = ""
  }
  agent any
  stages {
    stage('Clone') {
      steps {
        sendNotification('STARTED')

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
          branch = scmVars.GIT_BRANCH.replace('origin/', '')
          commit = scmVars.GIT_COMMIT.substring(0,8)

          if (branch == 'jenkins') {
            branch = 'master'
          }

          if (branch == 'master') {
            helmRelease = "csssr-com"
          } else {
            helmRelease = "csssr-com-preprod"
          }
        }
        echo "Helm Release: ${helmRelease}"
        echo "GIT_BRANCH: ${branch}"
        echo "GIT_COMMIT: ${commit}"
      }
    }
    stage('Build') {
      steps {
        script {
          sh "docker build --network host . -t zaebutton/csssr-com:${commit}"
        }
      }
    }
    stage('Push Image') {
      steps {
        script {
          withCredentials([usernamePassword(credentialsId: registryCredential, usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
            sh '''
              set +x
              docker login -u $USERNAME -p$PASSWORD
              '''
            sh "docker push zaebutton/csssr-com:${commit}"
            sh "docker rmi zaebutton/csssr-com:${commit}"
          }
        }
      }
    }
    stage('Deploy Chart') {
      steps {
        script {
          sshagent(credentials: ['csssr-chart']) {
            sh """
              rm -rf csssr-chart
              git clone git@github.com:csssr-team/csssr-chart.git
              cd csssr-chart
              git checkout master 
            """
          }
        }
        script {
          withCredentials([string(credentialsId: 'csssr-gpg-passphrase', variable: 'GPG_PASSPHRASE')]) {
            sh """#!/bin/bash
              whoami
              pwd
              source ~/.bashrc
              set -x
              cd csssr-chart
              export KUBECONFIG=/var/lib/jenkins/.kube/csssr-com-k3s.config
              printf "$GPG_PASSPHRASE" | helm secrets upgrade -f ${branch}/secrets.yaml -f ${branch}/values.yaml --set-string site.commit="${commit}" ${helmRelease} ./
              """
          }
        }
      }
    }
  }
  post {
    always {
      sendNotification(currentBuild.result)
    }
  }
}

def sendNotification(String buildStatus) {
  buildStatus = buildStatus ?: 'SUCCESS'

  def color
  def channel = '#csssr_com'
  if (buildStatus == 'STARTED') {
    color = '#D4DADF'
  } else if (buildStatus == 'SUCCESS') {
    color = '#36a64f'
  } else if (buildStatus == 'UNSTABLE') {
    color = '#FEF65B'
  } else {
    color = '#D04538'
    channel = '#csssr_com'
  }

  def message = "${buildStatus}: `${env.JOB_NAME}` #${env.BUILD_NUMBER}:\n${env.BUILD_URL}"
  slackSend(channel: channel, color: color, message: message)
}

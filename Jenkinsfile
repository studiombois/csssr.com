pipeline {
  environment {
    registryCredential = "space-nexus"
    scmVars = ""
    branch = ""
    commit = ""
    helmRelease = ""
    options = ""
    valuesFiles = ""
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
          safeBranch = branch.replaceAll('/', '-')

          if (branch == 'production') {
            helmRelease = "csssr-com"
            valuesFile = "-f master/secrets.yaml -f master/values.yaml"
            safeBranch = "prod"
          } else if (branch.startsWith('release/')) {
            helmRelease = "csssr-com-${safeBranch}"
            valuesFile = "-f preprod/secrets.yaml -f preprod/values.yaml"
            options = " --set branch=${safeBranch},site.domains={\"${safeBranch}.csssr.com,${safeBranch}.jobs.csssr.com,${safeBranch}.express.csssr.com,${safeBranch}.dev.csssr.com}\""
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
          sh "docker build --network host . -t docker.csssr.space/csssr-com:${commit}"
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
            sh "docker push docker.csssr.space/csssr-com:${commit}"
            sh "docker rmi docker.csssr.space/csssr-com:${commit}"
          }
        }
      }
    }
    stage('Deploy Chart') {
      steps {
        script {
          if (branch == 'production') {
            sshagent(credentials: ['csssr-chart']) {
              sh """
              rm -rf csssr-chart
              git clone git@github.com:csssr-team/csssr-chart.git
              """
            }

            sh """#!/bin/bash
            source ~/.bashrc
            set -x
            cd csssr-chart
            export KUBECONFIG=/var/lib/jenkins/.kube/csssr-com-k3s.config
            helm secrets upgrade ${valuesFile} --set-string site.commit="${commit}" ${options} ${helmRelease} ./
            """
          } else if (branch.startsWith('release/')) {
            sshagent(credentials: ['csssr-com-preprod-chart']) {
              sh """
              rm -rf csssr-com-preprod-chart
              git clone git@github.com:csssr-team/csssr-com-preprod-chart.git
              """
            }
            sh """#!/bin/bash
            source ~/.bashrc
            set -x
            cd csssr-com-preprod-chart
            export KUBECONFIG=/var/lib/jenkins/.kube/csssr-com-k3s.config
            if [[ "$BUILD_ID" -eq 1 ]]; then
              helm secrets install . --namespace site-${safeBranch} --name ${helmRelease} ${valuesFile} --set-string site.commit="${commit}" ${options}
            else
              helm secrets upgrade ${valuesFile} --set-string site.commit="${commit}" ${options} ${helmRelease} ./
            fi
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

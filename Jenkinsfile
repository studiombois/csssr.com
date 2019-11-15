pipeline {
  environment {
    registryCredential = "space-nexus"
    branch = ""
    commit = ""
  }
  agent any
  stages {
    stage('Clone') {
      steps {
        sendNotification('STARTED')

        echo "Branch: ${GIT_BRANCH}"

        script {
          branch = GIT_BRANCH
          commit = GIT_COMMIT.substring(0,8)
          safeBranch = branch.replaceAll('/', '-').toLowerCase()
        }
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
            sh "docker login -u ${USERNAME} -p \"${PASSWORD}\" docker.csssr.space"
            sh "docker push docker.csssr.space/csssr-com:${commit}"
            sh "docker rmi docker.csssr.space/csssr-com:${commit}"
          }
        }
      }
    }
    stage('Deploy Chart') {
      steps {
        script {
          sshagent(credentials: ['csssr-com-chart']) {
            sh """
            rm -rf csssr.com-chart
            git clone git@github.com:csssr-dreamteam/csssr.com-chart.git
            """
          }

          if (branch == 'master') {
            sh """#!/bin/bash
            source ~/.bashrc
            set -x
            cd csssr.com-chart
            export KUBECONFIG=/var/lib/jenkins/.kube/csssr-com-k3s.config
            helm secrets upgrade --install -f preprod/values.yaml -f preprod/secrets.yaml --set-string domain=csssr.com,branch=${branch},cert=csssr-com,jobs=csssr-jobs,site.commit=${commit} --namespace csssr-com-production csssr-com-production ./
            """
          } else if (branch.startsWith('release/')) {
            sh """#!/bin/bash
            source ~/.bashrc
            set -x
            cd csssr.com-chart
            export KUBECONFIG=/var/lib/jenkins/.kube/k8s-csssr-atlassian-kubeconfig.yaml
            helm secrets upgrade --install -f preprod/values.yaml -f preprod/secrets.yaml --set-string domain=${safeBranch}.csssr.cloud,branch=${branch},cert=csssr-cloud,jobs=csssr-jobs,site.commit=${commit} --namespace csssr-com-${safeBranch} csssr-com-${safeBranch} ./
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
    channel = '#csssr_bots'
  }

  def message = "${buildStatus}: `${env.JOB_NAME}` #${env.BUILD_NUMBER}:\n${env.BUILD_URL}"
  slackSend(channel: channel, color: color, message: message)
}

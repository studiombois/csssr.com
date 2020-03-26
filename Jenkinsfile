pipeline {
  environment {
    registryCredential = "space-nexus"
    branch = ""
    commit = ""
  }
  agent { label 'master' }

  parameters {
    string(defaultValue: "https://csssr.space", description: 'Хост csssr.space', name: 'csssrSpaceOrigin', trim: true)
    booleanParam(defaultValue: false, description: 'Включить обработку изображений', name: 'processImages')
  }

  stages {
    stage('Clone') {
      steps {
        sendNotification('STARTED')

        echo "Branch: ${GIT_BRANCH}"
        echo "CSSSR_SPACE_ORIGIN: ${params.csssrSpaceOrigin}"
        echo "PROCESS_IMAGES: ${params.processImages}"

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
          withCredentials([string(credentialsId: 'github-registry-read-only-token', variable: 'NPM_TOKEN')]) {
            sh "docker build --build-arg NPM_TOKEN=${NPM_TOKEN} --build-arg isProduction=${branch == 'master' ? 'TRUE' : ''} --build-arg csssrSpaceOrigin=${params.csssrSpaceOrigin} --build-arg processImages=${params.processImages} --network host . -t docker.csssr.space/csssr-com:${commit}"
          }
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
            make deploy-production branch=${branch} commit=${commit}
            """
          } else if (branch.startsWith('release/')) {
            sh """#!/bin/bash
            source ~/.bashrc
            set -x
            cd csssr.com-chart
            export KUBECONFIG=/var/lib/jenkins/.kube/k8s-csssr-atlassian-kubeconfig.yaml
            make deploy-release safeBranch=${safeBranch} branch=${branch} commit=${commit} csssrSpaceOrigin=${params.csssrSpaceOrigin} processImages=${params.processImages}
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
  def channel = '#csssr_builds'
  if (buildStatus == 'STARTED') {
    color = '#D4DADF'
  } else if (buildStatus == 'SUCCESS') {
    color = '#36a64f'
  } else if (buildStatus == 'UNSTABLE') {
    color = '#FEF65B'
  } else {
    color = '#D04538'
    channel = '#csssr_builds'
  }

  def message = "${buildStatus}: `${env.JOB_NAME}` #${env.BUILD_NUMBER}:\n${env.BUILD_URL}"
  slackSend(channel: channel, color: color, message: message)
}

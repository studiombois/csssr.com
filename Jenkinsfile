pipeline {
  environment {
    branch = ""
    commit = ""
    imageTag = ""
    bash = "#!/bin/bash\nsource ~/.bashrc\nsource ~/.config/csssr/non-breaking-profile\n"
  }
  agent any

  parameters {
    string(defaultValue: "https://csssr.space", description: 'Хост csssr.space (без слэша на конце)', name: 'csssrSpaceOrigin', trim: true)
  }

  stages {
    stage('Clone') {
      steps {
        sendNotification('STARTED')

        echo "Branch: ${GIT_BRANCH}"
        echo "CSSSR_SPACE_ORIGIN: ${params.csssrSpaceOrigin}"

        script {
          branch = GIT_BRANCH
          commit = GIT_COMMIT.substring(0,8)
          safeBranch = branch.replaceAll('/', '-').toLowerCase()
          imageTag = "jenkins-build-${safeBranch}-${commit}"
          image = "quay.csssr.cloud/csssr-team/csssr-com:${imageTag}"
        }
        echo "GIT_BRANCH: ${branch}"
        echo "GIT_COMMIT: ${commit}"
      }
    }
    stage('Build') {
      steps {
        script {
          withCredentials([string(credentialsId: 'github-registry-read-only-token', variable: 'NPM_TOKEN')]) {
            sh "docker build --build-arg NPM_TOKEN=${NPM_TOKEN} --build-arg isProduction=${branch == 'master' ? 'TRUE' : ''} --build-arg csssrSpaceOrigin=${params.csssrSpaceOrigin} --build-arg comHost='https://csssr.com' . -t ${image}"
          }
        }
      }
    }
    stage('Push Image') {
      steps {
        script {
          withCredentials([usernamePassword(credentialsId: 'quay-csssr-cloud', usernameVariable: 'USERNAME', passwordVariable: 'PASSWORD')]) {
            sh "docker login -u ${USERNAME} -p \"${PASSWORD}\" quay.csssr.cloud"
            sh "docker push ${image}"
          }
        }
      }
    }
    stage('Deploy Chart') {
      steps {
        script {
          sshagent(credentials: ['csssr-com-chart']) {
            sh """${bash}
            rm -rf csssr.com-chart
            git clone git@github.com:CSSSR/csssr.com-chart.git
            """
          }

          if (branch == 'master') {
            sh """${bash}
            cd csssr.com-chart
            make deploy-production imageTag=${imageTag}
            """
          } else {
            sh """${bash}
            cd csssr.com-chart
            git checkout -b jenkins
            make deploy-release safeBranch=${safeBranch} branch=${branch} commit=${safeBranch}-${commit} csssrSpaceOrigin=${params.csssrSpaceOrigin}
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

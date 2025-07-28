pipeline {
  agent any
  environment {
    DOCKER_IMAGE = "jcoben/surveyfront"
    K8S_NAMESPACE = "default"
    KUBECONFIG_CRED_IT = "kubeconfig"
  }
  stages {
    stage('Clone Repository') {
      steps {
        git 'git@github.com:jcoben/surveyfront.git'
      }
    }
    stage('Build Docker Image') {
      steps {
        script {
          dockerImage = docker.build("jcoben/surveyfront:v1")
        }
      }
    }
    stage('Push to Docker Hub') {
      steps {
        script {
          docker.withRegistry('https://index.docker.io/v1/', 'dockerhub-creds') {
            dockerImage.push()
          }
        }
      }
    }
    stage('Update Kubernetes Deployment') {
      steps {
        script {
          sh 'kubectl rollout restart deployment/student-survey-deployment'
        }
      }
    }
  }
}

pipeline {
    agent any
    stages {
        stage('Build') {
            steps {
                script {
                    sh 'docker build -t my-node-app .'
                }
            }
        }
        stage('Test') {
            steps {
                script {
                    sh 'docker run my-node-app npm test'
                }
            }
        }
        stage('Deploy') {
            steps {
                script {
                    sh 'docker run -d -p 80:3000 my-node-app'
                }
            }
        }
    }
}


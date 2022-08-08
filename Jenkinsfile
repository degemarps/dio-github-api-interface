pipeline {
    agent {
        label 'docker' 
    }

    stages {
        stage('Docker node test') {
            agent {
                docker {
                label 'docker'
                image 'node:7-alpine'
                args '--name docker-node'
                }
            }
        }
        stage('Build') { 
            steps {
                sh 'npm install' 
            }
        }
    }
}
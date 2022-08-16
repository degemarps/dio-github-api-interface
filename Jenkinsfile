pipeline {
    agent {
        docker {
            image 'node:16-alpine'
            args '-p 3000:3000'
        }
    }
    stages {
        stage('Build') {
            steps {
                sh 'npm install'
            }
        }

        stage('Deliver') {
            steps {
                sh "chmod +x -R ${env.WORKSPACE}"
                sh './scripts/deliver.sh'
                input message: 'Finished using the web site? (Click "Proceed" to continue)'
                sh './jenkins/scripts/kill.sh'
            }
        }

    }
}
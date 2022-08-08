pipeline {
    agent any
    stages {
        stage('Build') { 
            steps {
                sh 'nvm install --lts'
                sh 'npm install' 
            }
        }
    }
}
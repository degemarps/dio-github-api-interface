pipeline {
    agent any
    tools {nodejs "nodejs"}
    stages {
        stage('Build') { 
            steps {
                sh 'nvm install --lts'
                sh 'npm install' 
            }
        }
    }
}
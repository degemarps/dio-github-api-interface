pipeline {
    agent any

    stages {
        stage('Build') {
            steps {
                sh """
                    docker build -t react_app .
                """
            }
        }
        stage('run') {
            steps {
                sh """
                    docker run -d --name react_app_dio -it react_app
                """
            }
        }
        // stage('Test') {
        //     steps {
        //         sh "chmod +x -R ${env.WORKSPACE}"
        //         sh './scripts/test.sh'
        //     }
        // }
        // stage('Deliver') {
        //     steps {
        //         sh "chmod +x -R ${env.WORKSPACE}"
        //         sh './scripts/deliver.sh'
        //         input message: 'Finished using the web site? (Click "Proceed" to continue)'
        //         sh './scripts/kill.sh'
        //     }
        // }

    }
}
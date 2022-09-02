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
        stage('Run') {
            steps {
                sh """
                    docker run -d --name react_app_dio -p 3000:3000 -it react_app
                """
            }
        }
        stage('Test') {
            steps {
                build job: 'selenium'
            }
        }
        stage('Clear') {
            steps {
                sh 'docker stop react_app_dio'
                sh 'docker rm react_app_dio'
            }
        }
        stage('Deploy') {
            steps {
                build job: 'deploy-to-heroku'
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
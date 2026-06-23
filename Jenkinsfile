pipeline {
    agent any
 
    stages {
 
        stage('Checkout') {
            steps {
                checkout scm
            }
        }
 
        stage('Install Dependencies') {
            steps {
                sh 'npm ci'
            }
        }
 
        stage('Install Playwright Browsers') {
            steps {
                sh 'npx playwright install'
            }
        }
 
        stage('Run Playwright Tests') {
            steps {
                sh 'npx playwright test'
            }
        }
    }
 
    post {
        always {
            archiveArtifacts artifacts: 'playwright-report/**', allowEmptyArchive: true
        }
 
        success {
            echo 'Playwright tests passed successfully.'
        }
 
        failure {
            echo 'Playwright tests failed.'
        }
    }
}

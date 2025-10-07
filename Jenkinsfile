pipeline {
    agent any 

    // Add Node.js env setup

environment {
    NODE_VERSION = '24.9.0'
}

stages {
    
    stage('Checkout'){
        steps {
            checkout scm
        }
    }

    stage('Setup Node.js'){
        steps{
            script{
                // Use NodeJS installed in Jenkins
                def nodeHome = tool name: 'NodeJS-24', type: 'nodejs'
                env.PATH = "${nodeHome}/bin:${env.PATH}"
            }
            sh 'node --version'
            sh 'npm --version'
        }
    }
    
    stage('Install Dependencies'){
        steps {
            sh 'npm ci'
        }
    }
    stage('Install PLaywright'){
        steps {
            sh 'npx playwright install --with-deps'
        }
    }
    stage('Run Tests'){
        steps{
            sh 'npm run test'
        }
    }
}
post {
    always {
        publishHTML([
            allowMissing: false,
            alwaysLinkToLastBuild: true,
            keepAll: true,
            reportDir: 'playwright-report',
            reportFiles: 'index.html',
            reportName: 'Playwright Tests Report',
            reportTitles: 'Playwright Test Results'
            ])
            // Archive for download
            archiveArtifacts artifacts: 'playwright-report/**/*', fingerprint: true
        }
    success {
        emailext (
            subject: "Playwright Tests PASSED - Build #${env.BUILD_NUMBER}",
            body: """
            <h2> Playwright Tests Passed Successfully! </h2>
            <p><strong>Build:</strong> #${env.BUILD_NUMBER}</p>
            <p><strong>Status:</strong> PASSED</p>
            <p><strong>Duration:</strong> #${currentBuild.durationString}</p>
            <p><strong>Report:</strong> <a href="${env.BUILD_URL}">View Test Report</a></p>
            """,
            to: "haripriyasakthivel@mailsac.com",
            mimeType: "text/html"
        )
    }
    failure {
        emailext (
            subject: "Playwright Tests FAILED - Build #${env.BUILD_NUMBER}",
            body: """
            <h2> Playwright Tests FAILED! </h2>
            <p><strong>Build:</strong> #${env.BUILD_NUMBER}</p>
            <p><strong>Status:</strong> PASSED</p>
            <p><strong>Duration:</strong> #${currentBuild.durationString}</p>
            <p><strong>Report:</strong> <a href="${env.BUILD_URL}">View Test Report</a></p>
            """,
            to: "haripriyasakthivel@mailsac.com",
            mimeType: "text/html"
        )
    }

    }
    
}
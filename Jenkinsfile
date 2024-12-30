pipeline {
    agent any

    stages {
        stage('Checkout') {
            steps {
                git branch: 'staging', url: 'https://github.com/your-repo.git'
            }
        }

        stage('Build') {
            steps {
                sh './build-frontend.sh'
                sh './build-backend.sh'
            }
        }

        stage('Terraform Apply') {
            steps {
                sh 'cd terraform && terraform apply -var="environment=staging" -auto-approve'
            }
        }

        stage('Deploy') {
            steps {
                sh 'ansible-playbook -i ansible/inventory ansible/playbooks/deploy.yml'
            }
        }
    }
}


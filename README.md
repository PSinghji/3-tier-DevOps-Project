﻿# 3-tier-DevOps-Project

 Steps:

 step1: Install terraform and Amazon cli to your window server

    After that add the path in the Environment variable for the teraform.

    Check the terraform by below command
     terraform --help

    Check the AWS by 
    aws --version

    after that configure the AWS , By logging to the AWS account and got to the AMI users pick the Access key and Secret key from here

     > aws configure
     AWS Access Key ID : "Enter your AWS access key ID"
     AWS Secret Access Key : "Enter your AWS Secret Access Key"
     Default Region : "ap-south-1"  // for Mumbai region
     Default output format : json

     Now, Go to the directory where you want to create terraform file let say main.tf under terraform folder
     create file and add the conn=tent to it 
     > vim main.tf
     after writing main.tf file , Initilize the terraform by 
     >terraform init
     
 

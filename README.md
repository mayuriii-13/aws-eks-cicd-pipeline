# Automated CI/CD Pipeline for Microservices Deployment on AWS EKS

## Overview

This project demonstrates the implementation of an end-to-end CI/CD pipeline for deploying a containerized microservices application to Amazon Elastic Kubernetes Service (EKS). The solution automates application build, testing, containerization, and deployment processes, eliminating manual intervention and enabling consistent, reliable software releases.

The project follows DevOps best practices by integrating source control, continuous integration, continuous delivery, container orchestration, and cloud-native deployment strategies.

---

## Objectives

* Automate application build and testing workflows.
* Containerize application services using Docker.
* Store and manage container images in Amazon ECR.
* Deploy and manage workloads on AWS EKS.
* Eliminate manual deployment processes.
* Ensure consistency across development and production environments.
* Enable rolling updates and rollback capabilities.
* Improve deployment speed, reliability, and scalability.

---

## Architecture

```text
Developer
    │
    ▼
GitHub Repository
    │
    ▼
GitHub Actions CI/CD Pipeline
    ├── Source Code Checkout
    ├── Build Application
    ├── Run Tests
    ├── Build Docker Images
    ├── Push Images to Amazon ECR
    └── Deploy to Amazon EKS
    │
    ▼
Amazon EKS Cluster
    ├── Frontend Service
    ├── Backend Service
    └── Database Service
```

---

## Technology Stack

| Category               | Technology                     |
| ---------------------- | ------------------------------ |
| Cloud Platform         | AWS                            |
| Containerization       | Docker                         |
| Container Registry     | Amazon ECR                     |
| CI/CD                  | GitHub Actions                 |
| Orchestration          | Kubernetes                     |
| Managed Kubernetes     | Amazon EKS                     |
| Infrastructure as Code | Terraform                      |
| Version Control        | Git & GitHub                   |
| Monitoring             | Prometheus & Grafana (Planned) |
| Security Scanning      | Trivy (Planned)                |

---

## Project Structure

```text
project-root/
│
├── frontend/
├── backend/
├── kubernetes/
│   ├── deployments/
│   ├── services/
│   └── ingress/
│
├── terraform/
│   ├── eks/
│   ├── networking/
│   └── iam/
│
├── .github/
│   └── workflows/
│
├── docker/
│
├── docs/
│
└── README.md
```

---

## CI/CD Pipeline Workflow

1. Developer pushes code to GitHub.
2. GitHub Actions workflow is triggered automatically.
3. Application source code is built.
4. Automated tests are executed.
5. Docker images are generated.
6. Images are pushed to Amazon ECR.
7. Kubernetes manifests are applied to Amazon EKS.
8. Application is deployed using rolling updates.
9. Rollback can be performed using Kubernetes deployment revisions.

---

## Features

* Automated Build Process
* Continuous Integration
* Continuous Deployment
* Docker-Based Containerization
* Amazon ECR Integration
* AWS EKS Deployment
* Kubernetes Rolling Updates
* Deployment Rollback Support
* Infrastructure as Code with Terraform
* Scalable Microservices Architecture

---

## Future Enhancements

* Prometheus Monitoring
* Grafana Dashboards
* Trivy Security Scanning
* SonarQube Code Quality Analysis
* Argo CD GitOps Deployment
* Blue-Green Deployments
* Canary Releases

---

## Learning Outcomes

Through this project, I gained hands-on experience with:

* DevOps Practices
* CI/CD Pipeline Design
* Docker Containerization
* Kubernetes Administration
* AWS Cloud Services
* Infrastructure as Code
* Cloud-Native Deployments
* Release Automation

---

## Project Status

🚧 In Development

This repository is being built incrementally to demonstrate a complete production-inspired DevOps workflow using AWS EKS and Kubernetes.

---

## Author

Mayuri Ambare

Aspiring DevOps & Cloud Engineer

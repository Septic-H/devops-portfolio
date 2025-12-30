[![Build Status](https://app.travis-ci.com/Septic-H/devops-portfolio-api.svg?token=NuVMfJXHnnWDLnoMrTAx&branch=main)](https://app.travis-ci.com/Septic-H/devops-portfolio-api)
# DevOps Portfolio API

A secure, containerized Node.js application deployed via a fully automated CI/CD pipeline.

**Live URL:** [https://huzaifaj.tech](https://huzaifaj.tech)

## Tech Stack
* **Runtime:** Node.js & Express
* **Containerization:** Docker
* **Web Server:** Nginx (Reverse Proxy)
* **CI/CD:** Travis CI
* **Cloud Provider:** DigitalOcean (Ubuntu VPS)
* **Security:** Let's Encrypt SSL, UFW Firewall, Security Headers (A+ Grade)

## The Pipeline
1.  **Code:** Pushed to GitHub `main` branch.
2.  **Test:** Travis CI runs automated tests (Jest/Supertest).
3.  **Deploy:** If tests pass, code is shipped to the DigitalOcean server.
4.  **Run:** Docker rebuilds the container and Nginx serves the new version.

## Quick Start (Local)

```bash
# Clone the repo
git clone [https://github.com/YourUsername/devops-portfolio-api.git](https://github.com/YourUsername/devops-portfolio-api.git)

# Install dependencies
npm install

# Run locally
npm run dev
```

## Run with Docker

```bash
docker build -t portfolio-api .
docker run -p 3000:3000 portfolio-api
```

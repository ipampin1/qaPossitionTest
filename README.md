# Ignacio Pampin, QA Position Test

Project Cypress for QA position challenge.

## Setup & Run (Dockerized)

You do **not** need to install Node.js or Cypress locally.  
Just make sure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### 1. Clone the repository
In a terminal run:
```bash
git clone https://github.com/ipampin1/qaPossitionTest.git
cd qaPossitionTest
```

### 2. Run tests for all platforms (desktop, tablet, mobile)
In a terminal run:
```bash
docker-compose up
```

 This will run the Cypress test suite for all three platforms using the correct viewport for each.

### 3. Run tests for a specific platform

You can also run tests for a single platform:

```bash
docker-compose run cypress-desktop
docker-compose run cypress-tablet
docker-compose run cypress-mobile
```

### 4. View results

Test results will be shown in your terminal.  
If you want to save screenshots or videos, you can mount additional volumes in `docker-compose.yml`.

---

## Local (non-docker) usage (optional)

If you prefer to run tests locally:

1. Install dependencies:
   ```bash
   npm install
   ```
2. Run Cypress UI:
   ```bash
   npm run cy:open
   ```
3. Run tests headless:
   ```bash
   npm test
   ```

---

**No other dependencies are required to run the tests in Docker.**

### Bugs Report: 
Added a 'BugsReports' folder with a txt file where I reported 3 bugs, how to reproduce and a manual test to cover them

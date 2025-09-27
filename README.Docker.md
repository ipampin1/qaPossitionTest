# Ignacio Pampin, QA Position Test

Project Cypress for QA position challenge.

---

## 🚀 Run the Cypress Test Suite (Dockerized)

You do **not** need to install Node.js or Cypress locally.  
Just make sure you have [Docker Desktop](https://www.docker.com/products/docker-desktop/) installed and running.

### 1. Clone the repository

```bash
git clone https://github.com/ipampin1/qaPossitionTest.git
cd qaPossitionTest
```

### 2. Build the Docker image

```bash
docker compose build
```

### 3. Run tests for all platforms (desktop, tablet, mobile)

```bash
docker compose up
```

This will run the Cypress test suite for all three platforms using the correct viewport for each.

### 4. Run tests for a specific platform

You can also run tests for a single platform:

```bash
docker compose run cypress-desktop
docker compose run cypress-tablet
docker compose run cypress-mobile
```

### 5. View results

Test results will be shown in your terminal.  
If you want to save screenshots or videos, you can mount additional volumes in `docker-compose.yml`.

---

## 🐳 Troubleshooting

- Make sure Docker Desktop is running before you start.
- If you get `command not found: docker compose`, try updating Docker Desktop or use `docker-compose` (with a dash) if you have it installed.
- If you see errors about missing files, ensure you are in the `qaPossitionTest` directory.

---

**No other dependencies are required to run the tests in Docker.**
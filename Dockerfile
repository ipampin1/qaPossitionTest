FROM cypress/included:15.3.0

WORKDIR /e2e

COPY . .

RUN npm ci
# nursing-home-volunteer

## About this project

replace me with information about the use case of volunteering in nursing homes.

replace me with information about the DHBW and its students who make this project possible.

## How to contribute to this project

replace me with information about how we work and how someone could support this project.

## Prerequisites

Make sure to Docker and docker-compose installed on your machine.

## Setup with docker

### Step 1: Set database credentials

- Copy `.env.template` file, rename it to `.env` and change the database credentials to whatever to like, e.g.:

```
POSTGRES_DB=strapi
POSTGRES_USER=strapi
POSTGRES_PASSWORD=strapi
```

The .env file is added to .gitignore and should NOT BE CHECKED IN TO GIT!

### Step 2: Start database, backend and frontend

Strapi will run in production mode if docker-compose override file is named `docker-compose.override.yml.disabled`. So you can not make changes in the content type builder. To start in development mode, rename `docker-compose.override.yml.disabled` to `docker-compose.override.yml` first.

```bash
# Start backend, db and frontend with docker locally
docker-compose up -d
```

```bash
# Rebuild frontend image and restart backend, db and frontend
docker-compose up -d --build
```

- Frontend will be available on: http://localhost:3000
- Backend will be available on: http://localhost:1337

### Step 3: Configure Backend (database)

1. Login to strapi
2. Go to http://localhost:1337/admin/settings/users-permissions/roles
3. Click on Public
4. Under Tab "Permissions", open "Application" accordion and check "find" and "findone". This will allowed the frontend to request the blog posts without an API key.

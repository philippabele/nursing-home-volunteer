# nursing-home-volunteer

## About this project

replace me with information about the use case of volunteering in nursing homes.

replace me with information about the DHBW and its students who make this project possible.

## How to contribute to this project

replace me with information about how we work and how someone could support this project.

## Prerequisites

Make sure to Docker and docker-compose installed on your machine.

<br>

## Setup with docker

### Step 1: Set database credentials

- Copy `.env.example` file, rename it to `.env` and change the database credentials to whatever to like.

The .env file is added to .gitignore and should NOT BE CHECKED IN TO GIT!

### Step 2: Change docker-compose.yml if running locally

The `docker-compose.yml` is configured to be deployed on a linux server (see `/docs`). If you want to run the applications locally and not in the context of the server, you have to make the following changes to `docker-compose.yml`:

1. Remove `networks` definition
2. Add port bindings
   For strapi:

   ```
   ports:
     - '1337:1337'
   ```

   For frontend:

   ```
   ports:
     - '80:80'
   ```

### Step 3: Start database, backend and frontend for production

```bash
# Start backend, db and frontend with docker locally
docker-compose up -d
```

```bash
# Rebuild frontend and backend image and restart everything
docker-compose up -d --build
```

- Frontend will be available on: http://localhost
- Backend will be available on: http://localhost:1337

### Step 3: Configure Backend (database)

1. Login to strapi at http://localhost:1337/admin. If you just created a clean installation/database you will be asked to create an admin user account.
2. Go to http://localhost:1337/admin/settings/users-permissions/roles
3. Click on Public
4. Under Tab "Permissions", open "Application" accordion and check "find" and "findone". This will allowed the frontend to request the blog posts without an API key.

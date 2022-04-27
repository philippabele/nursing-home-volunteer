# Seniorenaktivierung

This project is a blog website with a content management system (CMS) for volunteers in nursing homes. These volunteers often offer so called activations ("Aktivierungen" in German) which are activities to keep the elderly busy.

Each activation must be planned and prepared in the volunteers' free time and may take several hours to complete although the actual activation only dues around 45 to 60 minutes.

The goal of this project is to provide place for volunteers to share their knowledge and already planned activations so others can get inspiration and see what they offer.

The project was started as part of a computer science student project by [@larsrickert](https://github.com/larsrickert) at the [DHBW Mosbach](https://www.mosbach.dhbw.de) university.

The blog is live on: https://seniorenaktivierung.de

## Documentation

An in-depth documentation of the project can be found in [docs.pdf](./docs.pdf) which is the compiled LaTeX documentation found in `docs` folder.

## Contribution

Thank you for your interest in contributing to our project! Check the [contribution guide](./CONTRIBUTING.md) for how to contribute to this project.

## Technologies

The frontend (blog) is created with [Vue.js](https://vuejs.org), [TypeScript](https://www.typescriptlang.org), [Sass](https://sass-lang.com) and [Bootstrap 5](https://getbootstrap.com).

The backend (CMS) is created with the [Strapi headless CMS](https://strapi.io).

<br>

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

# nursing-home-volunteer Frontend

## Prerequisites

Make sure that you have node installed. You can get it from the [node installation page](https://nodejs.org/en/download/). You can check your installed node version by running:

```
node -v
```

## Project setup

```
npm install
```

### Run with hot-reload for development

```
npm run dev
```

### Compiles and minifies for production

```
npm run build
```

### Serves production build in local webserver

```
npm run serve
```

### Lints and fixes files

```
npm run lint
```

### Check for dependency updates

This will start an interactive terminal where you can select which packages you want tu update. Versions that are marked blue or green can be updated without any problems because they dont have breaking changes. Red versions should be considered with caution. Check the changelog of the dependency for breaking changes.

```
npm run update:dependencies
```

# Pursue following guidelines

1. Components

- Name components according to:
  - Prefix basic app components with app specific styles etc. such as a button component with "App", e.g. AppButton
  - Prefix single use components (that only exist once) with "The", e.g. TheHeader
- use `<script setup lang="ts">` for components if possible, if not use composition API only
- only use one root element in components, e.g.
  - good:
  ```html
  <template>
    <div>Some content</div>
  </template>
  ```
  - bad:
  ```html
  <template>
    <div>Some content</div>
    <div>Some other content</div>
  </template>
  ```

## Folder structure inside src

| Folder     | Description                                                            |
| ---------- | ---------------------------------------------------------------------- |
| assets     | Images/assets that are not favicons/icons                              |
| axios      | Axios client for REST requests                                         |
| components | Vue components                                                         |
| config     | Static configuration/environments                                      |
| router     | Router / routes                                                        |
| store      | Reactive stores (similar to angular services that need reactive state) |
| styles     | Global reusable CSS                                                    |
| types      | Global TypeScript types, interfaces, classes etc.                      |
| utils      | Helper functions/utilities that don't rely an reactive state           |
| views      | Vue components for the routes                                          |

# Dynamic Remote Render with Module Federation

This example demos a basic host application loading remote component and the host application is a SSR with NextJS.

- `app-nextjs` is the host application.
- `about` standalone application which exposes `module` component.
- `contact` standalone application which exposes `module` component.
- `home` standalone application which exposes `module` component.
- `service` standalone application which mock API.

# Running Demo

Run `yarn start`. Lerna run all projects for you.

- [localhost:3000](http://localhost:3000/) (HOST)
- [localhost:3001](http://localhost:3001/) (STANDALONE REMOTE)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE)
- [localhost:3003](http://localhost:3003/) (STANDALONE REMOTE)
- [http://localhost:4000/modules](http://localhost:4000/modules) (MOCK API)

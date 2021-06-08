# Dynamic Remote Render with Module Federation

This example demos a basic host application loading remote component and the host application is a SSR with NextJS.

- `shell-nextjs` is the host application.
- `service` standalone application which mock API.
- `about` standalone application which exposes `module` component.
- `contact` standalone application which exposes `module` component.
- `home` standalone application which exposes `module` component.
- `mfe-angular` standalone angular app which exposes `module` component.
- `mfe-react` standalone react app which exposes `module` component.

# Running Demo

1. `yarn`
2. `yarn bootstrap`
3. `yarn start`
   </br>
   </br>
   Lerna run all projects for you.

- [localhost:3000](http://localhost:3000/) (SHELL WITH NEXTJS)
- [localhost:3001](http://localhost:3001/) (STANDALONE REMOTE)
- [localhost:3002](http://localhost:3002/) (STANDALONE REMOTE)
- [localhost:3003](http://localhost:3003/) (STANDALONE REMOTE)
- [localhost:3004](http://localhost:3003/) (STANDALONE REMOTE MFE REACT WITH ROUTERS)
- [localhost:3005](http://localhost:3003/) (STANDALONE REMOTE MFE ANGULAR WITH ROUTERS)
- [http://localhost:4000/modules](http://localhost:4000/modules) (MOCK API)

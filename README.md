# create-svelte

Everything you need to build a Svelte project, powered by [`create-svelte`](https://github.com/sveltejs/kit/tree/main/packages/create-svelte).

## Install a project

```bash
# Create a new project
Clone the repo
Make your .env in root folder
# Create a database, example MySQL
place this in the .env DATABASE_URL = "mysql://root@localhost:3306/yourdb"
update the .env variables
Go edit schema.prisma in prisma folder
change provider to "MySQL" for MySQL DB
# To Install
npm install
# To make table run this
npx prisma migrate dev --name init
Enjoy
```

## Developing

Once you've created a project and installed dependencies with `npm install` (or `pnpm install` or `yarn`), start a development server:

```bash
npm run dev

# or start the server and open the app in a new browser tab
npm run dev -- --open
```

## Building

To create a production version of your app:

```bash
npm run build
```

You can preview the production build with `npm run preview`.
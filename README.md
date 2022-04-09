# Monorepo template

This is a sample monorepo project. It uses yarn workspaces and typescript.

# How to add a new package?

* Create a new directory inside packages
* Copy content from `/template` director into newly created package directory
* Update name in package.json (eg @monorepo/db_client)

# How to add a package dependency?

Open a package tsconfig and add or update `references` section

# How to compile packages? / How to develop?

There is a script in root `yarn watch`. It calls `watch` script in every package. On every change typescript files in `src` get compiled into `dist` directory

# Tips
* when including a package use `name` from `package.json`, not a package directory
* avoid adding dependencies to the root of the project - upgrading one of them means all packages must work with it and some may not be compatible

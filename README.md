# Monorepo template

This is a sample monorepo project. It uses yarn workspaces, lerna, parcel and typescript.

# Package types
api - REST api
core - backend library
ui - react application
ui-components - react component library

# How to add a new package?

* Create a new directory inside packages
* Copy content from `/template` director into newly created package directory
* Update name in package.json (eg @monorepo/db_client)

# How to add a package dependency?

Just add as regular dependency with version number

# How to compile packages? / How to develop?

There is a script in root `yarn watch`. It calls `watch` script in every package. On every change typescript files in `src` get compiled into `dist` directory

# Why there are tsconfig.json and tsconfig.base.json

`tsconfig.json` is used when compiling all packages. Packages are defined in `refereneces` and `files: []` tells to transpile files into `dist`.
`tsconfig.base.json` is used as base configuration for each package.

# Tips
* when including a package use `name` from `package.json`, not a package directory
* avoid adding dependencies to the root of the project - upgrading one of them means all packages must work with it and some may not be compatible

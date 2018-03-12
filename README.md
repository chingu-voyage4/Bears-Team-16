# Bite Sized :fork_and_knife: [![Build Status](https://travis-ci.org/chingu-voyage4/Bears-Team-16.svg?branch=development)](https://travis-ci.org/chingu-voyage4/Bears-Team-16)

by Voyage4 Bears16

## :hamburger: Description

Discover, save and share your tastiest recipes.

## :cake: Development Setup

### Folder structure

* `client` - Client root
* `server` - API server root
* `server/src/index.js` - Express server config
* `server/src/test` - API server tests
* `server/src/db` - Database config
* `server/src/graphql` - GraphQL schemas and resolvers
* `server/src/models` - Datastore models

### Environment

* Clone the repository
* In `server/src/config`, create `dev.js` and `test.js` and set environment variables using `example.js` template
* `cd server && npm install` to install server packages
* `cd client && npm install` to install client packages

### Database

* Setup local [PostgreSQL](https://www.postgresql.org/) database(s) using variables from `server/src/config`
* `npm run db:migrate` to update database migrations
* `npm run db:rollback` to rollback database migrations
* `npm run db:seed` to seed the database

## :pizza: Usage

### API Server

* `npm run test` to run all test suites
* `npm run test:e2e` to run end-to-end tests
* `npm run test:unit` to run unit tests
* `npm run tdd` to enable testing _watch_ mode
* `npm run start` to build and start the server in **production** environment
* `npm run dev` to start the server in **development** environment

### Client

* `npm run test` to run test suites
* `npm rnu build` to build the client for **production**
* `npm run start` to start the client in **development** environment
* Open app on `localhost:3000`

## :fried_shrimp: Stack & Tools

* [Express](https://expressjs.com/) - Web framework
* [PostgreSQL](https://www.postgresql.org/) - Server DBMS
* [Bookshelf](http://bookshelfjs.org/) - SQL ORM
* [GraphQL](http://graphql.org/learn/) - API query language
* [React](https://reactjs.org/) - Frontend library
* [React-Router](https://reacttraining.com/react-router/) - Routing library
* [TravisCI](https://travis-ci.org) - Continuous Integration service
* [Mocha](https://mochajs.org/) and [Jest](https://facebook.github.io/jest/) - Testing frameworks
* [ESLint](https://eslint.org/) - Code linter
* [Airbnb](https://github.com/airbnb/javascript) - Development standards guide

See full list in `package.json` files

## :bear: Authors

* [Ayumi Saito](https://github.com/aaayumi) (Project Manager) :crown:
* [Fred Hawk](https://github.com/osycon)
* [Thomas Lombart](https://github.com/thomlom)
* [Mario Krajacic](https://github.com/thinktwice13)

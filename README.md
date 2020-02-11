# node-express-typescript

_Welcome to my boilerplate for `nodeJS`, `typescript` and `expressJS`_

## Summary

- [node-express-typescript](#node-express-typescript)
  - [Summary](#summary)
  - [Infos](#infos)
  - [What's the objectives of out boilerplate](#whats-the-objectives-of-out-boilerplate)
  - [What have in our boileiplate](#what-have-in-our-boileiplate)
  - [About our stack, You need even know!](#about-our-stack-you-need-even-know)
  - [How to start](#how-to-start)
  - [How to development with this boilerplate](#how-to-development-with-this-boilerplate)
  - [How to delivery this boilerplate](#how-to-delivery-this-boilerplate)
  - [Hackathon startup](#hackathon-startup)
  - [Folder Structure](#folder-structure)
  - [Config Documentations](#config-documentations)
  - [References](#references)
  - [Todos:](#todos)

## Infos

 - Version of nodejs recommended and testes is v12.13.1 LTS

 - We recomemend you use the nvm to control the nodejs version. See more infos in [this](https://github.com/nvm-sh/nvm) link.

## What's the objectives of out boilerplate

 - People which are starting project for large scale.
 - Hackathon's attendeers, see [this](#hackathon-startup) pointer
 - Lovers of nodeJS
 - Companies that want to create projects that meet good practice requirements

## What have in our boileiplate
 - Nodejs
 - Typescript
 - ExpressJS
 - _[comming soon] Custom configuration values_
 - _[comming soon] API Integration_
 - _[comming soon] Auth Integration with OAuth2_
 - _[comming soon] Crud Facilities_
 - _[comming soon] Logs with some controller_
 - _[comming soon] Monitoring_
 - _[comming soon] Docker Images_
 - _[comming soon] CI/CD Integration and recomendation_
 - _[comming soon] Multiples datasources(sqlite, relational with sequelize, mongodb)_

## About our stack, You need even know!

Really, we use the ExpressJS to processing out routes, but it's half-hidden. We use the [routing-controller](https://github.com/typestack/routing-controllers) to interact with the developer because this boilerplate follows the principles of DDD and Object-Oriented.

Another important thing is our `config` folder. It has the configuration values of the application. Is very flexile, because you can declare your configuration values, like the connection string of your database, constants, api integrations keys, etc. To manage this feature, we are using the **config** dependence. See more about it in [this](https://www.npmjs.com/package/config) link.

By default, we apply the following middleware in the express application: `Body Parser`, `Cors` and `Helmet`. See about they:
https://github.com/expressjs/body-parser, and https://github.com/helmetjs/helmet. However, if you want perform file update, you need install `multer`. See in `routing-controller` documentation

## How to start

## How to development with this boilerplate

## How to delivery this boilerplate

## Hackathon startup

## Folder Structure

## Config Documentations

## References

 - https://github.com/typestack/routing-controllers
 - https://github.com/lorenwest/node-config
 - https://github.com/expressjs/body-parser
 - https://github.com/expressjs/cors
 - https://github.com/helmetjs/helmet

## Todos:
 - Improved `cors` constraints
 - Improved `helmet` filters
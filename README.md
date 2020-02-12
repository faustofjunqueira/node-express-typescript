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
  - [Errors References](#errors-references)
      - [ValidationError (400)](#validationerror-400)
      - [AutenticationError (401)](#autenticationerror-401)
      - [AuthorizationError (403)](#authorizationerror-403)
      - [NotFoundError (404)](#notfounderror-404)
      - [BusinessError (422)](#businesserror-422)
      - [InternalServerError (500)](#internalservererror-500)
      - [NotImplementedError (501)](#notimplementederror-501)
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

> All code of this boilerplate is opened. The reason for that is that all code is flexible. You can, and, you must read and change the code to answer your questions and requisites.

## What have in our boileiplate
- Nodejs
- Typescript
- ExpressJS
- Custom configuration values
- Errors Controllers
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
https://github.com/expressjs/body-parser, https://github.com/expressjs/cors and https://github.com/helmetjs/helmet. However, if you want perform file update, you need install `multer`. See in [`routing-controller`](https://github.com/typestack/routing-controllers#inject-uploaded-file) documentation.

As for the application errors, we created a series of errors to facilitate the development, see **[Errors References](#errors-references)**. They are in the `errors` folder. Whenever you need to issue an error, first, implement an error by extending one of the base errors, you can leave it in the `errors` folder and then yes, use them.

## How to start

## How to development with this boilerplate

## How to delivery this boilerplate

## Hackathon startup

## Folder Structure

## Config Documentations

## Errors References

The errors can be thrown in any place of application. But, if anyone of the below errors will throw inside a route, a controller, these errors will perform like an HTTP error and emit the relative status code.

#### ValidationError (400)

This error represent the validation data trafficked in the request. To validate data, we use the [`class-validator`](https://github.com/typestack/class-validator) and [`class-transform`](https://github.com/typestack/class-transformer). Both dependences are user by [`routing-controller`](https://github.com/typestack/routing-controllers).

**We don't use the HttpErrors of Routing Controller, we prefer customize ours errors, based in Routing Controllers errors.**

#### AutenticationError (401)

_Comming soon, we will use the passport library and keycloak_

#### AuthorizationError (403)

_Comming soon, we will use the passport library and keycloak_

#### NotFoundError (404)

If the resource is not found.

#### BusinessError (422)

_Comming soon_

#### InternalServerError (500)

This error represents any generic error that occurs inside of the application. If error thrown not will handler, and happen inside of a controller, the boilerplate will transform this error in InternalServerError and emit the 500 status code.

#### NotImplementedError (501)

If you want implement a method and do not are completed. You can emit this error. But it's not recomended.

## References

- https://nodejs.org/
- https://expressjs.com/
- https://www.typescriptlang.org/
- https://github.com/typestack/routing-controllers
- https://github.com/typestack/class-transformer
- https://github.com/typestack/class-validator
- https://github.com/lorenwest/node-config
- https://github.com/expressjs/body-parser
- https://github.com/helmetjs/helmet
- https://github.com/expressjs/cors
- https://nodejs.org/api/https.html
- https://nodejs.org/api/http.html

## Todos:
 - Audit
 - Message Control
 - Logging Error middleware
 - Logging request middleware
 - Improved `cors` constraints
 - Improved `helmet` filters

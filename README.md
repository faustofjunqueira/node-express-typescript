# node-express-typescript

_Welcome to my boilerplate for `nodeJS`, `typescript` and `expressJS`_

## Summary

- [node-express-typescript](#node-express-typescript)
  - [Summary](#summary)
  - [Infos](#infos)
  - [Objectives](#objectives)
  - [Tecnologies](#tecnologies)
  - [About our stack](#about-our-stack)
  - [How to start](#how-to-start)
  - [How to develop with this boilerplate](#how-to-develop-with-this-boilerplate)
  - [How to deliver this boilerplate](#how-to-deliver-this-boilerplate)
  - [Hackathon startup](#hackathon-startup)
  - [Folder Structure](#folder-structure)
  - [Config References](#config-references)
  - [Errors References](#errors-references)
      - [ValidationError (400)](#validationerror-400)
      - [AutenticationError (401)](#autenticationerror-401)
      - [AuthorizationError (403)](#authorizationerror-403)
      - [NotFoundError (404)](#notfounderror-404)
      - [BusinessError (422)](#businesserror-422)
      - [InternalServerError (500)](#internalservererror-500)
      - [NotImplementedError (501)](#notimplementederror-501)
  - [Library References](#library-references)
  - [Todos:](#todos)

## Infos

 - Version of nodejs recommended, and tested, is v12.13.1 LTS

 - We recomemend you use the nvm to control the nodejs version. See more infos in [this link](https://github.com/nvm-sh/nvm).

## Objectives

 - People which are starting large-scale projects;
 - Hackathon's attendeers, see in [this section](#hackathon-startup);
 - NodeJS Lovers;
 - Companies which want to create projects that meet good practice requirements;

> All code of this boilerplate is opened. The reason for that is that all code is flexible. You can, and, you must read and change the code to answer your questions and requisites.

## Tecnologies
- Nodejs
- Typescript
- ExpressJS
- Custom configuration values
- Errors Controllers
- _[coming soon] API Integration_
- _[coming soon] Auth Integration with OAuth2_
- _[coming soon] Crud Facilities_
- _[coming soon] Logs with some controller_
- _[coming soon] Monitoring_
- _[coming soon] Docker Images_
- _[coming soon] CI/CD Integration and recomendation_
- _[coming soon] Multiples datasources(sqlite, relational with sequelize, mongodb)_

## About our stack

Really, we use the ExpressJS to processing out routes, but it's half-hidden. We use the [routing-controller](https://github.com/typestack/routing-controllers) to interact with the developer because this boilerplate follows the principles of DDD and Object-Oriented.

Another important thing is our `config` folder. It has the configuration values of the application. Is very flexile, because you can declare your configuration values, like the connection string of your database, constants, api integrations keys, etc. To manage this feature, we are using the **config** dependence. See more about it in [this](https://www.npmjs.com/package/config) link.

By default, we apply the following middleware in the express application: `Body Parser`, `Cors` and `Helmet`. See about they:
https://github.com/expressjs/body-parser, https://github.com/expressjs/cors and https://github.com/helmetjs/helmet. However, if you want perform file update, you need install `multer`. See in [`routing-controller`](https://github.com/typestack/routing-controllers#inject-uploaded-file) documentation.

As for the application errors, we created a series of errors to facilitate the development, see **[Errors References](#errors-references)**. They are in the `errors` folder. Whenever you need to issue an error, first, implement an error by extending one of the base errors, you can leave it in the `errors` folder and then yes, use them.

To validate your inputs by request, either by `querystring` or by `body`, we use [`class-validator`](https://github.com/typestack/class-validator). Study it.

## How to start

## How to develop with this boilerplate

## How to deliver this boilerplate

## Hackathon startup

## Folder Structure

## Config References

## Errors References

Errors can be thrown in any place of application. But, if any of below errors is thrown inside a route/controller, these errors will perform like a HTTP error and emit the relative status code.

#### ValidationError (400)

This error represents the validation of request payload. To validate data, we use the [`class-validator`](https://github.com/typestack/class-validator) and [`class-transform`](https://github.com/typestack/class-transformer). Both dependences are used by [`routing-controller`](https://github.com/typestack/routing-controllers).

**We don't use HttpErrors of Routing Controller, we prefer to customize ours errors.**

#### AutenticationError (401)

_Coming soon, we will use the passport library and keycloak_

#### AuthorizationError (403)

_Coming soon, we will use the passport library and keycloak_

#### NotFoundError (404)

If the resource is not found.

#### BusinessError (422)

_Coming soon_

#### InternalServerError (500)

This error represents any generic error that occurs inside of the application. If error happen inside of a controller and is not handled, the boilerplate will transform this error in `InternalServerError` and emit the 500 status code.

#### NotImplementedError (501)

If you want to implement a method and it isn't completed yet. You can emit this error, **but it's not recomended**.

## Library References

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
 - Integrations:
   - Keycloak
   - Redis
   - ELK
   - SQLZ
   - Mongoose
   - Monitoring ( Phometheus | Grafana )

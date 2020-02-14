# node-express-typescript

_Welcome to my boilerplate for `nodeJS`, `typescript` and `expressJS`, using `nestjs`_

- [node-express-typescript](#node-express-typescript)
  - [Infos](#infos)
  - [Commands](#commands)
    - [Installation](#installation)
    - [Running the app](#running-the-app)
    - [Test](#test)
  - [TODO](#todo)

## Infos

**Version recommended and tested**:
- Nodejs v12.13.1 LTS, _we recomemend you use the nvm to control the nodejs version. See more infos in [this link](https://github.com/nvm-sh/nvm)_.
- NPM v6.13.2
- Typescript v3.7.4
- NestJS CLI v6.14.2



## Commands

### Installation

```bash
$ npm install
```

### Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

### Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## TODO

- [x] Config
  - node-config
- [x] Test
  - jest
  - supertest
- [ ] Test Implements
- [ ] Auditoria
  - TypeORM with Logger
- [ ] API Docs
  - Swagger
- [x] Validation Data
  - class-validator
- [ ] Runtime
  - docker
  - docker-compose
- [ ] Response Error Handler
- [ ] Crud
- [ ] Cache
   -  Redis
- [ ] BD
   -  E/R
   -  Mongoose
   -  TypeORM
   -  Sequelize
- [ ] I18N
- [ ] Auth
   -  Oauth2
   -  keycloak
   -  Autentication Code with PKCE
   -  passport
   -  passport-oauth2
- [ ] Monitoring
   -  Prometheus
   -  Grafana
- [ ] Log
   -  ELK
   -  winston

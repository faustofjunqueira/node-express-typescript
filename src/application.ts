import { Junda } from './controller';
import { useExpressServer } from 'routing-controllers'
import express = require('express');
import config = require('config');
import cors = require('cors');
import helmet = require('helmet');
import bodyParser = require('body-parser');


export class Application {
  
  /**
   * Express Application 
   *
   * @private
   * @type {express.Application}
   * @memberof Application
   */
  private expressApplication: express.Application;
  
  get httpHandler(): express.Application {
    return this.expressApplication;
  }

  /**
   * Creates an instance of Application.
   * @memberof Application
   */
  constructor() {
    this.expressApplication = this.configureRouting();
  }

  /**
   * Configure Routing
   *
   * @private
   * @memberof Application
   */
  private configureRouting(): express.Application {
    // creating express application
    const application = express();
    // Increases the application buffer to 200M
    application.set("maxFieldsSize", '200 * 1024 * 1024 * 1024');
    // Enable the application's cors
    if(config.has('http.cors')) {
      application.options('*', cors()) // Enable pre-flight
      application.use(cors(config.get('http.cors')));
    }
    // Allow traffic up to 5mb
    application.use(bodyParser.json({ limit: '5mb' }));
    application.use(bodyParser.urlencoded({ limit: '5mb', extended: true }));
    application.use(bodyParser.raw({ limit: '5mb' }));
    // Apply good http practices to the application
    application.use(helmet());

    useExpressServer(application, {
      ...config.get('http.routing-controller'),
      controllers: [Junda]
    });

    return application;
  }

}

export default new Application;
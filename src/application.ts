import { createExpressServer, useExpressServer } from 'routing-controllers'
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
  private _expressApplication: express.Application;
  
  get express(): express.Application {
    return this._expressApplication;
  }

  /**
   * Bootstrap application
   * Configuring the router, logs, database, etc
   *
   * @static
   * @returns {Application}
   * @memberof Application
   */
  public static bootstrap(): Application {
    const app = new Application();
    return app;
  }

  /**
   * Creates an instance of Application.
   * @memberof Application
   */
  private constructor() {
    this._expressApplication = this._configureRouting();
  }

  /**
   * Configure Routing
   *
   * @private
   * @memberof Application
   */
  private _configureRouting(): express.Application {
    // creating express application
    const application = express();
    // Increases the application buffer to 200M
    application.set("maxFieldsSize", '200 * 1024 * 1024 * 1024');
    // Enable the application's cors
    if(config.has('http.cors') {
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
      ...config.get('routing-controller:', {})
    });

    return application;
  }

}


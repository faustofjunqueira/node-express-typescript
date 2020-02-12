process.env["NODE_CONFIG_DIR"] = __dirname + "/../config/";
import "reflect-metadata";
import { HTTPServer } from './server';
import config = require('config');
import application from './application';

// Instantiate the application 
const server = HTTPServer.of(application.httpHandler, config.get('http.server'));
console.log(server);

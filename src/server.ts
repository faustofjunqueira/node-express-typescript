import { Server, createServer, RequestListener } from 'http';

export interface HttpServerConfiguration {

  /**
   * Port that will run the server
   *
   * @type {number}
   * @memberof ServerHttpConfiguration
   */
  port: number;

  // TODO: Create SSL Configuration
}

/**
 * Handle http server, like HTTP Server of http module
 *
 * @export
 * @class HTTPServer
 */
export class HTTPServer {
  
  /**
   * Server http
   *
   * @private
   * @type {Server}
   * @memberof HTTPServer
   */
  private server: Server;

  /**
   * port of connection
   *
   * @readonly
   * @private
   * @type {number}
   * @memberof HTTPServer
   */
  private get port(): number {
    return this.config && this.config.port ? 
      Number(this.config.port) : 0;
  }

  /**
   * Instantiate a Server
   *
   * @static
   * @param {RequestListener} application
   * @param {HttpServerConfiguration} config
   * @param {boolean} [started=true]
   * @returns {HTTPServer}
   * @memberof HTTPServer
   */
  public static of(application: RequestListener, config: HttpServerConfiguration, started: boolean = true): HTTPServer {
    const server = new HTTPServer(application, config);
    if(started) {
      setImmediate(() => server.up());
    }
    return server;
  }

  /**
   * Creates an instance of HTTPServer.
   * @param {RequestListener} application
   * @param {HttpServerConfiguration} config
   * @memberof HTTPServer
   */
  private constructor(private application: RequestListener, private config: HttpServerConfiguration) {
    this.server = createServer(this.application);
  }
  
  /**
   * Up server
   *
   * @memberof HTTPServer
   */
  public up(): void {
    if(!this.server.listening) {
      this.server.listen(this.port);
    }
  }

  /**
   * Down server
   *
   * @memberof HTTPServer
   */
  public down(): void {
    if(this.server.listening) {
      this.server.close();
    }
  }

}
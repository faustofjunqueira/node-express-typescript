import { Injectable } from '@nestjs/common';
import { DNSHealthIndicator, TerminusEndpoint, TerminusModuleOptions, TerminusOptionsFactory } from '@nestjs/terminus';
import config = require('config');

@Injectable()
export class TerminusOptionsService implements TerminusOptionsFactory {

  constructor(
    private readonly dns: DNSHealthIndicator,
  ) {}

  createTerminusOptions(): TerminusModuleOptions {
    if(!config.has("healthcheck")) {
      // TODO: Message Catalog
      throw new ReferenceError("Your config file dont have healthcheck property. See a example in https://github.com/faustofjunqueira/node-express-typescript/blob/master/config/default.yaml")
    }
    const pingList = config.get('healthcheck.ping') as {[key: string]: string};
    const healthIndicators = [];
    for(let key in pingList) {
      healthIndicators.push(async () => this.dns.pingCheck(key, pingList[key]));
    }
    const healthEndpoint: TerminusEndpoint = {
      url: config.get('healthcheck.url'),
      healthIndicators,
    };
    return {
      endpoints: [healthEndpoint],
    };
  }
}

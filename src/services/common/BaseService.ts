import QueryString from 'qs';
import axios, { AxiosStatic } from 'axios';
import * as qs from './qs';

import * as url from './url';

import { get } from '../../configuration';

class HttpClient {
  private service: AxiosStatic;

  public qs: {
    parse: (value: string) => QueryString.ParsedQs;
    stringify: (object: object) => string;
  };

  public url: {
    build?: (arg0: [any][] | string) => any;
    readonly default?: {};
  };

  constructor() {
    const config = get();
    const service = axios;
    //service.defaults.timeout = 20000;
    service.defaults.withCredentials = true;
    service.defaults.headers.post['Content-Type'] = 'application/json';
    service.defaults.headers.post['Access-Control-Allow-Origin'] = '*';
    service.defaults.headers.post['Accept'] = '*/*';
    // service.defaults.headers.post['mode'] = 'cors';
    service.defaults.baseURL = "http://5.161.104.54";
    // service.defaults.proxy = {
    //   protocol: 'http',
    //   host: '5.161.104.54',
    //   port: 8080,
    // }

    //service.defaults.headers.post['mode'] = 'no-cors';
    // registerInterceptor(service);
    this.service = axios;
    this.qs = qs;
    this.url = url;
  }

  static combine(tempURL: string, queryString: string) {
    return [tempURL, queryString].join('?');
  }

  async get(tempURL: string, config: object) {
    const { service } = this;
    return service.get(tempURL, config);
  }

  async delete(tempURL: string, config: object) {
    const { service } = this;
    return service.delete(tempURL, config);
  }

  async head(tempURL: string, config: object) {
    const { service } = this;
    return service.head(tempURL, config);
  }

  async post(tempURL: string, data: object, config: object) {
    const { service } = this;
    return service.post(tempURL, data, config);
  }

  async put(tempURL: string, data: object, config: object) {
    const { service } = this;
    return service.put(tempURL, data, config);
  }

  async patch(tempURL: string, data: object, config: object) {
    const { service } = this;
    return service.patch(tempURL, data, config);
  }
}

export default HttpClient;

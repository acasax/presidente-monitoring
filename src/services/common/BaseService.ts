import QueryString from 'qs';
import axios, { AxiosStatic } from 'axios';
import * as qs from './qs';

import * as url from './url';

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

  constructor(token?: string, contentType = 'application/json') {
    const service = axios;
    service.defaults.withCredentials = true;
    service.defaults.headers['Content-Type'] = contentType;
    service.defaults.headers['Access-Control-Allow-Origin'] = '*';
    service.defaults.headers.post.Accept = '*/*';
    service.defaults.headers.post.Authorization = token;
    service.defaults.headers.get.Authorization = token;

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

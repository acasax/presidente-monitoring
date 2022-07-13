export const API_URL = '5.161.104.54';
export const PORT = '8080';

export enum METHODS {
    POST = 'POST',
    GET = 'GET',
    PUT = 'PUT',
}

export type TRequestParams = {
    host: string;
    port: string;
    endPoint: string;
    method: METHODS;
    headers: any;
    data: any;
};
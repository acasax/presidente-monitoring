import { AxiosResponse } from 'axios';
import BaseService from '../../services/common/BaseService';

const SendExcelWithTransaction = async (data = {}, query = {}, token: string): Promise<any> => {
  const baseService = new BaseService(token, 'multipart/form-data');
  const queryString = baseService.qs.stringify(query);
  const path = baseService.url.build('transaction/add');
  const url = BaseService.combine(path, queryString);

  try {
    await baseService.post(url, data, {});
  } catch (e) {
    console.log(e);
    return {
      message: e.message,
    };
  }

  return null;
};

const getDataForLocation = async (token: string, query = {}): Promise<any> => {
  const baseService = new BaseService(token);
  let queryString = '';

  Object.keys(query)
    .forEach((key) => {
      queryString += key;
      queryString += '=';
      if (key === 'dateQueryType') {
        queryString += query[key];
      } else {
        queryString += '[';
        if (key === 'dates') {
          queryString += '"';
          queryString += query[key];
          queryString += '"';
        } else {
          queryString += query[key];
        }
        queryString += ']';
      }
      queryString += '&';
    });

  queryString = queryString.slice(0, -1);

  const path = baseService.url.build('transaction/profit-by-location');
  const url = BaseService.combine(path, queryString);
  const response: AxiosResponse<any> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

export { SendExcelWithTransaction, getDataForLocation };

export default {};

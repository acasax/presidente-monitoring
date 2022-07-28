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

const getDataForLocation = async (token: string): Promise<any> => {
  const baseService = new BaseService(token);
  // const queryString = baseService.qs.stringify(query);
  const path = baseService.url.build('transaction/profit-by-location?locations=[3,4,7]&dates=["07.2022"]&dateQueryType=MONTH');
  // const url = BaseService.combine(path, '');
  const response: AxiosResponse<any> = await baseService.get(path, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return {
    username: response?.data?.username,
    password: response?.data?.password,
    token: response?.headers?.authorization,
  };
};

export { SendExcelWithTransaction, getDataForLocation };

export default {};

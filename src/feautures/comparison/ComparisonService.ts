import { AxiosResponse } from 'axios';
import BaseService from '../../services/common/BaseService';
import { ITransaction } from '../main/MainModal';

const getComparisonAllTimeDate = async (token: string, query = {}): Promise<any> => {
  const baseService = new BaseService(token);
  let queryString = '';

  Object.keys(query)
    .forEach((key) => {
      queryString += key;
      queryString += '=';
      queryString += '[';
      if (key === 'dates') {
        // eslint-disable-next-line array-callback-return,@typescript-eslint/no-shadow
        query[key].map((x) => {
          queryString += `"${x}"`;
          queryString += ',';
        });
        queryString = queryString.slice(0, -1);
      } else {
        queryString += query[key];
      }
      queryString += ']';
      queryString += '&';
    });
  // queryString = queryString.slice(0, -1);

  const path = baseService.url.build('comparison');
  const url = `${path}?${queryString}`;
  const response: AxiosResponse<ITransaction> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

export {
  getComparisonAllTimeDate,
};

export default {};

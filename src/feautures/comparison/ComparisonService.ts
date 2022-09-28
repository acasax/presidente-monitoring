import { AxiosResponse } from 'axios';
import BaseService from '../../services/common/BaseService';
import { IAverageAndSumByDate, IComparisonAllTimeData, IComparisonData } from './ComparisonModal';

const getComparisonAllTimeDate = async (token: string, query = {}): Promise<any> => {
  const baseService = new BaseService(token);
  // const queryString = '';

  // Object.keys(query)
  //   .forEach((key) => {
  //     queryString += key;
  //     queryString += '=';
  //     queryString += '[';
  //     if (key === 'dates') {
  //       // eslint-disable-next-line array-callback-return,@typescript-eslint/no-shadow
  //       query[key].map((x) => {
  //         queryString += `"${x}"`;
  //         queryString += ',';
  //       });
  //       queryString = queryString.slice(0, -1);
  //     } else {
  //       queryString += query[key];
  //     }
  //     queryString += ']';
  //     queryString += '&';
  //   });
  // queryString = queryString.slice(0, -1);

  const path = baseService.url.build('comparison');
  // const url = `${path}?${queryString}`;
  const response: AxiosResponse<IComparisonAllTimeData> = await baseService.get(path, {
    params: query,
  });
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

const getComparisonData = async (token: string, query = {}): Promise<any> => {
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
      }
      queryString += '&';
    });
  queryString = queryString.slice(0, -1);

  const path = baseService.url.build('comparison/grouped');
  const url = `${path}?${queryString}`;
  const response: AxiosResponse<IComparisonData> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};
const getAverageAndSumByDateForComparison = async (token: string, query = {}): Promise<any> => {
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
      }
      queryString += '&';
    });
  queryString = queryString.slice(0, -1);

  const path = baseService.url.build('comparison/average-and-total-difference');
  const url = `${path}?${queryString}`;
  const response: AxiosResponse<IAverageAndSumByDate> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

export {
  getComparisonAllTimeDate,
  getComparisonData,
  getAverageAndSumByDateForComparison,
};

export default {};

import { AxiosResponse } from 'axios';
import BaseService from '../../services/common/BaseService';
import { IAverageAndSumByDate, IBestAndWorstDayOfAllTime, IMachineTransaction, ITransaction } from './MainModal';

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

  return {
    message: 'Uspesno ste dodali fajl',
  };
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

  const path = baseService.url.build('transaction/profit-by-location');
  const url = `${path}?${queryString}`;
  const response: AxiosResponse<ITransaction> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

const getAverageAndSumByDateAndLocation = async (token: string, query = {}): Promise<any> => {
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

  const path = baseService.url.build('transaction/average-and-total-by-location-and-dates');
  const url = `${path}?${queryString}`;
  const response: AxiosResponse<IAverageAndSumByDate> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

const getDataForMachine = async (token: string, query = {}): Promise<any> => {
  const baseService = new BaseService(token);
  let queryString = '';

  Object.keys(query)
    .forEach((key) => {
      queryString += key;
      queryString += '=';
      if (key === 'location') {
        queryString += query[key];
      }
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

  const path = baseService.url.build('machine/profit-for-machines-by-location');
  const url = `${path}?${queryString}`;
  const response: AxiosResponse<IMachineTransaction> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

const getBestAndWorstDayAllTime = async (token: string, query = {}): Promise<any> => {
  const baseService = new BaseService(token);
  let queryString = '';

  Object.keys(query)
    .forEach((key) => {
      queryString += key;
      queryString += '=';
      if (key === 'orderBy') {
        queryString += query[key];
      }
    });

  const path = baseService.url.build('transaction/best-worst-day-analytics');
  const url = `${path}?${queryString}`;
  const response: AxiosResponse<IBestAndWorstDayOfAllTime> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

export {
  SendExcelWithTransaction,
  getDataForLocation,
  getAverageAndSumByDateAndLocation,
  getDataForMachine,
  getBestAndWorstDayAllTime,
};

export default {};

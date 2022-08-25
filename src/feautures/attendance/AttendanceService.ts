import { AxiosResponse } from 'axios';
import BaseService from '../../services/common/BaseService';
import { IAverageAndSumByDate, IBestAndWorstDayOfAllTime, ITransaction, IWeekAnalytics } from '../main/MainModal';

const SendExcelWithAttendance = async (data = {}, query = {}, token: string): Promise<any> => {
  const baseService = new BaseService(token, 'multipart/form-data');
  const queryString = baseService.qs.stringify(query);
  const path = baseService.url.build('attendance/add');
  const url = BaseService.combine(path, queryString);

  try {
    await baseService.post(url, data, {});
  } catch (e) {
    console.log(e);
    return {
      status: 'error',
      message: 'Fajl nije kako treba.',
    };
  }

  return {
    status: 'success',
    message: 'Uspesno ste dodali fajl',
  };
};

const getAttendanceForLocation = async (token: string, query = {}): Promise<any> => {
  const baseService = new BaseService(token);
  let queryString = '';

  Object.keys(query)
    .forEach((key) => {
      queryString += key;
      queryString += '=';
      if (key === 'responseDataType') {
        queryString += query[key];
      } else {
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
      }
    });
  // queryString = queryString.slice(0, -1);

  const path = baseService.url.build('location/attendance-by-location');
  const url = `${path}?${queryString}`;
  const response: AxiosResponse<ITransaction> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

const getAverageAndSumByAttendanceAndLocation = async (token: string, query = {}): Promise<any> => {
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

  const path = baseService.url.build('attendance/average-and-total-by-location-and-dates');
  const url = `${path}?${queryString}`;
  const response: AxiosResponse<IAverageAndSumByDate> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

const getBestAndWorstDayAllTimeForAttendance = async (token: string, query = {}): Promise<any> => {
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

  const path = baseService.url.build('attendance/best-worst-day-analytics');
  const url = `${path}?${queryString}`;
  const response: AxiosResponse<IBestAndWorstDayOfAllTime> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

const getAttendanceForWeekAnalytics = async (token: string, query = {}): Promise<any> => {
  const baseService = new BaseService(token);
  let queryString = '';

  Object.keys(query)
    .forEach((key) => {
      queryString += key;
      queryString += '=';
      if (key === 'location') {
        queryString += query[key];
        queryString += '&';
      } else {
        if (key === 'sortType') {
          queryString += query[key];
        } else {
          queryString += '[';
          if (key === 'months') {
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
      }
    });
  queryString = queryString.slice(0, -1);

  const path = baseService.url.build('attendance/week-analytics');
  const url = `${path}?${queryString}`;
  const response: AxiosResponse<IWeekAnalytics> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

const getAttendanceForWeekAnalyticsFooter = async (token: string, query = {}): Promise<any> => {
  const baseService = new BaseService(token);
  let queryString = '';

  Object.keys(query)
    .forEach((key) => {
      queryString += key;
      queryString += '=';
      if (key === 'location') {
        queryString += query[key];
        queryString += '&';
      } else {
        if (key === 'sortType') {
          queryString += query[key];
        } else {
          queryString += '[';
          if (key === 'months') {
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
      }
    });
  queryString = queryString.slice(0, -1);

  const path = baseService.url.build('attendance/best-or-worst-day-in-month');
  const url = `${path}?${queryString}`;
  const response: AxiosResponse<IWeekAnalytics> = await baseService.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return response.data;
};

// eslint-disable-next-line max-len
const getBestAndWorstInChosenMountsForAttendance = async (token: string, query = {}): Promise<any> => {
  const baseService = new BaseService(token);
  let queryString = '';

  Object.keys(query)
    .forEach((key) => {
      queryString += key;
      queryString += '=';
      if (key === 'location') {
        queryString += query[key];
        queryString += '&';
      } else {
        if (key === 'sortType') {
          queryString += query[key];
        } else {
          queryString += '[';
          if (key === 'months') {
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
      }
    });
  queryString = queryString.slice(0, -1);

  const path = baseService.url.build('attendance/best-worst-day-between-months');
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
  SendExcelWithAttendance,
  getAttendanceForLocation,
  getAverageAndSumByAttendanceAndLocation,
  getBestAndWorstDayAllTimeForAttendance,
  getAttendanceForWeekAnalytics,
  getAttendanceForWeekAnalyticsFooter,
  getBestAndWorstInChosenMountsForAttendance,
};

export default {};

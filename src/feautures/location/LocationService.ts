import { AxiosResponse } from 'axios';
import BaseService from '../../services/common/BaseService';
import { ILocationSelectPromise } from './locationModal';

const getLocations = async (token: string, query = {}): Promise<ILocationSelectPromise> => {
  const baseServices = new BaseService(token);
  const queryString = baseServices.qs.stringify(query);
  const path = baseServices.url.build('location');
  const url = BaseService.combine(path, queryString);

  const response: AxiosResponse<any> = await baseServices.get(url, {});
  if (response?.data?.statusCode) {
    return {
      message: response?.data?.message,
    };
  }
  return {
    data: response.data,
  };
};

export { getLocations };

export default {};

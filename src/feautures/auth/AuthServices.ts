import { AxiosResponse } from 'axios';
import BaseService from '../../services/common/BaseService';
import { IUser } from './AuthModal';

const Login = async (data = {}, query = {}): Promise<IUser> => {
  data = JSON.stringify(data);
  const baseService = new BaseService();
  const queryString = baseService.qs.stringify(query);
  const path = baseService.url.build('user/auth');
  const url = BaseService.combine(path, queryString);
  const response: AxiosResponse<IUser> = await baseService.post(url, data, {});
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

export { Login };

export default {};

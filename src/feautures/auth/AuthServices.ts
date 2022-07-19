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

  const res = {
    username: response.data.username,
    password: response.data.password,
    token: response.headers.authorization,
  };
  return res;
};

export { Login };

export default {};

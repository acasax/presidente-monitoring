import { AxiosResponse } from "axios";
import BaseService from "../../common/BaseService";
import { IUser } from "./AuthModal";

const Login = async (data = {}, query = {}): Promise<IUser[]> => {
  console.log('data', data);
  data = JSON.stringify(data);
  const baseService = new BaseService();
  const queryString = baseService.qs.stringify(query);
  const path = baseService.url.build('user/auth');
  const url = BaseService.combine(path, queryString);
  const response: AxiosResponse<IUser[]> = await baseService.post(url, data, {});
  return response.data;
};


export { Login };
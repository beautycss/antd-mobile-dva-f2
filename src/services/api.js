import { stringify } from 'qs';
import request from '../utils/request';

export async function getUsers(params) {
  return request(`/api/users?${stringify(params)}`);
}

export async function getFakeChartData(params) {
  return request(`/api/fakeChartData?${stringify(params)}`);
}

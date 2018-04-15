import { stringify } from 'qs';
import request from '../utils/request';
import { host } from './params';

export async function getUsers(params) {
  return request(`/api/users?${stringify(params)}`);
}

export async function getFakeChartData(params) {
  return request(`/api/fakeChartData?${stringify(params)}`);
}

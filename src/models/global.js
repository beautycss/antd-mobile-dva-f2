// import { getUsers } from '../services/api';

export default {
  namespace: 'global',

  state: {
    collapsed: true,
    notices: [],
  },

  effects: {
    *list({ payload, callback }, { call, put }) {
      // const response = yield call(getUsers, payload);
      // yield put({
      //   type: 'save',
      //   payload: response ? response.data : [],
      // });
      // if (callback) callback(response);
    },
  },

  reducers: {
    save(state, action) {
      return {
        ...state,
        data: action.payload,
      };
    },
  },

  subscriptions: {
    setup({ history }) {
      // Subscribe history(url) change, trigger `load` action if pathname is `/`
      // return history.listen(({ pathname, search }) => {
      // });
    },
  },
};

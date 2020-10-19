import {http, api} from '../../request'
export default {
  namespaced: true,
  state: {
    userInfo: {}
  },
  mutations: {
    setUserInfo(state, payload){
      state.userInfo = payload;
    }
  },
  actions: {
    // 请求用户信息
    async requestUserInfo(context){
      const result = await http.get(api.USER_INFO_API);
      // 保存用户的类型，以便刷新后可以先使用上一次的状态
      localStorage.setItem('userType', result.type);
      context.commit('setUserInfo', result);
    }
  }
}
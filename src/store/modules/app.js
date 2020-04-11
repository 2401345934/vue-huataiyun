const modules = {
  namespaced: true,
  state: {
    isApp: true
  },
  mutations: {
    setIsApp(state, value) {
      state.isApp = value;
    }
  }


};


export default modules;
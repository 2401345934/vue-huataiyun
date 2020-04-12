const modules = {
  namespaced: true,
  state: {
    isApp: true,
    currentName: "首页",
  },
  mutations: {
    setIsApp(state, value) {
      state.isApp = value;
    },
    setCurrentName(state,value) {
      state.currentName = value;
    }
  },
  getters: {
    currentName: state => state.currentName
  }


};


export default modules;
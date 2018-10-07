const initialState = {
  shouldShowAddressCandidateList: false,
};

const pvmStore = {
  state: initialState,
  mutations: {
    setShouldShowAddressCandidateList(state, payload) {
      state.shouldShowAddressCandidateList = payload;
    },
  }
}

export default pvmStore;

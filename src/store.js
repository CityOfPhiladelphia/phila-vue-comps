const initialState = {
  shouldShowAddressCandidateList: false,
  popover: '',
};

const pvmStore = {
  state: initialState,
  mutations: {
    setShouldShowAddressCandidateList(state, payload) {
      state.shouldShowAddressCandidateList = payload;
    },
    setPopover(state, data) {
      state.popover = data;
    },
  }
}

export default pvmStore;

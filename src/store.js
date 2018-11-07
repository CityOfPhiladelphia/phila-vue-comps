const initialState = {
  // configurableInputCategorySelected: '',
  // configurableInputValueEntered: '',
  shouldShowAddressCandidateList: false,
  popover: '',
};

const pvmStore = {
  state: initialState,
  mutations: {
    // setConfigurableInputCategorySelected(state, payload) {
    //   state.configurableInputCategorySelected = payload;
    // },
    // setConfigurableInputValueEntered(state, payload) {
    //   state.configurableInputValueEntered = payload;
    // },
    setShouldShowAddressCandidateList(state, payload) {
      state.shouldShowAddressCandidateList = payload;
    },
    setPopover(state, data) {
      state.popover = data;
    },
  }
}

export default pvmStore;

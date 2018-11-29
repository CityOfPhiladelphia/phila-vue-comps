const initialState = {
  // configurableInputCategorySelected: '',
  // configurableInputValueEntered: '',
  shouldShowAddressCandidateList: false,
  popover: {
    open: false,
    text: '',
    options: {},
  },
  fullScreenTopicsEnabled: false,
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
    setPopoverOpen(state, payload) {
      state.popover.open = payload;
    },
    setPopoverText(state, payload) {
      state.popover.text = payload;
    },
    setPopoverOptions(state, payload) {
      state.popover.options = payload;
    },
    setFullScreenTopicsEnabled(state, payload) {
      state.fullScreenTopicsEnabled = payload;
    },
  }
}

export default pvmStore;

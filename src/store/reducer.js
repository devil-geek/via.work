const initialState = {
  recent: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE":
      return {
        recent: state.recent.concat(action.value)
      };
    default:
      return state  
  }
};

export default reducer;

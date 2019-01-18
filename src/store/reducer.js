const initialState = {
  recent: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "SAVE":
      return {
        ...state,
        recent: state.recent.concat(action.value)
      };
    case "DELETE":
      return {
        ...state,
        recent: state.recent.filter(item => action.value !== item.job_uuid)
      };
    default:
      return state;
  }
};

export default reducer;

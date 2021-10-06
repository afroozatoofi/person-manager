export const setPerson = (event) => {
  return async (dispatch) => {
    await dispatch({ type: "SET_PERSON", payload: event.target.value });
  };
};

export const clearPerson = () => {
  return async (dispatch) => {
    dispatch({ type: "CLEAR_PERSON", payload: "" });
  };
};

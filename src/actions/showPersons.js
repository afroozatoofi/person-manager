export const setShowPersons = () => {
  return async (dispatch) => {
    dispatch({ type: "SHOW_PERSONS" });
  };
};

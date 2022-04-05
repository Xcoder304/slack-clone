const initailstate = {
  user: null,
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "USER__LOGIN":
      return {
        ...state,
        user: action.user,
      };

    default:
      return state;
  }
};

export { initailstate, reducer };

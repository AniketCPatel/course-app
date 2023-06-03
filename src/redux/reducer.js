import { FETCH_COURSES_SUCCESS } from "./action";

const initialState = {
  courses: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_COURSES_SUCCESS:
      return {
        ...state,
        courses: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;

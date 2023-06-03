import axios from "axios";

export const FETCH_COURSES_SUCCESS = "FETCH_COURSES_SUCCESS";

export const fetchCoursesSuccess = (courses) => ({
  type: FETCH_COURSES_SUCCESS,
  payload: courses,
});

export const fetchCourses = () => {
  return (dispatch) => {
    axios
      .get("http://localhost:4001/courses")
      .then((response) => {
        dispatch(fetchCoursesSuccess(response.data));
      })
      .catch((error) => {
        console.log("err", error);
      });
  };
};

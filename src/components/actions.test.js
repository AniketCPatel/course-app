import axios from "axios";
import { fetchCourses, FETCH_COURSES_SUCCESS } from "./actions";

jest.mock("axios");

test("fetches courses successfully", async () => {
  const courses = [
    {
      id: 1,
      courseName: "Microsoft Power BI Certification Course",
      category: "BI & Visualization",
    },
  ];
  const response = { data: courses };
  axios.get.mockResolvedValue(response);

  const dispatch = jest.fn();
  await fetchCourses()(dispatch);

  expect(dispatch).toHaveBeenCalledWith({
    type: FETCH_COURSES_SUCCESS,
    payload: courses,
  });
});

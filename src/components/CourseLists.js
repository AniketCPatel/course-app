import React, { useEffect } from "react";
import CourseCard from "./CourseCard";
import { useSelector, useDispatch } from "react-redux";
import { fetchCourses } from "../redux/action";

const CourseLists = () => {
  const courseList = useSelector((state) => state.courses);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchCourses());
  }, [dispatch]);

  return (
    <div className="row" style={{ marginTop: "20px" }}>
      {courseList.map((item) => (
        <CourseCard key={item.id} courseData={item} />
      ))}
    </div>
  );
};

export default CourseLists;

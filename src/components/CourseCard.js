import React from "react";
import { Link } from "react-router-dom";

const CourseCard = ({ courseData }) => {
  return (
    <div className="col-sm-4" style={{ marginBottom: "10px" }}>
      <div className="card">
        <img
          style={{ width: "100%", height: "150px" }}
          src={courseData.courseImageUrl}
          className="card-img-top"
          alt={courseData.courseName}
        />
        <div className="card-body">
          <h5 className="card-title">{courseData.courseName}</h5>
          <div
            style={{
              display: "flex",
              gap: 10,
            }}
          >
            <span
              className="card-text badge bg-warning text-dark"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 5,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-award"
                viewBox="0 0 16 16"
              >
                <path d="M9.669.864 8 0 6.331.864l-1.858.282-.842 1.68-1.337 1.32L2.6 6l-.306 1.854 1.337 1.32.842 1.68 1.858.282L8 12l1.669-.864 1.858-.282.842-1.68 1.337-1.32L13.4 6l.306-1.854-1.337-1.32-.842-1.68L9.669.864zm1.196 1.193.684 1.365 1.086 1.072L12.387 6l.248 1.506-1.086 1.072-.684 1.365-1.51.229L8 10.874l-1.355-.702-1.51-.229-.684-1.365-1.086-1.072L3.614 6l-.25-1.506 1.087-1.072.684-1.365 1.51-.229L8 1.126l1.356.702 1.509.229z" />
                <path d="M4 11.794V16l4-1 4 1v-4.206l-2.018.306L8 13.126 6.018 12.1 4 11.794z" />
              </svg>
              {courseData.category}
            </span>
            <p
              className="card-text badge bg-success"
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                gap: 5,
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-person-badge"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 2a.5.5 0 0 0 0 1h3a.5.5 0 0 0 0-1h-3zM11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                <path d="M4.5 0A2.5 2.5 0 0 0 2 2.5V14a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V2.5A2.5 2.5 0 0 0 11.5 0h-7zM3 2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5v10.795a4.2 4.2 0 0 0-.776-.492C11.392 12.387 10.063 12 8 12s-3.392.387-4.224.803a4.2 4.2 0 0 0-.776.492V2.5z" />
              </svg>{" "}
              {courseData.courseTrainer}
            </p>
          </div>
        </div>
        <Link to="/enquiry" className="btn btn-primary">
          Enquire Now
        </Link>
      </div>
    </div>
  );
};

export default CourseCard;

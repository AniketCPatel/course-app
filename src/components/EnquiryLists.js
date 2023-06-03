import React, { useEffect, useState } from "react";

const fetchEnquiry = "http://localhost:4001/enquiries";

const EnquiryLists = () => {
  const [enquiryList, setEnquiryList] = useState([]);

  useEffect(() => {
    fetch(fetchEnquiry, { method: "GET" })
      .then((res) => res.json())
      .then((data) => setEnquiryList(data))
      .catch((err) => console.log("err", err));
  }, []);

  return (
    <div style={{ marginTop: "20px" }}>
      <h3 style={{ textAlign: "center", color: "darkmagenta" }}>
        Complete Enquiry List
      </h3>
      <table className="table table-hover table-light">
        <thead className="table-dark">
          <tr>
            <th scope="col">First Name</th>
            <th scope="col">Last Name</th>
            <th scope="col">Email</th>
            <th scope="col">Subject</th>
            <th scope="col">Message</th>
          </tr>
        </thead>
        <tbody>
          {enquiryList
            .map((item) => (
              <tr key={item.id}>
                <td>{item.fname}</td>
                <td>{item.lname}</td>
                <td>{item.email}</td>
                <td>{item.subject}</td>
                <td>{item.message}</td>
              </tr>
            ))
            .reverse()}
        </tbody>
      </table>
    </div>
  );
};

export default EnquiryLists;

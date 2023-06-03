import React, { useState } from "react";

const addUrl = "http://localhost:4001/enquiries";

const EnquiryForm = () => {
  const [newEnquiry, setNewEnquiry] = useState({
    id: 0,
    fname: "",
    lname: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch(addUrl, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newEnquiry),
    })
      .then((res) => console.log("call==>", "api called"))
      .then((data) => alert("Enquiry Submitted Succesfully!!!"))
      .catch((err) => console.log("err", err));
  };

  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-lg-9">
          <h1 className="mb-3" style={{ textDecoration: "underline" }}>
            Contact Us
          </h1>
          <p>
            Feel free to contact us if you need any assistance, any help or
            another question.
          </p>
          <form onSubmit={handleSubmit}>
            <div className="row g-3">
              <div className="col-md-6">
                <label htmlFor="name" className="form-label">
                  First Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="name"
                  required
                  onChange={(e) =>
                    setNewEnquiry({
                      ...newEnquiry,
                      fname: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="surname" className="form-label">
                  Last Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="surname"
                  name="surname"
                  required
                  onChange={(e) =>
                    setNewEnquiry({
                      ...newEnquiry,
                      lname: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  name="email"
                  required
                  onChange={(e) =>
                    setNewEnquiry({
                      ...newEnquiry,
                      email: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-md-6">
                <label htmlFor="subject" className="form-label">
                  Subject
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="subject"
                  name="subject"
                  onChange={(e) =>
                    setNewEnquiry({
                      ...newEnquiry,
                      subject: e.target.value,
                    })
                  }
                />
              </div>
              <div className="col-12">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  name="message"
                  rows="3"
                  required
                  onChange={(e) =>
                    setNewEnquiry({
                      ...newEnquiry,
                      message: e.target.value,
                    })
                  }
                ></textarea>
              </div>
              <div className="col-12">
                <div className="row">
                  <div className="col-md-3"></div>
                  <div className="col-md-6">
                    <button
                      data-res="<?php echo $sum; ?>"
                      type="submit"
                      className="btn btn-dark w-100 fw-bold"
                    >
                      Send
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default EnquiryForm;

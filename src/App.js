import React from "react";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import reducer from "./redux/reducer";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Header from "./components/Header";
import CourseLists from "./components/CourseLists";
import EnquiryForm from "./components/EnquiryForm";
import EnquiryLists from "./components/EnquiryLists";

const store = createStore(reducer, applyMiddleware(thunk));

function App() {
  return (
    <Provider store={store}>
      <div className="container App" style={{ minWidth: "100%" }}>
        <Header />
        <Routes>
          <Route path="/" element={<CourseLists />} />
          <Route path="/enquiry" element={<EnquiryForm />} />
          <Route path="/enquiryDetails" element={<EnquiryLists />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

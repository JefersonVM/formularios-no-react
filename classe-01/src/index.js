import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
// import SingleInputs from "./pages/SingleInputs/index";
// import MultipleInputs from "./pages/MultipleInputs/index";
import Select from "./pages/Select/index";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    {/* <SingleInputs /> */}
    {/* <MultipleInputs /> */}
    <Select />
  </React.StrictMode>
);

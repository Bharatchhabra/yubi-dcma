import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
// import 'bootstrap/dist/css/bootstrap.min.css';
import reportWebVitals from "./reportWebVitals";
import { LabelProvider } from "./components/Stepper/LabelDataContext"

ReactDOM.render(
  <React.StrictMode>
    <LabelProvider>
      <App />
    </LabelProvider>
  </React.StrictMode>,
  document.getElementById("root")
);



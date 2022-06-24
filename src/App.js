import React from "react";
import View from "./view/View";
import "./Assets/Styles/View.css";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Redirect,
} from "react-router-dom";
import ReactDOM from "react-dom";
import FormView from "./view/FormView";

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route exact path="/" element={<View />} />
          {/* <Route path="/dashboard" element={<View/>} />  */}
          <Route path="/create-requirements" element={<FormView />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;

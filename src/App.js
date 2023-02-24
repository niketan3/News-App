import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import News from "./Component/News";
import Navbar from "./Component/navbar";
import { Routes } from 'react-router-dom';
export default class App extends Component {
  render() {
    return (
      <Router>
        <Navbar title="News App" />
        <Routes>
          <Route path="/sports" element={<News category="sports" />}></Route>
          <Route path="/" element={<News category="general" />}></Route>
          <Route path="/general" element={<News category="general" />}></Route>
          <Route path="/business" element={<News category="business" />}></Route>
          <Route path="/entertainment" element={<News category="entertainment" />}></Route>
          <Route path="/health" element={<News category="health" />}></Route>
          <Route path="/science" element={<News category="science" />}></Route>
          <Route path="/technology" element={<News category="technology" />}></Route>
        </Routes>
      </Router>
    );
  }
}

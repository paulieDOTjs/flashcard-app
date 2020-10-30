import React from "react";
import "./bootstrap-grid.min.css";
import "./App.scss";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import { pages } from "./pages/routing";

import Header from "./components/header/Header";

function App() {
  return (
    <div className="App container">
      <Router>
        <Header />

        {/* Router to pages */}
        {pages.map((page) => (
          <Route key={page.title} path={page.url} exact component={page.page} />
        ))}
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </Router>
    </div>
  );
}

export default App;

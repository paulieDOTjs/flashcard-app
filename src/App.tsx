import React from "react";
import "./bootstrap-grid.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { pages } from "./pages/routing";

import Header from "./components/header/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        {pages.map((page) => (
          <Route key={page.title} path={page.url} exact component={page.page} />
        ))}
      </Router>
    </div>
  );
}

export default App;

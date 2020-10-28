import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";

import Nav from "./components/nav/Nav";
import { pages } from "./pages/routing";

function App() {
  return (
    <div className="App">
      <Router>
        <Nav />
        {pages.map((page) => (
          <Route path={page.url} exact component={page.page} />
        ))}
      </Router>
    </div>
  );
}

export default App;

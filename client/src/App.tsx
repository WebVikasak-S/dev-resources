import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Grid from "./Grid/Grid";
import Create from "./Pages/Create/Create";
import Edit from "./Pages/Edit/Edit";

const App: React.FC = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Link to={"/"}>
          <h1>Dev Resources</h1>
        </Link>
        {/* <Link to={'/create'}> */}
        <p
          onClick={() => {
            alert("Edit & Create has been disabled since the Database is under work.");
          }}
        >
          Create
        </p>
        {/* </Link> */}
      </header>
      <div className="main_window">
        <Switch>
          <Route path={"/"} exact component={Grid} />
          <Route path={"/edit/:id"} exact component={Edit} />
          <Route path={"/create"} exact component={Create} />
        </Switch>
      </div>
    </div>
  );
};

export default App;

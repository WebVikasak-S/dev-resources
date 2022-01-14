import React from "react";
import { Link, Switch, Route } from "react-router-dom";
import "./App.css";
import Grid from "./Grid/Grid";
import Create from "./Pages/Create/Create";
import Edit from "./Pages/Edit/Edit";

const App: React.FC = () => {
  return (
    <div className="">
      <header className="bg-slate-800 flex items-center justify-around text-white py-2">
        <Link to={"/"}>
          <h1 className="no-underline text-4xl">Dev Resources</h1>
        </Link>
        {/* <Link to={'/create'}> */}
        <p className="float-right font-xs"
          onClick={() => {
            alert(
              "Edit & Create has been disabled since the Database is under work."
            );
          }}
        >
          Create
        </p>
        {/* </Link> */}
      </header>
      <div className="px-8 py-4 mx-6">
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

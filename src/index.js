import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainLayout } from "./containers/MainLayout/MainLayout";
import { Root } from "./components/Root/Root";
import { Home }  from "./containers/Home/Home";
import { User } from "./components/User/User";
import { NotFound } from "./components/NotFound/NotFound"
import "./index.css";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Root} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/user"} component={User} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}
const rootElement = document.getElementById("root")
render(<App />, rootElement);
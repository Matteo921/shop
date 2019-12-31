import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainLayout } from "./containers/MainLayout";
import { Root } from "./components/Root"
import { Home }  from "./containers/Home";
import { User } from "./components/User";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Root} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/user"} component={user} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}
const rootElement = document.getElementById("root")
render(<App />, rootElement);
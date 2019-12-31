import React from "react";
import { render } from "react-dom";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import { MainLayout } from "./containers/MainLayout";
import { Root } from "./components/Root"

import { Home }  from "./containers/Home";

import "./App.css";
// import Product from "./components/Product/Product"
// import { NotFound } from "./components/NotFound/NotFound";
// import { Contact } from './components/Contact/Contact';
// import { Cart } from "./components/Cart/Cart";

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Root} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/cart"} component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}
const rootElement = document.getElementById("root")
render(<App />, rootElement);
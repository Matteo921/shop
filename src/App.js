import React from "react";

import { BrowserRouter, Switch, Route } from "react-router-dom";

import { MainLayout } from "./containers/MainLayout/MainLayout";

import { Home }  from "./containers/Home/Home";

import { NotFound } from "./components/NotFound/NotFound";
// import { Contact } from './components/Contact/Contact';
import { Cart } from "./components/Cart/Cart";
// import Product from "./components/Product/Product";
import "./App.css";


class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <MainLayout>
          <Switch>
            <Route exact path={"/"} component={Home} />
            <Route exact path={"/home"} component={Home} />
            <Route exact path={"/user"} component={Cart} />
            <Route component={NotFound} />
          </Switch>
        </MainLayout>
      </BrowserRouter>
    );
  }
}
export default App;
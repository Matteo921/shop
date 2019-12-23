import React from "react";

import { Header } from "../../containers/Header/Header";

export class MainLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
      </div>
    );
  }
}
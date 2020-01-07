import React from "react";
import Footer from '../Footer/Footer';
import { Header } from "../../containers/Header/Header";

export class MainLayout extends React.Component {
  render() {
    return (
      <div className="container">
        <Header />
        {this.props.children}
        <Footer />
      </div>
    );
  }
}
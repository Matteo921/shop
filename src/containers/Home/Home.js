import React from "react";
import "./Home.css"
import SideBar from '../../components/SideBar/SideBar'

export class Home extends React.Component {
  render() {
    return (
      <div className="home-container">
        <SideBar />
      </div>
    )
  }
}
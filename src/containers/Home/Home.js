import React from "react";
import SideBar from '../../components/SideBar/SideBar';
import { Home }   from '../../components/ProductsList/ProductsList';
import Pagination from '../../components/Pagination/Pagination';
import clothes from '../../data/data.json';
import "./Home.css"

export class App extends React.Component {
  render() {
    return (
      <div className="home-container">
        <SideBar />
        <Pagination>
        	<ProductsList />
        </Pagination>
      </div>
    )
  }
}

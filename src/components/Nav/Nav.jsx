import React from "react";
import SearchBar from "../SearchBar/SearchBar";
import { Link } from "react-router-dom";
import style from "./Nav.module.css"

class Nav extends React.Component {
    constructor(props){
        super(props);
    }

    render(){
        return (
            <div className= {style.nav}>
            <SearchBar onSearch={this.props.onSearch} />
            <Link to = "/" >LOGOUT</Link>
            <Link to="/about">
              <h3>About</h3>
            </Link>
            <Link to="/home">
              <h3>Home</h3>
            </Link>
            <Link to="/favorites">
              <h3>Favorites</h3>
            </Link>
          </div>
        );
      }
    }
    export default Nav;
import React,{Component} from "react";
import {NavLink} from "react-router-dom";

class Home extends Component{
	render(){
		return(
			<React.Fragment>
        <h1>Welcome to Detective Story</h1>
        <h4>Want to play the game?</h4>
        <NavLink to="/game">Yes</NavLink>
      </React.Fragment>
		)
	}
}

export default Home;
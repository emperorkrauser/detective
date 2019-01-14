import React,{Component} from "react";
import {NavLink} from "react-router-dom";

class Home extends Component{
	render(){
		return(
			<React.Fragment>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <h1>Welcome to Detective Story</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Praesentium repudiandae dolor dignissimos fugiat eius, alias porro adipisci, 
                enim sequi voluptates eveniet debitis voluptatibus aperiam quod vel dolorem a minima neque.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Praesentium repudiandae dolor dignissimos fugiat eius, alias porro adipisci, 
                enim sequi voluptates eveniet debitis voluptatibus aperiam quod vel dolorem a minima neque.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Praesentium repudiandae dolor dignissimos fugiat eius, alias porro adipisci, 
                enim sequi voluptates eveniet debitis voluptatibus aperiam quod vel dolorem a minima neque.
              </p>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Praesentium repudiandae dolor dignissimos fugiat eius, alias porro adipisci, 
                enim sequi voluptates eveniet debitis voluptatibus aperiam quod vel dolorem a minima neque.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Praesentium repudiandae dolor dignissimos fugiat eius, alias porro adipisci, 
                enim sequi voluptates eveniet debitis voluptatibus aperiam quod vel dolorem a minima neque.

                Lorem ipsum dolor sit amet, consectetur adipisicing elit. 
                Praesentium repudiandae dolor dignissimos fugiat eius, alias porro adipisci, 
                enim sequi voluptates eveniet debitis voluptatibus aperiam quod vel dolorem a minima neque.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7">
              <img src="img/img2.jpg" alt="" className="img-responsive"/>
            </div>
            <div className="col-lg-5">
              <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Beatae, accusantium doloremque architecto tempore porro ad nam provident totam et cum ipsum mollitia rem, explicabo quas delectus. Eum debitis dolores illum.</p>
              <h4>Want to play the game?</h4>
              <NavLink to="/game">Yes</NavLink>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-12">
              
            </div>
          </div>
        </div>
      </React.Fragment>
		)
	}
}

export default Home;
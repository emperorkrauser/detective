import React, {Component} from "react";

class Login extends Component{
	render(){
		return(
			<React.Fragment>
			  <div className="container">
			  	<div className="col-lg-12">
			  		<h1>Login:</h1>
  				  <form action="">
              <div class="form-group">
                <label>Email address</label>
                <input type="email" className="form-control" id="" placeholder="Enter email"/>
              </div>
              <div class="form-group">
                <label>Password</label>
                <input type="password" className="form-control" id="" placeholder="Enter password"/>
              </div>
  				  </form>
            <button className="btn btn-primary">Login</button>
			  	</div>
			  </div>
			</React.Fragment>
		)
	}

}

export default Login;
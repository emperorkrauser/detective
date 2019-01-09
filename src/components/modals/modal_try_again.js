import React, {Component} from "react";

class TryAgain extends Component{
  constructor(props){
    super(props);

    this.state={
      press:""
    }
  }

  handleClickYes(e){
    e.preventDefault();

    this.setState({
      press: true
    });

    this.props.response(this.state.press);
  }

  handleClickNo(e){
    console.log("clicked no");
    e.preventDefault();

    this.setState({
      press: false
    });

    this.props.response(this.state.press);
  }

	render(){
    let response = this.props.response;
    const {press} = this.state;
    
		return(
			<React.Fragment>
          <div className="modal fade" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
              <div className="modal-content">
                <div className="modal-header">
                  <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                  <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                    <span aria-hidden="true">&times;</span>
                  </button>
                </div>
                <div className="modal-body">
                  Do you want to play again?
                </div>
                <div className="modal-footer">
                  <button onClick={this.handleClickYes.bind(this)} type="button" className="btn btn-secondary">Yes</button>
                  <button onClick={this.handleClickNo.bind(this)} type="button" className="btn btn-primary">No</button>
                </div>
              </div>
            </div>
          </div>
			</React.Fragment>
		)
	}
}

export default TryAgain;
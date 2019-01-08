import React, {Component} from "react";
import Pictures from "../constants/pictures";
import $ from "jquery";
import TryAgain from "./modals/modal_try_again";

class PictureContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      pictures: "",
      image: "",
      alert: false,
      time: 5,
      timeout: false,
      response: false,
      isStart: false
    }
  }

  componentDidMount(){
    
    this.setState({
      pictures: Pictures[0].items,
      image: Pictures[0].image
    });

  }

  handleStart(){
    this.setState({
      isStart: true,
      // response: true,
    });

    this.handleSetTime();
  }

  handleResponse(response){
    console.log(response);
  }

  handleSetTime(){
    let x=5;
    const _this = this;

    if(this.state.isStart){
      let time = setInterval( () => {
        this.setState({
          time: x--
        });

        console.log(this.state.time);
        if(this.state.time === -1){
          clearInterval(time);
          this.setState({
            time: 5,
            timeout: true
          })
        }

        if(this.state.timeout){
          _this.handleAlert();
        }
      }, 1000);
    }
  }

  handleAlert(){
    console.log("show");
    if(this.state.response){
      $('#exampleModal').modal('hide');
    }
    else{
      $('#exampleModal').modal('show');
    }
  }

  handleClickObject(e){
    e.preventDefault();
    let objectName = e.target.getAttribute("alt");
  
    let objectList = document.querySelectorAll(".object-items");
    let objectDisabled = document.querySelectorAll(".disabled");

    for(let x=0; x < objectList.length; x++){
      if(objectName === objectList[x].getAttribute("name")){
        objectList[x].classList.add("disable");
      }
    }

    if(objectList.length === objectDisabled.length){
      this.handleScore();      
    }

  }

  handleScore(){
    this.setState({
      alert: true
    });
  }

	render(){
    const {pictures, image, time} = this.state;
    
    const items = pictures.length && pictures.map( (obj) => {
      return(
        <li ref={obj.item.name} name={obj.item.name} key={obj.item.name} className="object-items">{obj.item.name}</li>
      )
    });

    const objects = pictures.length && pictures.map( (obj) => {
      let x = obj.item.location.x;
      let y = obj.item.location.y;
      let x2 = obj.item.location.x2;
      let y2 = obj.item.location.y2;
      return(
        <area onClick={this.handleClickObject.bind(this)} key={obj.item.name} shape="rect" coords={[x,y,x2,y2]} href="" alt={obj.item.name}/>
      )
    });

		return(
			<React.Fragment>
        <div className="img-grid">
          <div className="image-container">
            <img src={image} alt="" useMap="#objectmap"/>
            <map name="objectmap" id="objectmap">
              {objects}
            </map>
          </div>
          <div className="image-objects">
            <h1>Detective Story</h1>
            <h4>Find the clues of the crime:</h4>
            <ul className="object-list">
              {items}
            </ul>
          </div>
        </div>
				<div className="timer-container">
          <h4>Time Remaining: {time}</h4>
          <div className="start-button"><button onClick={this.handleStart.bind(this)} className="btn btn-primary">Start Game</button></div>
        </div>
        <TryAgain response={this.handleResponse.bind(this)} />
			</React.Fragment>
		)
	}
}

export default PictureContainer;
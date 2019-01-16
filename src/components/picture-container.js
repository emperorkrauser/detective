import React, {Component} from "react";
import {Redirect} from "react-router-dom";
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
      isStart: "",
      response:"",
      score:"",
      redirect: false
    }
  }

  componentDidMount(){
    this.setState({
      pictures: Pictures[0].items,
      image: Pictures[0].image,
      timeout: false,
    });

    this.handleClearDisable();
  }

  handleStart(e){

    const {isStart} = this.state;
    const button = document.querySelector("#start-button");

    this.setState({
      isStart: true,
      timeout: false
    });

    button.disabled=true;
    this.handleSetTime();
  }

  handleResponse(isPlayAgain){
    console.log("handleResponse: " + isPlayAgain);
    this.handleAlert(isPlayAgain);
  }

  handleClearDisable(){
    let objectList = document.querySelectorAll(".object-items");
    const button = document.querySelector("#start-button");

    for(let x=0; x < objectList.length; x++){
      objectList[x].classList.remove("disabled");
      objectList[x].classList.add("enable");
    }

    button.disabled=false;
  }

  handleSetTime(){
    let x=5;
    const _this = this;

    let time = setInterval( () => {
      this.setState({
        time: x--
      });

      console.log(this.state.time);
      if(this.state.time === 0){
        clearInterval(time);
        this.setState({
          time: 5,
          timeout: true,
          isStart: false
        })
      }

      if(this.state.timeout){
        _this.handleAlert();
        this.setState({
          timeout: false
        })
      }
    }, 1000);
    
  }

  handleAlert(isPlayAgain){
    console.log(`Timeout: ${this.state.timeout}`);
    console.log("isPlayAgain: " + isPlayAgain);

    if(isPlayAgain){
      $('#exampleModal').modal('hide');
      // clear the strikethroughs
      this.handleClearDisable();
      
      this.setState({
        timeout: false
      });

      this.setState({
        redirect: false
      });
    }
    else if(isPlayAgain === false){
      $('#exampleModal').modal('hide');
      this.setState({
        redirect: true
      });
    }
    else{

      this.setState({
        redirect: false
      });

      if(this.state.timeout){
        $('#exampleModal').modal('show');
        this.handleScore();
      }
      else{
        $('#exampleModal').modal('hide');
        this.setState({
          timeout: true
        })
      }
    }
  }

  handleClickObject(e){
    e.preventDefault();
    let objectName = e.target.getAttribute("alt");
  
    let objectList = document.querySelectorAll(".object-items");
    const {isStart} = this.state;

    if(isStart){
      for(let x=0; x < objectList.length; x++){
        if(objectName === objectList[x].getAttribute("name")){
          objectList[x].classList.remove("enable");
          objectList[x].classList.add("disable");
        }
      }
    }
  }

  handleScore(){
    let objectList = document.querySelectorAll(".disable");
    const {time, score } = this.state;

    this.setState({
      score: objectList.length
    });
  }

	render(){
    const {pictures, image, time, score, isStart, redirect} = this.state;
    const items = pictures.length && pictures.map( (obj) => {
      return(
        <li ref={obj.item.name} name={obj.item.name} key={obj.item.name} className="object-items">{obj.item.name}</li>
      )
    });

    const displayItems = (() => {
      return(
        <React.Fragment>
          {items}
        </React.Fragment>
      ) 
    })();

    const objects = pictures.length && pictures.map( (obj) => {
      let x = obj.item.location.x;
      let y = obj.item.location.y;
      let x2 = obj.item.location.x2;
      let y2 = obj.item.location.y2;
      return(
        <area onClick={this.handleClickObject.bind(this)} key={obj.item.name} shape="rect" coords={[x,y,x2,y2]} href="" alt={obj.item.name}/>
      )
    });

    console.log(redirect);

    if(redirect){
      return(
        <Redirect to={'/'} />
      )
    }

		return(
			<React.Fragment>
        <div className="img-grid">
          <div className="image-container">
            <img ref="image" src={isStart ? image : "https://via.placeholder.com/640x360"} alt="" useMap="#objectmap"/>
            <map name="objectmap" id="objectmap">
              {objects}
            </map>
          </div>
          <div className="image-objects">
            <h1>Detective Story</h1>
            <h4>Find the clues of the crime:</h4>
            <ul className="object-list">
              {displayItems}
            </ul>
          </div>
        </div>
				<div className="timer-container">
          <h4>Time Remaining: {time}</h4>
          <div className="start-button"><button id="start-button" onClick={this.handleStart.bind(this)} className="btn btn-primary">Start Game</button></div>
        </div>
        <TryAgain response={this.handleResponse.bind(this)} score={score}/>
			</React.Fragment>
		)
	}
}

export default PictureContainer;
import React, {Component} from "react";
import Pictures from "../constants/pictures";

class PictureContainer extends Component{
  constructor(props){
    super(props);
    this.state={
      pictures: "",
      image: "",
      alert: false
    }
  }

  componentDidMount(){
    this.setState({
      pictures: Pictures[0].items,
      image: Pictures[0].image
    })
  }

  handleClickObject(e){
    e.preventDefault();
    let objectName = e.target.getAttribute("alt");
  
    let objectList = document.querySelectorAll(".object-items");

    for(let x=0; x < objectList.length; x++){
      if(objectName === objectList[x].getAttribute("name")){
        objectList[x].classList.add("disable");
      }
    }

  }

  handleScore(){
    this.setState({
      alert: true
    });
  }

	render(){
    const {pictures, image} = this.state;
    
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
				
			</React.Fragment>
		)
	}
}

export default PictureContainer;
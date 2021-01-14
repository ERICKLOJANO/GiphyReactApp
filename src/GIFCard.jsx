import React, {Component} from 'react'

class GIFCard extends Component{

  render(){
    return(
      <div className = "image">
        <img
          src = {this.props.imageSrc}
          alt = "gif"
        >
        </img>
      </div>
    )
  }
}

export default GIFCard;

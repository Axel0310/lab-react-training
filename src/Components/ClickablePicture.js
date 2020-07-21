import React, { Component } from 'react';
import '../clickable_picture.css';

class ClickablePicture extends Component {
    
    constructor (props){
        super(props);
        this.state = {
            isClicked: false,
        }
    }
    
    handleClick = () => {
        this.setState({isClicked: this.state.isClicked ? false : true});
    }

    render() {
        return(
            <img src={!this.state.isClicked ? this.props.img : this.props.imgClicked} alt="Clickable" onClick = {this.handleClick} className="clickable-picture"/>
        )
    }
}

export default ClickablePicture;
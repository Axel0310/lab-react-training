import React, { Component } from 'react';
import "../carousel.css";

class Carousel extends Component {
    state = {
        index: 0,

    }

    imgs = [...this.props.imgs];

    nextImg = () => {
        this.setState({index: (this.state.index + 1) % this.imgs.length})
    }

    prevImg = () => {
        this.setState({index: (this.state.index + this.imgs.length -1) % this.imgs.length})
    }

    render() {
        return (
            <div id="carousel-wrapper" style={{backgroundImage: `url(${this.imgs[this.state.index]})`}}>
                <button onClick={this.nextImg} className="btn-carousel btn-next">Next</button>
                <button onClick={this.prevImg} className="btn-carousel btn-prev">Previous</button>
            </div>
        )
    }
}

export default Carousel;
import React, { Component } from 'react';
import "../dice.css";

function getRandomNb(){
    return Math.floor(Math.random() * (7 - 1)) + 1;
}

class Dice extends Component {
    state= {
        randomNb: 1,
    }

    setRandomNb = () => {
        this.setState({randomNb: getRandomNb()})
    }

    resetImg = () => {
        this.setState({randomNb: 0});
        setTimeout(this.setRandomNb,1000)
    }

    render(){
        return (
            <img onClick={this.resetImg} src={this.state.randomNb ? `/img/dice${this.state.randomNb}.png` : `/img/dice-empty.png`} alt="Dice" className="dice"/>
        )
    }
}

export default Dice;
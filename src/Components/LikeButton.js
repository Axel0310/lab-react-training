import React, { Component } from 'react';
import '../like_button.css';

const bgColorArr = ['purple','blue','green','yellow','orange','red']

class LikeButton extends Component {
  state = {
    likes: 0,
    bgColorIndex: 0,
  };

  incrementLikes = () => {
    this.setState({ likes: this.state.likes + 1, bgColorIndex: (this.state.bgColorIndex + 1) % 6 });
  };

  render() {
    return (
      <button className="btn-like" onClick={this.incrementLikes} style={{backgroundColor: bgColorArr[this.state.bgColorIndex]}}>
        {' '}
        {this.state.likes} Likes{' '}
      </button>
    );
  }
}

export default LikeButton;

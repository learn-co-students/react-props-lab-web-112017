// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component {
  render() {
    return (
      <div className="ship-card">
        <h1>{this.props.name}</h1>
        <small>Speed: {this.props.speed} Rockets: {this.props.hasRockets} </small>
        <small>Colors:  {this.props.colors.join(", ")}</small>
      </div>
    )
  }
}


Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
};


export default Spaceship;

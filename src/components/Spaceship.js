// Code The Spaceship Component Here
import React from 'react';

class Spaceship extends React.Component{
  render(){
    const {name, speed, hasRockets, colors} = this.props;

    return (
      <div>
        <h1>Spaceship Name: {name} </h1>
        <p>Speed: {speed} </p>
        <p>Rockets: {hasRockets? "Yes" : "No"}</p>
        <ul>Colors:
            {colors.map((color, index) => <li key={index}>{color}</li>)}
        </ul>
      </div>
    );
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}


export default Spaceship;
//
// name (string)
// speed (number, defaults to slow)
// hasRockets (boolean, defaults to false)
// colors (array of strings, defaults to ['black', 'red'])

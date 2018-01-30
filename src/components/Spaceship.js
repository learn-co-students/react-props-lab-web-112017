// Code The Spaceship Component Here
import React from 'react';


class Spaceship extends React.Component {
  render () {
    return (
      <div>
        <p>Name: {this.props.name}</p>
        <p>Ship stats: </p>
          <ul>
          <li>Speed: {this.props.speed}</li>
          <li>Rockets: {this.props.hasRockets ? "yes" : "no" } </li>
          <li>Colors: </li>
            <ul>
            {this.props.colors.map((color) => <li> {color}</li>)}
            </ul>
          </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship

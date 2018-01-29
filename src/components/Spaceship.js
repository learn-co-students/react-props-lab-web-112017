// Code The Spaceship Component Here
import React from 'react'
import RectDOM from 'react-dom'
export default class Spaceship extends React.Component {
  render() {
    return (
      <div>
        <h1>Name: {this.props.name}</h1>
        <p>Speed: {this.props.speed}</p>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
 speed: 'slow',
 hasRockets: false,
 colors: ['black','red']
};

// name //string
// speed //integer //default slow
// hasRockets //boolean //default false
// colors //array strings //default ['black','red']

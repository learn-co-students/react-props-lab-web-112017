// Code The Spaceship Component Here
import React from 'react'

class Spaceship extends React.Component {

  render() {
    return (
      <div>
        <h1>{this.props.name}</h1>
        <ul>
          <li> Speed: {this.props.speed}</li>
          {this.props.hasRockets ? <li> This Ship has rockets! </li> : <li> This ship is slow </li>}
          <li>This ships colors are: {this.props.colors.join(', ')}</li>
        </ul>
      </div>
    )
  }

}

Spaceship.defaultProps = {
  speed: 'slow',
  hasRockets: false,
  colors: ['red','black']
}

export default Spaceship

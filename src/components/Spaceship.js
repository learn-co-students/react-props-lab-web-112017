// Code The Spaceship Component Here

import React from 'react';
import ReactDOM from 'react-dom';
//
// ReactDOM.render(
//   <Spaceship
//     name= "SioSpace",
//     speed= 1575,
//     hasRockets= true,
//     colors= ['coral', 'aqua', 'cream']
//   />,
//   document.getElementById('root')
// )



class Spaceship extends React.Component {
  render() {
    return (
      <div className = "siobhan">
        <h1>{this.props.name}</h1>
        <ul>
          <li><h3>Includes Rockets: {this.props.hasRockets}</h3></li>
          <li><h3>Max Speed: {this.props.speed}</h3></li>
          <li><h3>Colors: {(this.props.colors).join(", ")}</h3></li>
        </ul>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  speed: "slow",
  hasRockets: false,
  colors: `['black', 'red']`

}

export default Spaceship

import React from 'react';
import ReactDOM from 'react-dom';

import Spaceship from './components/Spaceship';

const siobhanSScolors = ['coral', 'aqua', 'cream']


ReactDOM.render(
  <Spaceship
    name= "SioSpace"
    speed= "1575"
    hasRockets= "true"
    colors = {siobhanSScolors}
  />,
  document.getElementById('global')
)
// 
// ReactDOM.render(
//   <Spaceship name="Millennium Falcon" />,
//   document.getElementById('global')
// );

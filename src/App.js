import React, { Component } from 'react';

import './styles/foundation.min.css';
import './styles/custom.css';
import Routes from './routes';


class App extends Component {

  constructor(){
    super();
    
  }

  render() {
    return (
      <div className="off-canvas-wrapper">
      <div className="off-canvas-wrapper-inner" data-off-canvas-wrapper>

     

        <div className="off-canvas-content" data-off-canvas-content>
          <Routes/>
        </div>
      </div>
    </div>
    );
  }
}

export default App;

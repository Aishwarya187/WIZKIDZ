import React, { Component } from 'react'

import { exportComponentAsPNG} from "react-component-export-image";

 class App extends Component {
  certificateWrapper = React.createRef();
    state = {
        Name: 'Jacob Elordi',
        IQ: '121',
      };


  render() {
    return (
      <div className="App">
          <div className="Meta">
           <button onClick={e=>{ 
            e.preventDefault();
            exportComponentAsPNG(this.certificateWrapper);
            }}>Download</button>
        <div id="certificateWrapper" ref={this.certificateWrapper}>
          <p>{this.state.Name}</p>
          <p id="level">{this.state.IQ}</p>
          
           <img src="merit222.png" alt="Certificate"  />
           
            </div>
            
        </div>
   </div>

    );
    
  }
}

export default App

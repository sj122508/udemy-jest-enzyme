// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <h1>Hello World</h1>
     
//     </div>
//   );
// }

// export default App;

import React, { Component } from 'react'
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter:0
    }
  }
  
  handleClickCounter = () => {
    const counter = this.state.counter + 1

     this.setState({ counter})
  }
  

  render() {
    const {counter} = this.state

    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The count is {counter}</h1>
        <button data-test="increment-button" onClick={this.handleClickCounter}>Increment counter</button>
      </div>
    )
  }
}


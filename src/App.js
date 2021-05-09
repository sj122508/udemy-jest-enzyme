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
  
  handleClickIncrementCounter = () => {
    let {counter} = this.state
    counter++
    this.setState({counter})
  }

  handleClickDecrementCounter = () => {
    let { counter } = this.state
     if (counter > 0)
      counter--

     this.setState({ counter })
  }
  

  render() {
    const {counter} = this.state

    return (
      <div data-test="component-app">
        <h1 data-test="counter-display">The count is {counter}</h1>
       {counter == 0 ? <h2 data-test="error-display">The counter cannot go below {counter}</h2> : ""} 
        <button data-test="increment-button" onClick={this.handleClickIncrementCounter}>Increment counter</button>
        <button data-test="decrement-button" onClick={this.handleClickDecrementCounter}>Decrement counter</button>
      </div>
    )
  }
}


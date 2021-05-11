

import React, { Component } from 'react'
import './App.css';
import Congrats from './Jotto/Congrats'
import GuessedWords from './Jotto/GuessedWords'

export default class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       counter:0
    }
  }
  
  componentDidMount() {
    // alert()
    // let obj1 = { foo: 'bar', y: 42 };
    // let obj2 = { foo: 'baz', y: 13 };

    // let clonedObj = { ...obj1 };
    // // Object { foo: "bar", x: 42 }

    // let mergedObj = { ...obj2,...obj1 };

    // console.log(clonedObj)
    // console.log(mergedObj)
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
      <div className="container">
        <div data-test="component-app">
          <h1 data-test="counter-display">The count is {counter}</h1>
        {counter === 0 ? <h2 data-test="error-display">The counter cannot go below {counter}</h2> : ""} 
          <button data-test="increment-button" onClick={this.handleClickIncrementCounter}>Increment counter</button>
          <button data-test="decrement-button" onClick={this.handleClickDecrementCounter}>Decrement counter</button>
        </div>

        <div>
          <h1>Jotto</h1>
          <Congrats success={true}/>
          <GuessedWords guessedWords={[
            { guessedWord: 'train', letterMatchCount: 3}
          ]} />
        </div>
      </div>
    )
  }
}


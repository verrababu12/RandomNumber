// Write your code here
import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {
    randomNumber: 0,
  }

  generateRandomNumber = () => {
    const num = Math.ceil(Math.random() * 100)
    this.setState({randomNumber: num})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="background-container">
        <div className="card">
          <h1 className="heading">Random Number</h1>

          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button
            type="button"
            className="button"
            onClick={this.generateRandomNumber}
          >
            Generate
          </button>
          <p className="random-number">{randomNumber}</p>
        </div>
      </div>
    )
  }
}
export default RandomNumberGenerator

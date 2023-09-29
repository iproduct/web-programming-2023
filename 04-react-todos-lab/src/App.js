import './App.css';
import { Component } from 'react';

class App extends Component {
  state = {
    counter: 0,
    status: ''
  }

  interval = undefined;

  componentDidMount() {
    this.interval = setInterval(() => {
      this.setState(state => ({ counter: state.counter + 1 }))
    }, 1000)
  }
  componentWillUnmount() {
    clearInterval(this.interval)
  }

  clearCounter = () => {
    this.setState({ counter: 0 })
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h2>Hello, {this.props.name}!</h2>
          <h2>Counter: {this.state.counter}</h2>
          <button onClick={this.clearCounter}>Clear Counter</button>
        </header>
      </div>
    );
  }
}

export default App;

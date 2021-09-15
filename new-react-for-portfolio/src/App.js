import React from 'react';
import axios from 'axios';
import './App.css';

class App extends React.Component {
  state = {
    advice: '',
  }

  componentDidMount() {
    this.fetchAdvice();
  }

  fetchAdvice = () => {
    axios.get('https://api.adviceslip.com/advice')
      .then((response) => {
        const { advice } = response.data.slip;

        this.setState({ advice });
      })
      .catch((error) => {
        console.log(error);
      });
  }

  render() {
    return (
      <>
      <div className="app">
      <h1>Don't know what to do? Try free advise.</h1>
        <div className="card">
          <h1 className="heading">{this.state.advice}</h1>
          <button className="button" onClick={this.fetchAdvice}>
            <span>More Advise</span>
          </button>
        </div>
      </div>
      </>
    );
  }
}

export default App;


// https://davidnkana-advice-app.netlify.app/
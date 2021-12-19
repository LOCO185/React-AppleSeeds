import React from "react";
import "./Jokes.css";
import axios from "axios";

class Jokes extends React.Component {
  state = {
    joke: "",
    categoryList: [],
    category: "",
    randomJokeFromList: "",
  };
  onSerachSubmit = async () => {
    const response = await axios.get("https://api.chucknorris.io/jokes/random");
    console.log(response.data.value);
    this.setState({
      ...this.state,
      joke: response.data.value,
    });
  };
  categoryListJokes = async () => {
    const response = await axios.get(
      "https://api.chucknorris.io/jokes/categories"
    );
    console.log(response.data.value);
    this.setState({ categoryList: response.data });
  };
  categoryListRandomJokes = async () => {
    const response = await axios.get(
      `https://api.chucknorris.io/jokes/random?category=${this.state.category}`
    );
    this.setState({ randomJokeFromList: response.data.value });
  };
  componentDidMount = () => {
    this.categoryListJokes();
  };

  render() {
    return (
      <div className="container">
            <header className="title">Chuck Norris Api</header>
          <div className="col-6">
            <div className="card">
              <div className="card-header">Search for a word</div>
              <div className="card-body">
                <input type="text" />
              </div>
            </div>
            <div>
              <button
                onClick={this.onSerachSubmit}
                className="btn btn-warning btn-lg"
              >
                Generate Joke
              </button>
            </div>
          </div>
        <div className="list">
          {this.state.categoryList.map((element, index) => {
            return (
              <button
                className="btn btn-warning btn-lg"
                key={index}
                onClick={() => {
                  this.setState({ category: element }, () => {
                    this.categoryListRandomJokes();
                  });
                }}
              >
                {element}
              </button>
            );
          })}
        </div>
        <h2 className="sub-title"> Joke By Category:</h2> <br></br>
        <h4>{this.state.randomJokeFromList}</h4>
        <h2 className="sub-title">random joke</h2>
        <h4>{this.state.joke}</h4>
      </div>
    );
  }
}

export default Jokes;

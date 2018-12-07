import React, { Component } from "react";
export default class App extends Component {
  state = {
    data: {
      people:[]
    }
  };

  componentDidMount() {
     fetch('/api')
       .then(res => res.json())
       .then(data => this.setState({ data }));
   }

  render() {
    return (
      <div className="App">

        {/* Iterate over the JSON api */}
        {this.state.data.people.map((person, i) => {

          return(
            <div key={i}>

              {/* Render the name */}
              <h1>{person.name}</h1>

              {/* Create a random age */}
              <p>{Math.floor(18 + (41 * Math.random()))}</p>
            </div>
          )
        })}
      </div>
    );
  }
}

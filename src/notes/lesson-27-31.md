`import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  //when app is built run constuctor method first
  constructor() {
    //super() calls underlying constuctor method of any other constructor method of any other classes your calling from.
    super();

    // enstatiate state
    this.state = {
      name: { firstName: "Joe", lastName: "Gray" },
      company: "sunEtrike",
    };
  }

  render() {
    return (
      <div className='App'>
        <header className='App-header'>
          <img src={logo} className='App-logo' alt='logo' />
          <p>
            Hi {this.state.name.firstName} {this.state.name.lastName}, I work at{" "}
            {this.state.company}
          </p>
          <button
            onClick={() => {
              //setState() updates state to a different object, it is asyncoronous
              this.setState(
                () => {
                  return {
                    name: { firstName: "Andrei", lastName: "Gray" },
                  };
                },
                //foolowup callback will only run after the previous function
                () => {
                  console.log(this.state);
                }
              );
            }}>
            Change Name
          </button>
        </header>
      </div>
    );
  }
}

export default App;
`
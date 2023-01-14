`import { Component } from "react";

import logo from "./logo.svg";
import "./App.css";

class App extends Component {
constructor() {
console.log("constructor");
super();

    this.state = {
      monsters: [],
      //when fitlering from a list you want to filter from a full list so keep an empty search feild in state
      searchField: "",
    };

}

componentDidMount() {
//1. fetch exnternal data, 2. then callback a response, 3. convert response into json, 4.every .then that returns a value is going to return a promise that has been resolved i.e .then(users), 5. get into state using setState()
console.log("componentDidMount");

    fetch("https://jsonplaceholder.typicode.com/users").then((response) =>
      response.json().then((users) =>
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        )
      )
    );

}

//OPTIMIZATION Annonymous function is created outside of rendeder so the function isn't reinisitalized after every render==
onSearchChange = (event) => {
//includes is not case sensitive
// don't store the event in state but only what matters which is the actual string. We want to modify it in a way thats useful for the rest of the application
const searchField = event.target.value.toLocaleLowerCase();

    // set state to filtered monsterss
    this.setState(() => {
      return { searchField };
    });

};

render() {
console.log("render");

    //OPTIMIZATION: Destucturing: intitializ a constant and pull it off of this.state
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;
    const filteredMonsters = monsters.filter((monster) => {
      //if the name includes(the search string)then return true with filter
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    return (
      <div className='App'>
        <input
          className='search-box'
          type='search'
          placeholder='search monsters'
          // filter down list of monsters
          onChange={onSearchChange}
        />
        {filteredMonsters.map((monster) => {
          return (
            //At the highest level of the div add the key
            <div key={monster.id}>
              <h1>{monster.name}</h1>;
            </div>
          );
        })}
      </div>
    );

}
}

export default App;
`

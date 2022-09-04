import { Component } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./scss/App.css";

// const x = new Component();

// console.log(x);
//Represents entire application:
class App extends Component {
  //1. Define local state:
  constructor() {
    super();
    //state is always JSON Object
    this.state = {
      //initialize the state:
      monsters: [],
      searchField: "",
    };
    console.log("1. constructor");
  }

  //3. Use to update user info (by levering life cycle method on the Component class):
  componentDidMount() {
    console.log("3. componentDidMount");
    //Mounting is the first time React renders a component onto the page (happens once throughout a component life):

    //NOTE The moment your component is placed on the DOM is when you want to make an API request (display the fastest).

    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res);
        return res.json();
      })
      .then((users) => {
        this.setState(
          () => {
            return { monsters: users };
          },
          () => {
            console.log(this.state);
          }
        );
      });
  }

  //Only built once on the inialization of the class:
  onSearchChange = (e) => {
    const searchField = e.target.value.toLowerCase();

    this.setState(() => {
      return { searchField };
    });
  };

  //2. What will be shown on screen:
  render() {
    console.log("2. render : App.js");
    //destructoring objects:
    const { monsters, searchField } = this.state;
    const { onSearchChange } = this;

    const monstersFiltered = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    //Manupulate DOM:
    // document.querySelector("html").style.background = "#F5EDDC";

    console.log(monstersFiltered);
    return (
      //classname is written in JsX (syntax extension of JavaScript):
      //Html syntax applies here (use {} to access JavaScript code):
      <div className="App">
        <SearchBox
          onChangehandler={onSearchChange}
          placeholder="Search Monsters"
          className="monsters-search-box"
        />
        {
          //   // JavaScript Code STARTS
          // monstersFiltered.map((monster) => {
          //   if (monster) {
          //     return (
          //       //key (native to react.js) -> Creates unique div for each h1 based on monster.id
          //       <div key={monster.id}>
          //         <h1>{`${monster.id}: ${monster.name}`}</h1>
          //       </div>
          //     );
          //     //(HTML codes are also componenets (react))
          //   }
          // })
          //   // JavaScript Code ENDS
        }

        <CardList monsters={monstersFiltered} anything={["a", "z"]} />
      </div>
    );
  }
}

export default App;

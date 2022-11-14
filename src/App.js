// To use Hook:
import { useState, useEffect } from "react";
import React from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./scss/App.css";

/* ================== Functional Component  ================== */
const App = () => {
  //Only hooks ONE value. Need multiple for different values:
  const [searchField, setSearchField] = useState(""); //[value, setValue]
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [monstersFiltered, setFilterMonsters] = useState(monsters);

  console.log("Render New");

  //Triggers the first time in the App mounts:
  useEffect(() => {
    //Only triggered once to avoid neverending loops ↯
    console.log("Data fetched");
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((data) => setMonsters(data));
  }, []);

  //Prevents the filteredMonsters from needlessly on each update
  useEffect(() => {
    const newMonstersFiltered = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilterMonsters(newMonstersFiltered);
  }, [monsters, searchField]);

  const onSearchChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (e) => {
    const searchFieldString = e.target.value.toLowerCase();
    setTitle(searchFieldString);
  };

  return (
    //classname is written in JsX (syntax extension of JavaScript):
    //Html syntax applies here (use {} to access JavaScript code):
    <div className="App">
      <h1 className="app-title">{title}</h1>
      <SearchBox
        onChangehandler={onSearchChange}
        placeholder="Search Monsters"
        className="monsters-search-box"
      />
      <br />
      <SearchBox
        onChangehandler={onTitleChange}
        placeholder="set title"
        className="title-search-box"
      />
      <CardList monsters={monstersFiltered} />
    </div>
  );
};

export default App;

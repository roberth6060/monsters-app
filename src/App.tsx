// To use Hook:
import { useState, useEffect, ChangeEvent } from "react";
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";
import "./scss/App.css";
import { getData } from "./utils/data";


/**
 * Defining types 
 */
export type Monster = {
  id: string, 
  name: string,
  email: string,
}

/* ================== Functional Component  ================== */
const App = () => {
  //Only hooks ONE value. Need multiple for different values:
  const [searchField, setSearchField] = useState(""); 
  const [title, setTitle] = useState("");
  const [monsters, setMonsters] = useState<Monster[]>([]);
  const [monstersFiltered, setFilterMonsters] = useState(monsters);


  //Triggers the first time in the App mounts:
  useEffect(() => {
    const fetchUsers =async () => {
      //Used typed to a Monster array
      const user = await getData<Monster[]>("https://jsonplaceholder.typicode.com/users");

      setMonsters(user);
    }
    fetchUsers();
  }, []);

  //Prevents the filteredMonsters from needlessly on each update
  useEffect(() => {
    const newMonstersFiltered = monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(searchField);
    });
    setFilterMonsters(newMonstersFiltered);
  }, [monsters, searchField]);

  const onSearchChange = (e: ChangeEvent<HTMLInputElement>): void  => {
    const searchFieldString = e.target.value.toLowerCase();
    setSearchField(searchFieldString);
  };

  const onTitleChange = (e: ChangeEvent<HTMLInputElement>): void => {
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

import { Component } from "react";
import "./scss/card-list-style.css";
import Card from "../card/card.component";

// You can have sibling component ONLY one top level component:
class CardList extends Component {
  render() {
    //constructor ()  is being ran underhood
    console.log("render: CardList");
    //className === class (class is a protected name);
    const { monsters } = this.props;

    return (
      <div className="top-level-component">
        {monsters.map((monster) => {
          return <Card key={monster.id} monster={monster} />;
        })}
      </div>
    );
  }
}

// Allows other files to import the above return code:
export default CardList;

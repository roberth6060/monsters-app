// import { useState, useEffect } from "react";
import "./scss/card-list-style.css";
import Card from "../card/card.component";

const CardList = (
  { monsters },
  _forwardRef //Implicit return
) => (
  <div className="top-level-component">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;

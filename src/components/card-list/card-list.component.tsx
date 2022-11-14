
import "./scss/card-list-style.css";
import Card from "../card/card.component";
import { Monster } from "../../App";


type  CardListProps ={
  monsters: Monster[];
}

const CardList = (
  { monsters } : CardListProps
) => (
  <div className="top-level-component">
    {monsters.map((monster) => {
      return <Card key={monster.id} monster={monster} />;
    })}
  </div>
);

export default CardList;

import "./scss/card.style.css";

const Card = ({ monster }) => (
  <div className="card-container" key={monster.id}>
    <img
      alt={`monster ${monster.name}`}
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    ></img>
    <h2>{monster.name}</h2>
    <p>{monster.email}</p>
  </div>
);

export default Card;

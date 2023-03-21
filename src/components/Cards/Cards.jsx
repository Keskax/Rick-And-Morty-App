import Card from "../Card/Card";
import { CardsContainer } from "./styledComponents";

function Cards({ characters, onClose}) {
  return (
    <CardsContainer>
      {characters.map(({ id, name, species, gender, image }) => {
        return (
          <Card
            key={id}
            id={id}
            name={name}
            species={species}
            gender={gender}
            image={image}
            onClose={onClose}
          />
        );
      })}
    </CardsContainer>
  )
}

export default Cards;
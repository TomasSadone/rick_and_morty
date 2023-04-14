import { Card } from '../Card/Card';

export default function Cards(props) {
  const { characters, onClose } = props;
  return (
    <div>
      {characters.map((character) => {
        const { name, status, species, gender, origin, image, id } = character;
        return (
          <Card
            key={id}
            onClose={onClose}
            name={name}
            status={status}
            species={species}
            gender={gender}
            origin={origin}
            image={image}
            id={id}
          />
        );
      })}
    </div>
  );
}

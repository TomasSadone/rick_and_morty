import { Link } from 'react-router-dom';
import { addFav, removeFav } from '../../redux/actions';
import { connect } from 'react-redux';
import { useState } from 'react';

export function Card(props) {
  const {
    name,
    status,
    species,
    gender,
    origin,
    image,
    onClose,
    id,
    addFav,
    removeFav,
  } = props;

  console.log(props);

  const [isFav, setIsFav] = useState(false);

  const handleFavorite = () => {
    if (isFav) {
      setIsFav(false);
      removeFav(id);
    } else {
      setIsFav(true);
      addFav(props);
    }
  };
  return (
    <div className=''>
      <button onClick={() => onClose(id)}>X</button>
      <Link to={`/detail/${id}`}>
        <h2>{name}</h2>
      </Link>
      <h2>{status}</h2>
      <h2>{species}</h2>
      <h2>{gender}</h2>
      <h2>{origin.name || origin}</h2>
      <img src={image} alt='' />
      <button onClick={handleFavorite}>{isFav ? '❤️' : '🤍'}</button>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
    myFavorites: state.myFavorites,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addFav: (character) => {
      dispatch(addFav(character));
    },
    removeFav: (id) => {
      dispatch(removeFav(id));
    },
  };
};
console.log(connect(mapStateToProps, mapDispatchToProps)(Card));
export default connect(mapStateToProps, mapDispatchToProps)(Card);

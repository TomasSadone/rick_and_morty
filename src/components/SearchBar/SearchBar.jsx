import { useState } from 'react';

export default function SearchBar(props) {
  const { onSearch } = props;
  const [id, setId] = useState('');
  const handleChange = (event) => {
    setId(event.target.value);
  };
  return (
    <div>
      <input onChange={handleChange} value={id} type='search' />
      <button onClick={() => onSearch(id)}>Agregar</button>
    </div>
  );
}

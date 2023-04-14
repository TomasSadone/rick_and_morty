import { useEffect, useState } from 'react';
import './index.css';
import Cards from './components/Cards/Cards.jsx';
import { Nav } from './components/Nav/Nav';
import axios from 'axios';
import { Routes, Route, useLocation, useNavigate } from 'react-router-dom';

// import characters from './data.js';
import { About } from './components/About/About';
import { Detail } from './components/Detail/Detail';
import { Form } from './components/Form/Form';
import { Provider } from 'react-redux';
import store from './redux/store';

const URL_BASE = 'https://be-a-rym.up.railway.app/api/character';
const API_KEY = 'd9eb17bab542.dd7db60a43fa90e378c6';

function App() {
  const [characters, setCharacters] = useState([]);
  const [access, setAccess] = useState(false);

  const EMAIL = 'tomisadone27@gmail.com';
  const PASSWORD = '123456';

  const navigate = useNavigate();

  const login = (userData) => {
    if (userData.password === PASSWORD && userData.email === EMAIL) {
      setAccess(true);
      navigate('/home');
    } else {
      window.alert('Usuario o password incorrectos');
    }
  };
  useEffect(() => {
    !access && navigate('/');
  }, [access, navigate]);

  const onClose = (id) => {
    const filteredCharacters = characters.filter(
      (character) => character.id !== id
    );
    setCharacters(filteredCharacters);
  };

  const onSearch = (id) => {
    axios(`${URL_BASE}/${id}?key=${API_KEY}`).then(({ data }) => {
      if (data.name) {
        setCharacters((oldChars) => [...oldChars, data]);
      } else {
        window.alert('¡No hay personajes con este ID!');
      }
    });
  };

  const { pathname } = useLocation();

  return (
    <Provider store={store}>
      {pathname !== '/' && <Nav onSearch={onSearch} />}
      <div className='App wrapper flow'>
        <Routes>
          <Route path='/' element={<Form login={login} />} />
          <Route
            path='/home'
            element={<Cards characters={characters} onClose={onClose} />}
          />
          <Route path='/detail/:id' element={<Detail />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;

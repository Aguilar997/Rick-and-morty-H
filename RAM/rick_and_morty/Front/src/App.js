import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form";
import Favorites from "./components/Favorites/Favorites.jsx";
import { username, password } from "./utils/consts.js";

function App() {
  // ! HOOKS
  const [characters, setCharacters] = useState([]);
  const { pathname } = useLocation();
  const [access, setAccess] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    !access && navigate("/");
  }, [access]);

  // ! EVENT HANDLERS
  const onSearch = (id) => {
    const URL_BASE = "http://localhost:3001/rickandmorty";
    // const KEY = "2d0fd52418f5.d3d6077a3b4c1857914f";

    if (characters.find((char) => char.id === id)) {
      return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}`)
      .then((response) => response.json())
      .then((data) => {
        if (data.name) {
          setCharacters((oldChars) => [...oldChars, data]);
        } else {
          alert("Algo salió mal");
        }
      });
  };

  const onClose = (id) => {
    // porque filter.... no modifica el array original
    setCharacters(characters.filter((char) => char.id !== id));
  };

  const login = (userData) => {
    if (userData.username === username && userData.password === password) {
      setAccess(true);
      navigate("/home");
    } else {
      alert("Credenciales incorrectas");
    }
  };

  // ! RENDER
  return (
    <div>
      {pathname !== "/" && <Nav onSearch={onSearch} />}
      <Routes>
        <Route path="/" element={<Form login={login} />} />
        <Route
          path="/home"
          element={<Cards characters={characters} onClose={onClose} />}
        />
        <Route path="/about" element={<About />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/detail/:detailId" element={<Detail />} />
      </Routes>
    </div>
  );
}

export default App;

// import Cards from './components/Cards/Cards.jsx'
// import Nav from './components/Nav/Nav.jsx'
// import { useEffect, useState } from 'react'
// import { Route, Routes, useLocation, useNavigate } from 'react-router-dom';
// import About from './components/About/About.jsx';
// import Detail from './components/Detail/Detail.jsx';
// import Form from './components/Form/Form.jsx'

// function App() {
//   //HOOKS
//   const [characters, setCharacters] = useState([]);
//   const { pathname } = useLocation();
//   const [access, setAccess] = useState(false);
//   const navigate = useNavigate();

//   useEffect(() => {
//     !access && navigate('/');
//   }, [access]);

//   //CREDENCIALES FAKE
//   const username = 'milton@mail.com';
//   const password = 'pass123'

//   //EVENT HANDLERS
//   const onSearch = (id) => {
//     const URL_BASE = "https://be-a-rym.up.railway.app/api";
//     const KEY = "ab05c601ff3a.3227a5f58ca0da9bd460";

//     if (characters.find((char) => char.id === id)) {
//       return alert("Personaje repeti3");
//     }

//     fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
//       .then((response) => response.json())
//       .then((data) => {
//         if (data.name) {
//           setCharacters((oldChars) => [...oldChars, data]);
//         } else {
//           alert("algo malio sal")

//         }
//       })
//   };

//   const onClose = (id) => {
//     setCharacters(characters.filter((char) => char.id !== id));
//   }

//   const login = (userData) => { //userdata es un parametro, cuando se llame a la funcion login el argumento para el parametro sera userData
//     if (userData.username === username && userData.password === password) {//si es verdadero entonces↓
//       setAccess(true);
//       navigate('/home');
//     } else {
//       alert('credencial incorrecta')
//     }
//   }

//   //RENDER
//   return (
//     <div>
//       {pathname !== '/' && <Nav onSearch={onSearch} />}
//       <Routes>
//         <Route path='/' element={<Form login={login} />} />
//         <Route path='/home'
//           element={<Cards characters={characters} onClose={onClose} />}
//         />
//         <Route path='/about' element={<About />} />
//         <Route path="/detail/:detailId" element={<Detail />} />{/*EL detailId LO GUARDA EN USEPARAMS QUE ESTA EN EL COMP DETAIL/*/}
//       </Routes>
//     </div>
//   );
// };

// export default App;

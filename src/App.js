import Cards from "./components/Cards/Cards.jsx";
import Nav from "./components/Nav/Nav.jsx";
import Favorites from "./components/Favorites/Favorites.jsx";
import style from "./components/Nav/Nav.module.css"
import {useState}  from "react";
import { Route } from "react-router-dom";
import {Routes} from "react-router-dom";
import About from "./components/About/About.jsx";
import Detail from "./components/Detail/Detail.jsx";
import Form from "./components/Form/Form.jsx";
import { useLocation } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

function App(){
  
const navigate = useNavigate();
const [characters, setCharacters] = useState([]);
const location = useLocation ();
const [access, setAccess] = useState(false)

const username = "kcabello2@hotmail.com"
const password = "123qweasd"

const login = (userData) =>{
if (userData.username === username && userData.password === password){
  setAccess(true)
  navigate("/home");
}
}
useEffect(()=>{
  !access && navigate("/");
},[access])



const onSearch = (id) =>{
    const URL_BASE = "https://be-a-rym.up.railway.app/api";
    const KEY ="89388fc8ff45.15fe4e969f316393e59b";

    if (characters.find((characters) => characters.id === id)){
    
     return alert("Personaje repetido");
    }

    fetch(`${URL_BASE}/character/${id}?key=${KEY}`)
    .then((response) => response.json())
    .then((data) => {
      if (data.name)
        setCharacters((oldChars) => [...oldChars, data]);
       
       else 
       {
        alert('No hay personajes con ese ID');
       }
       
       });
}


const onClose = (id) =>{
  setCharacters(characters.filter(characters => characters.id !== id));

}


  return (
    <div className="App" style={{ padding: "25px" }}>
      {location.pathname === "/" ? <Form login ={login}/> : <Nav onSearch={onSearch} /> }
      <div className={style.nav}/>
     <Routes>
      <Route
      path="/home" element = {<Cards onClose = {onClose} characters={characters}  />} />
      <Route path="/about" element ={<About/>} />
      <Route path="detail/:detailId" element ={<Detail />} />
      <Route path="/favorites" element ={<Favorites/>} />
       </Routes>

       {/* </div> */}
       </div>
  )
};
 

export default App;
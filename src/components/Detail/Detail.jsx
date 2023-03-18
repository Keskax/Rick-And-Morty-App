import { useEffect } from "react";
import { useParams } from "react-router-dom"
import { useState } from "react";
import axios from "axios";

const Detail = () => {
    const {detailId} = useParams();

    const [character, setCharacter] = useState({})

    useEffect(() => {
        const URL_BASE = "https://be-a-rym.up.railway.app/api";
        const KEY ="89388fc8ff45.15fe4e969f316393e59b";
        axios(`${URL_BASE}/character/${detailId}?key=${KEY}`).then((response) =>
        setCharacter(response.data)
      );
    }, []);
  
    return (
        <div>
          {character.name ? (
            <>
              <h2>{character.name}</h2>  
              <p>{character.status}</p>
              <p>{character.species}</p>
              <p>{character.gender}</p>
              <p>{character.origin?.name}</p>
              <img src={character.image} alt="img" />
            </>
          ) : (
            <h3>Loading...</h3>
          )}
        </div>
      );
    };
export default Detail;

import { Link } from "react-router-dom";
import {useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addFavorites, removeFavorite } from "../../Redux/actions"
import { useEffect } from "react";
import style from "./Card.module.css"


function Card({ id, name, species, gender, image, onClose }) {
  const myFavorites = useSelector (state =>state.myFavorites)
  const [isFav , setIsFav] = useState(false);
  const dispatch = useDispatch();

  const handleFavorite = () =>{
    if(isFav){  
    setIsFav(false);
    dispatch(removeFavorite(id))
  }
  else{
    setIsFav(true);
    dispatch(addFavorites({ id, name, species, gender, image, onClose }))
  }
  }

  useEffect(() => {
    myFavorites.forEach((fav) => {
       if (fav.id === id) {
          setIsFav(true);
       }
    });
 }, [myFavorites]);
  return (

 
    <div className={style.container}>

         {

      isFav ? (
         <button className ={style.fav} onClick={handleFavorite}>❤️</button >
      ) : (
         <button className ={style.fav} onClick={handleFavorite}>🤍</button>
      )
}

      <button onClick={()=>onClose(id)} className={style.closeButton}>
        X
      </button>
      <Link to = {`/detail/${id}`}>
      <h2 className={style.centerName}>{name}</h2>
      </Link>
      <img className={style.imagen} src={image} alt="" />
      <h2 className={style.description}>Species: {species}</h2> 
      <h2 className={style.description}>Gender: {gender}</h2>
      
    </div>
  );
}


export default Card;
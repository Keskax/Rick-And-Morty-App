import style from "./Card.module.css";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { ADD_FAVORITE , REMOVE_FAVORITE} from "../../Redux/action-types";
import { useDispatch } from "react-redux";
import { useState } from "react";
import { addFavorites, removeFavorite } from "../../Redux/actions"
function Card({ id, name, species, gender, image, onClose }) {

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
  return (

 
    <div className={style.container}>

         {
      isFav ? (
         <button onClick={handleFavorite}>❤️</button>
      ) : (
         <button onClick={handleFavorite}>🤍</button>
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

const mapDispatchToProps = (dispatch) =>{
  return{
    addFavorite: (character) =>{
      dispatch(ADD_FAVORITE(character));
    },
  
    removeFavorite: (id) =>{
      dispatch(REMOVE_FAVORITE(id));
      },
    };
  };

    const mapStateToProps = (state) =>{
      return{
          myFavorites: state.myFavorites,
      }
    }


export default connect(mapStateToProps, mapDispatchToProps)(Card) 
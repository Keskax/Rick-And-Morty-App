import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { orderCards , filterCards} from "../../Redux/actions";
import style from "./Favorites.module.css";
import { Link } from "react-router-dom";
const Favorites = () =>{
const {myFavorites} = useSelector (state => state) 

    const dispatch = useDispatch();
    const handleOrder = (event) =>{
        dispatch(orderCards(event.target.value))

    }

    const handleFilter = (event) =>{
        dispatch(filterCards(event.target.value))

    }
    return(
        <>
        <div>
            
            <select onChange={handleOrder}>
            <option value="Ascendente">Ascendente</option>
            <option value="Descendente">Descendente</option>   
            </select>   
            <select onChange={handleFilter}>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
            <option value="Genderless">Genderless</option>
            <option value="Unknown">Unknown</option>


            </select>
        </div>
            {myFavorites.map(({ id, name, species, gender, image }) => {
                    return (
                        <div> 
                        <Link to = {`/detail/${id}`}>
                        <h2 className={style.centerName}>{name}</h2>
                        </Link>
                        <img className={style.imagen} src={image} alt="" />
                        <h2 className={style.description}>Species: {species}</h2> 
                        <h2 className={style.description}>Gender: {gender}</h2>
                        </div>
                    )
                 })};
             </>
           )      
        }

export default Favorites;
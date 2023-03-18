import { ADD_FAVORITE, REMOVE_FAVORITE, FILTER, ORDER } from "./action-types";

const initialState ={
    myFavorites: [],
    allCharacters: []

};

const rootReducer = (state = initialState, action) =>{
    switch(action.type){
        case ADD_FAVORITE:
        return  {
            ...state,
            myFavorites:[...state.allCharacters, action.payload],
            allCharacters:[...state.allCharacters, action.payload]
        }

        case  REMOVE_FAVORITE:
            return{
                ...state,
                myFavorites: state.myFavorites.filter((char) => char.id !== action.payload),
            };
            

        case FILTER:    
        const filterCharacters =state.allCharacters.filter((char)=>char.gender === action.payload)
        
        return{
            ...state,
            myFavorites: filterCharacters
            
            };
        
        case ORDER:
            
            action.payload === "Ascendente"
            ? state.allCharacters.sort((value1 , value2) => value1.id - value2.id) : state.allCharacters.sort((value1 , value2) => value2.id -value1.id)

            return{
                ...state
            }
        default:
            return{
                ...state
            }
    }
}

export default rootReducer;
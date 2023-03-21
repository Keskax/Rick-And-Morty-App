import { useState } from "react";
import Validation from "./validation";
import style from "../../components/Estilos/login.module.css"


const Form = ({ login }) =>{

    const[userData, setUserData] = useState({
        username: "" ,
        password: ""
    })

    
    const[errors, setErrors] = useState({
        username: "" ,
        password: ""
    })

    const handleInputChange = (event) =>{
        setUserData({
            ...userData,
            [event.target.name]: event.target.value
        })

        setErrors(Validation({
            ...userData,
            [event.target.name]: event.target.value
        }))

    }

    const handleSubmit = (event) =>{
        event.preventDefault()
        login(userData)
    }

    return(
        <div className={style.container}>  
        <form className={style.form} onSubmit={handleSubmit}>
                <label htmlFor ="Username">Username:</label>
                <input type="text" name = "username" value ={userData.username} onChange={handleInputChange} />
                {errors.username && <p>{errors.username}</p>}
                <label htmlFor ="Password">password:</label>
                <input type="Password" name = "password" value={userData.password} onChange={handleInputChange} />
                {errors.password && <p>{errors.password}</p>}
                <button>LOGIN</button>
        </form>
        </div>

    )
}

export default Form;
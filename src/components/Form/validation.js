
const Validation = (userData) => {
    
    let errors = {};

    if(!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username = "El email es invalido"
    }

    if(!userData.username){
        errors.username ="Este campo es obligatorio"
    }

    if(userData.username.length > 35){
        errors.username ="El email no puede superar los 35 caracteres"
    }

    if(!/^[a-zA-Z0-9!@#$%^&*]{6,16}$/.test(userData.password)){
        errors.password = "La contraseña debe contener al menos un numero"
    }

    return errors;  

}


export default Validation;
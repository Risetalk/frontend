const validation = (userData) =>{
    
    let errors = {
        username: 'no',
        password: 'no'
    };

    if(/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(userData.username)){
        errors.username = 'No puede ser un email';}

    if(userData.username.length > 40){errors.username= 'No puede tener mas de 40 caracteres'}

    if(!userData.password.match(/\d/)){errors.password = 'Tiene que tener al menos un numero'}

    if(userData.password.length <= 8 ){
        errors.password ='Tiene que ser mas de 8 caracteres'
    }

    if(!userData.password){errors.password = 'no'}
    

    return errors;
}
export default validation;
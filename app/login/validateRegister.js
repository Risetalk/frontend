const validationRegister = (register) => {

    let errors = {
        first_name: "no",
        last_name: "no",
        user_name: "no",
        email: "no",
        date_birth: "no",
        about_me: "no",
        password: "no"
    };


    //Validaciones para "first_name"
    if(register.first_name.length > 30)errors.first_name = "Excede"

    if (register.first_name.match(/\d/))errors.first_name = 'No puede contener un numero' 

    if (register.first_name.length === 0)errors.first_name = 'No puede estar vacio' 

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(register.first_name)) {
        errors.first_name = 'No puede ser un email';
    }
    
    //Validaciones para "last_name"
    if(register.last_name.length > 30)errors.last_name = "Excede"

    if (register.last_name.match(/\d/))errors.last_name = 'No puede contener un numero' 

    if (register.last_name.length === 0)errors.last_name = 'No puede estar vacio' 

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(register.last_name)) {
        errors.last_name = 'No puede ser un email';
    }
    
    if (register.user_name.length > 40) { errors.user_name = 'No puede tener mas de 40 caracteres' }

    //Validaciones para "email"
    
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(register.email)) {
        errors.email = 'Tiene que ser un email';
    }
    
    if(register.email.length === 0)errors.email = "No puede estar vacio"

    //Validaciones para "user_name"
    if(register.user_name.length > 30)errors.user_name = "Excede"

    if (register.user_name.match(/\d/))errors.user_name = 'No puede contener un numero' 

    if (register.user_name.length === 0)errors.user_name = 'No puede estar vacio' 

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(register.user_name)) {
        errors.user_name = 'No puede ser un email';
    }

    //Validacion de "date_birth"
    if(register.date_birth.length === 0)errors.date_birth = "No puede estar vacio"


    //Validacion de "password"
    if (!register.password.match(/\d/)) { errors.password = 'Tiene que tener al menos un numero' }

    if (register.password.length <= 8) {
        errors.password = 'Tiene que ser mas de 8 caracteres'
    }

    if (!register.password)errors.password = 'No puede estar vacio'


    return errors;
}
export default validationRegister;
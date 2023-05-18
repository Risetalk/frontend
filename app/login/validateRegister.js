const validationRegister = (register) => {

    let errors = {
        first_name: "no",
        last_name: "no",
        user_name: "no",
        email: "no",
        date_birth: "no",
        about_me: "no"
    };

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(register.user_name)) {
        errors.user_name = 'No puede ser un email';
    }

    if (register.user_name.length > 40) { errors.user_name = 'No puede tener mas de 40 caracteres' }

    // if (!register.password.match(/\d/)) { errors.password = 'Tiene que tener al menos un numero' }

    // if (userData.password.length <= 8) {
    //     errors.password = 'Tiene que ser mas de 8 caracteres'
    // }

    // if (!userData.password) { errors.password = 'no' }


    return errors;
}
export default validationRegister;
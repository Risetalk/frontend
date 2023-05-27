import React from 'react'

export default function validate(values) {
        const errors = {};
        if (!values.first_name) {
          errors.first_name = "Required";
        } else if (values.first_name.length < 3) {
          errors.first_name = "Must be 3 characters or more";
        }
        if (!values.last_name) {
          errors.last_name = "Required";
        } else if (values.last_name.length < 3) {
          errors.last_name = "Must be 3 characters or more";
        }
        if (!values.user_name) {
          errors.user_name = "Required";
        } else if (values.user_name.length < 3) {
          errors.user_name = "Must be 3 characters or more";
        }
        if (!values.email) {
          errors.email = "Required";
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = "Invalid email address";
        }
        if (!values.password) {
          errors.password = "Required";
        } else if (values.password.length < 8) {
          errors.password = "Must be 8 characters or more";
        }
        if (!values.date_birth) {
          errors.date_birth = "Required";
        }
        return errors;
      
    
  
}



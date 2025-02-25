export default function validate(values){
    let errors={}

    if(!values.firstname.trim()){
        errors.firstname="Firstname required"
    }
    if(!values.lastname.trim()){
        errors.lastname="Lastname required"
    }
    if(!values.email.trim()){
        errors.email="Email required"
    }
    else if (/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(values.email)) {
        errors.email="Email is invalid"
    }
    if(!values.pass.trim()){
        errors.pass="Password required"
    }
    else if(!values.pass.length > 6){
        errors.pass="Password needs to be 6 characters or more"
    }

    return errors;
}
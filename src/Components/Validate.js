export default function validate(regData) {
    let error = {};
  
    // Validate username
    if (!regData.username || !regData.username.trim()) {
      error.username = "Username required";
    }
  
    // Validate email
    if (!regData.email || !regData.email.trim()) {
      error.email = "Email required";
    } else if (!/^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/.test(regData.email)) {
      error.email = "Email is invalid";
    }
  
    // Validate password
    if (!regData.password || !regData.password.trim()) {
      error.password = "Password required";
    } else if (regData.password.length < 6) {
      error.password = "Password needs to be 6 characters or more";
    }
  
    return error;
  }
  
"use server";

// User Sign Up Form Action
export async function authFormSubmit(formData) {
  try {
    // Accessing user entered data
    const userData = {
      fullname: formData.get("fullname"),
      username: formData.get("username"),
      email: formData.get("email"),
      password: formData.get("password"),
    };

    // Email Validation Regex
    let emailRegex =
      /^(?!.*\.\.)[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;

    // Password Validation Regex
    let passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

    // Errors object
    let errors = {};

    // Checking if user has entered a valid name
    if (userData?.fullname.trim() === "" || !userData.fullname) {
      // Create a key fullname with a error message
      errors.fullName = "Please enter a valid name.";
    }

    // Checking if user has entered a valid username
    if (userData?.username.trim() === "" || !userData.username) {
      // Create a key username with a error message
      errors.userName = "Please enter a valid username.";
    }

    // Checking if user has entered a valid email
    if (
      userData?.email.trim() === "" ||
      !userData.email ||
      emailRegex.test(userData?.email)
    ) {
      // Create a key email with a error message
      errors.email = "Please enter a valid format like example@domain.com.";
    }

    // Checking if user has entered a valid password
    if (
      userData?.password.trim() === "" ||
      !userData.password ||
      passwordRegex.test(userData?.password)
    ) {
      // Create a key password with a error message
      errors.password =
        "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character.";
    }

    // Return errors object if errors object contains any error
    if (errors?.length > 0) {
      return { errors };
    }

    // Returns the userdata if there is no error
    console.log(userData);
  } catch (error) {
    throw new Error("Failed to get formData", error);
  }
}

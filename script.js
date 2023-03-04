function validateForm() {
    // get form data
    // access form elements by name and trim whitespace
    const name = document.forms["myForm"]["name"].value.trim();
    const email = document.forms["myForm"]["email"].value.trim();
    const phone = document.forms["myForm"]["phone"].value.trim();
    const password = document.forms["myForm"]["password"].value.trim();
  
    // clear any previous error messages
    const errorMessage = document.getElementById("error-message");
    // innerHTML is used to set the HTML content of an element
    errorMessage.innerHTML = "";
  
    // validate name
    if (name == "") {
      errorMessage.innerHTML = "Please enter your name";
      // return false to prevent form submission
      return false;
    }
  
    // validate email
    if (email == "") {
      errorMessage.innerHTML = "Please enter your email";
      return false;
      //validateEmail() is a function that returns true if the email is valid
    } else if (!validateEmail(email)) {
      errorMessage.innerHTML = "Please enter a valid email address";
      return false;
    }
  
    // validate phone number
    if (phone == "") {
      errorMessage.innerHTML = "Please enter your phone number";
      return false;
    } else if (!validatePhone(phone)) {
      errorMessage.innerHTML = "Please enter a valid phone number";
      return false;
    }
  
    // validate password
    if (password == "") {
      errorMessage.innerHTML = "Please enter a password";
      return false;
    } else if (password.length < 8) {
      errorMessage.innerHTML = "Password must be at least 8 characters long";
      return false;
    }
  
    // form is valid, submit form
    alert("Form submitted successfully!");
    return true;
  }
  
  function validateEmail(email) {
    // regular expression to validate email address format
    //regular expression starts with a caret (^) and ends with a dollar sign ($)
    //[^\s@] means any character that is not a space or an @
    //+ means one or more of the preceding character
    //\.[^\s@]+ means a period followed by any character that is not a space or an @, one or more times
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    //re.test() returns true if the email matches the regular expression
    return re.test(email);
    }

    function validatePhone(phone) {
        // \d{10} means a digit, 10 times
        const re = /^\d{10}$/;
        return re.test(String(phone));
      }
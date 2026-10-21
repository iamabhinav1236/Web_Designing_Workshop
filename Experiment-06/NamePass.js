function validateForm(){
    
    let nameField = document.getElementById("name");
    let passwordField = document.getElementById("password");
    
    //Check whether the fields exist
    if(!nameField || !passwordField){
        alert("Error: Name or Password filed ID is missing");
        return false;
    }

    let name = nameField.value.trim();
    let password = passwordField.value;

    //Name Validation
    if(name === ""){
        alert("Please enter your name.");
        nameField.focus();
        return false;
    }

    if(!/^[A-Za-z ]+$/.test(name)){
        alert("Name should contain only letters and spaces.");
        nameField.focus();
        return false;
    }

    //Password Validation
    if(password === ""){
        alert("Please enter your password.");
        passwordField.focus();
        return false;
    }

    if(password.length < 8){
        alert("Password must contain at least 8 character.");
        passwordField.focus();
        return false;
    }

    return true;
}

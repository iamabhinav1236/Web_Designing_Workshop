function validateContact(){

    //Get email and Phone Number
    let email = document.getElementById("email").value.trim();
    let phone = document.getElementById("phone").value.trim();

    //E-mail validation
    let emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if(email === ""){
        alert("Please enter your E-mail ID!");
        document.getElementById("email").focus();
        return false;
    }

    if(!emailPattern.test(email)){
        alert("Please enetr a valid E-mail ID!");
        document.getElementById("email").focus();
        return false;
    }

    //Phone Number validation
    let phonePattern = /^[0-9]{10}$/;

    if (phone === "") {
        alert("Please enter your Phone Number!");
        document.getElementById("phone").focus();
        return false; 
    }

    if(!phonePattern.test(phone)) {
        alert("Phone Number must contain exactly 10 digits!");
        document.getElementById("phone").focus();
        return false;
    }

    return true;
}

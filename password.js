var s="";
document.getElementById("match").onclick = function(){
    if(password.equals(confirmpassword))
    {
        alert("Account Successfully Created.");
    }
    else{
        alert("Your Password didn't match.");
        return false;
    }
}

/*var password = document.getElementById("password");
var confirm_password = document.getElementById("confirm_password");

function validatePassword()
{
    if (password.value != confirm_password.value)
    {
        confirm_password.setCustomValidity("Passwords don't match");
    }
    else{
        confirm_password.setCustomValidity("");
    }
}

password.onchange = validatePassword;
confirm_password.onkeyup = validatePassword;*/
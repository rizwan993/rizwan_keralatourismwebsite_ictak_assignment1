function r(){
    location.href = "login.html";
}
function s(){
    location.href = "signup.html";
}





function svalidate(){

    var username = document.getElementById("suser");
    var email    = document.getElementById("semail");
    var phone    = document.getElementById("sphon");
    var pass     = document.getElementById("spass");
    var cpass    = document.getElementById("scpass");
    var emailv   = document.getElementById("emailv");
    var phonv   = document.getElementById("phonv");
    var match   = document.getElementById("match");
    var e1 = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var p1 = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
    var ps1 = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;

    if(username.value.trim() == ""){
        alert("Username cannot be blank!"); 
        return false;
    }

    if(email.value.trim() == ""){
        alert("Email cannot be blank!");
        return false;
    }

    if(e1.test(email.value)){
        emailv.innerText = "Valid Email";
        emailv.style.color = "yellow";
    } else {
        alert("Invalid Email!");
        return false;
    }

    if(phone.value.trim() == ""){
        alert("Phon number cannot be blank");
        return false;
    } 


    if(p1.test(phone.value)){
        phonv.innerText = "Valid Phone number";
        phonv.style.color = "yellow";

    }else{
        alert("Enter a valid phon number!")
        return false;
    }

    if(pass.value.trim() == ""){
        alert("Please enter a password");
        return false;
    }

    if(ps1.test(pass.value)){

        if(pass.value.length <= "3"){
            strn.innerText = "weak";
            strn.style.color = "red"
            return true;
        }
        else if(pass.value.length <= "6"){
            strn.innerText = "medium";
            strn.style.color = "orange";
            return true;
        }
        else if(pass.value.length <= "8"){
            strn.innerText = "strong";
            strn.style.color = "green";
            return true;
        }
//         }else{
//             alert("passowrd should not exceed 8 characters");
//             return false;

//         }
    
    } else{
            alert("Invalid password");
            return false;
        }
    return true;

    // if(cpass.value === pass.value){
    //     return true;
    // }

    // else{
    //     match.innerText= "Password do not match";
        
    //     return false;
    // }

    }

function lvalidate(){
    var e1 = /^([\w\.-]+)@([\w\-]+).([a-z]{2,3})(.[a-z]{2,3})?$/;
    var lpass = document.getElementById("lpass");
    var ve = document.getElementById("ve");
    
    if(lemail.value.trim() == ""){
        alert("Enter your credentials");
        return false;
    }
    if(e1.test(lemail.value)){
        ve.innerText = "Welcome back!"
    } 
    else{
        alert("Invalid Email!");
        return false;
        
    }
    if(lpass.value.trim()== ""){
        alert("Enter your password!");
        return false;
    }else{
    return true;
    }
  }





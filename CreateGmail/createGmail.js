let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let 
    firstName = id("firstName"),
    lastName = id("lastName"),
    username = id("username"),
    password = id("password"),
    confirmPass = id("confirm"),
    errorMsg = classes("error"),
    failureIcon= classes("failure-icon");

form.addEventListener("submit", (e) => {
    e.preventDefault(); //callback() trong js
    engine(firstName,0,"Enter first name");
    engine(lastName,1,"Enter last name");
    engine(username,2,"Choose a Gmail address");
    engine(password,3,"Enter a password");
    engine(confirmPass,4,"Confirm your password");
}); 
let engine = (id,serial,message) =>{
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML = message;
        id.style.border ="2px solid red";
        failureIcon[serial].style.opacity="1";
    }else {
        errorMsg[serial].innerHTML = "";
        id.style.border ="2px solid green";
        failureIcon[serial].style.opacity="0";
        successIcon[serial].style.opacity="1";
    }
};
let id = (id) => document.getElementById(id);

let classes = (classes) => document.getElementsByClassName(classes);

let fullname = id("fullName"),
    email = id("email"),
    password = id("password"),
    repassword = id("repassword"),
    phone = id("phone"),
    errorMsg = classes("error");
    form = id("form");

form.addEventListener('submit',(e) => {
    e.preventDefault();
    console.log(2323);
    engine(fullname,0,"Full name can not be blank!");
    engine(email,1,"Email can not be blank!");
    engine(password,2,"Password can not be blank!");
});

let engine = (id,serial,message) => {
    if(id.value.trim()===""){
        errorMsg[serial].innerHTML = message;
        id.style.border ="2px solid red";
    } else {
        errorMsg[serial].innerHTML = "";
        id.style.border ="2px solid green";
    }
};   
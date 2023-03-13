const pass = document.querySelector(".form input[type='password']"),
 btn = document.querySelector(".form .field i");

btn.onclick = ()=> {

    if(pass.type == "password"){
        pass.type = "text";
        btn.classList.add("active");
    }
    else{
        pass.type = "password";
        btn.classList.remove("active");
    }
}
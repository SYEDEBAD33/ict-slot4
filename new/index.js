function signup(){
    const username_var = document.getElementById("username");
    const email_var = document.getElementById("email");
    const pass_var = document.getElementById("password");
    // alert (username_var.value);
    localStorage.setItem("username",username_var.value)
    localStorage.setItem("email",email_var.value)
    localStorage.setItem("password",pass_var.value)
    window.location.href = "login.html"

    // sessionStorage.setItem("username",username_var.value)
}
function login(){
    const pass_var = document.getElementById("password");
    const email_var = document.getElementById("email");

    let fetch_email = localStorage.getItem("email")
    let fetch_pass = localStorage.getItem("password")

    if(email_var.value == fetch_email && pass_var.value == fetch_pass){
           window.location.href ="dashboard.html";
    }
    else{
            window.location.href ='login.html'
      }
}
function after_load(){
        let user_name = document.getElementById("user")

        let fetch_user = localStorage.getItem("username")
        
        user_name.innerText = "Hello"+"  "+fetch_user
}
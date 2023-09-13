
let latestUsers = []
function signup(){
    // e.preventDefault();
    
    let regUsername = document.getElementById("myUsername").value;
    let regEmail = document.getElementById("myEmail").value;
    let regPass = document.getElementById("myPassword").value;
    let usernameError = document.getElementById("errorUsername");
    let emailError = document.getElementById("errorEmail");
    let passError = document.getElementById("errorPass");

    if(regEmail.includes("@")){
        emailError.innerHTML = "";
    }

    if(!regEmail.includes("@")){
        emailError.innerHTML = "Please Enter a Valid Email Address";
    }
    if(regPass.length < 8){
        passError.innerHTML = "Password length must be greater than 8 characters";
    }
    else{
        latestUsers.push({
            email : regEmail,
            password : regPass,
        })
            localStorage.setItem('usersList', JSON.stringify(latestUsers))
            regEmail = "";
            regPass = "";
            regUsername = "";
            alert("Account Created Successfuly")
        }
    }

function login(){
    let logEmail = document.getElementById("logEmail");
    let logPass = document.getElementById("logPassword");
    let fetchData = JSON.parse(localStorage.getItem('usersList'))
    let checkUser = fetchData.find( e => e.email == logEmail.value && e.password == logPass.value)
    if(!checkUser){
        alert("Incorrect Password or Email")
    }
    // else if( check.password != logPass.value){
    //     alert("Incorrect Password")
    // }
    else{
        window.document.location = "./"
    }
    // alert(check)
    // if((user.email === logEmail || user.username === logEmail ) && user.pass === logPass){
    //     alert("Login Successful")
    // }else{
    //     alert("Please Check your Username or Password")
    //     let checkbox = document.getElementById("switch")
    //     checkbox.checked == true;
    // }

}

function switchForm(){

    let checkbox = document.getElementById("switch");
    let login = document.getElementById("signin-col");
    let signup = document.getElementById("signup-col");
    if (checkbox.checked == true) {
       signup.style.display = 'block'
       login.style.display = 'none'
    }
    else {
        signup.style.display = 'none'
        login.style.display = 'block'
    }
}

function alertfunction() {
    
    // alert("sweet incoming");
    swal({
        icon: "error",
        title: "Good job!",
        text: "You clicked the button!",
      });
}
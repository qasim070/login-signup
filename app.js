
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
        localStorage.setItem('usersList', JSON.stringify(latestUsers));
            alert("Account Created Successfuly")
        }
          
        console.log(user)
    }
// }

function login(){
    let logEmail = document.getElementById("logEmail").value;
    let logPass = document.getElementById("logPassword").value;
    if((user.email === logEmail || user.username === logEmail ) && user.pass === logPass){
        alert("Login Successful")
    }else{
        alert("Please Check your Username or Password")
        let checkbox = document.getElementById("switch")
        checkbox.checked == true;
    }

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

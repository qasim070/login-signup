
let latestUsers = []
function signup(event){
    event.preventDefault();

    
    let regUsername = document.getElementById("myUsername").value;
    let regEmail = document.getElementById("myEmail").value;
    let regPass = document.getElementById("myPassword").value;
    let emailError = document.getElementById("errorEmail");
    let passError = document.getElementById("errorPass");
    let fetchData = JSON.parse(localStorage.getItem('usersList'))
    let checkPrevData = fetchData.find( e => e.email == regEmail.value)
    alert(checkPrevData)

    if(regUsername == ""  || regEmail == "" || regPass == "" ){
        swal({
            icon: "warning",
            title: "Don't Leave anything Empty",
            });
    }else{

        if(regEmail.includes("@")){
            emailError.innerHTML = "";
        }
        if(!regEmail.includes("@")){
            emailError.innerHTML = "Please Enter a Valid Email Address";
        }
        if(regPass.length < 8){
            passError.innerHTML = "Password length must be greater than 8 characters";
        }
        // else{
            if(checkPrevData){
                alert("ij");
            }else{
                latestUsers.push({
                    username: regUsername,
                    email : regEmail,
                    password : regPass,
                })
                    if(localStorage.setItem('usersList', JSON.stringify(latestUsers))){
                        swal({
                            icon: "success",
                            title: "Account Created Successfuly",
                            showCancelButton: true,
                            showConfirmButton: true,
                            confirmButtonText: "Redirecting you to Dashboard",   
                            closeOnConfirm: true 
                            }, function() {
                                window.location = '/';
                            });
                    }
                }
         
                // }
        }
    }

function login(){
    let logEmail = document.getElementById("logEmail");
    let logPass = document.getElementById("logPassword");
    let fetchData = JSON.parse(localStorage.getItem('usersList'))
    if(logEmail.value == "" || logPass == ""  ){
        swal({
            icon: "warning",
            title: "Inputs can not empty",
            text: "Email or Password Field is empty",
        });
    }else{
        let checkUser = fetchData.find( e => e.email == logEmail.value && e.password == logPass.value)
        if(!checkUser){
            swal({
                icon: "error",
                title: "Incorrect Credentials",
                text: "Please Check the email or Password",
              });
        }else{
            window.document.location = "./";
        }
    }
    // else if( check.password != logPass.value){
    //     alert("Incorrect Password")
    // }
    
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
        icon: "success",
        title: "Good job!",
        text: "You clicked the button!",
      });
}

// let latestUsers = []
let latestUsers = [];
function signup(event){
    event.preventDefault();
  
    let regUsername = document.getElementById("myUsername").value;
    let regEmail = document.getElementById("myEmail").value;
    let regPass = document.getElementById("myPassword").value;
    let emailError = document.getElementById("errorEmail");
    let passError = document.getElementById("errorPass");
    let fetchData = JSON.parse(localStorage.getItem('userList'))

    //let checkPrevData = fetchData.find( e => e.email == regEmail.value)
   // alert(checkPrevData)

    if(regUsername == ""  || regEmail == "" || regPass == "" ){
        swal({
            icon: "warning",
            title: "Don't Leave anything Empty",
            });
    }else{
        if(!regEmail.includes("@")){
            emailError.innerHTML = "Please Enter a Valid Email Address";
        }
        if(regPass.length < 8){
            passError.innerHTML = "Password length must be greater than 8 characters";
        }else{
            if (JSON.parse(localStorage.getItem('userList')) == null) {
                latestUsers.push({
                    username: regUsername,
                    email : regEmail,
                    password : regPass,
                })
                localStorage.setItem('userList',JSON.stringify(latestUsers));
            } else {
                let checkUser = fetchData.find(e => e.email == regEmail)
                if(checkUser){
                    swal({
                        icon: "warning",
                        title: "User Alredy Exist with this Email ",
                        });
                }else{
                    latestUsers = JSON.parse(localStorage.getItem('userList'))
                    latestUsers.push({
                        username: regUsername,
                        email : regEmail,
                        password : regPass,
                    })
                    localStorage.setItem('userList',JSON.stringify(latestUsers));
                    window.document.location = "dashboard.html";
                }

                    }
                }
        }
    }

function login(){
    let logEmail = document.getElementById("logEmail");
    let logPass = document.getElementById("logPassword");
    let fetchData = JSON.parse(localStorage.getItem('userList'))
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
            // let displayName = JSON.stringify(fetchData.filter( e => e.username));
            // alert("Welcome " + displayName)
            window.document.location = "dashboard.html";
        }
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

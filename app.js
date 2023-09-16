
// let latestUsers = []
let latestUsers = [];
function signup(event){
    event.preventDefault();
  
    let regUsername = document.getElementById("myUsername").value;
    let regEmail = document.getElementById("myEmail").value;
    let regPass = document.getElementById("myPassword").value;
    let emailError = document.getElementById("errorEmail");
    let passError = document.getElementById("errorPass");
    let fetchData = JSON.parse(localStorage.getItem('userList'));
    let FirstuserId = 1000  ;

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
                    userId: FirstuserId ,
                    username: regUsername,
                    email : regEmail,
                    password : regPass,
                })
                localStorage.setItem('userList',JSON.stringify(latestUsers));
                // localStorage.setItem('userNameForLogin',JSON.stringify(latestUsers.email));

            } else {
                let checkUser = fetchData.find(e => e.email == regEmail)
                let getUsername = fetchData.find( e => e.username)
                if(getUsername){
                    let passUsernametoDOM = getUsername;
                    localStorage.setItem('userNameForLogin',JSON.stringify(passUsernametoDOM.username));
                }
                if(checkUser){
                    swal({
                        icon: "warning",
                        title: "User Alredy Exist with this Email ",
                        });
                }else{
                    
                    latestUsers = JSON.parse(localStorage.getItem('userList'))
                    let len = latestUsers.length-1;
                    let newUserId =  latestUsers[len].userId + 1;
                    latestUsers.push({
                        userId : newUserId,
                        username: regUsername,
                        email : regEmail,
                        password : regPass,
                    })
                    localStorage.setItem('userList',JSON.stringify(latestUsers));
                    // swal({
                    //     icon: "success",
                    //     title: "Redirecting you to the Dashboard ",
                    //     timer: 2000,

                    //     });
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
        let checkUserExist = fetchData.find( e => e.email == logEmail.value)
        let checkUser = fetchData.find( e => e.email == logEmail.value && e.password == logPass.value)
        let getUsername = fetchData.find( e => e.username)
        if(getUsername){
            let passUsernametoDOM = getUsername;
            localStorage.setItem('userNameForLogin',JSON.stringify(passUsernametoDOM.username));
        }
        if(checkUserExist == null){
            swal({
                icon: "warning",
                title: "This Email Doesn't Exist in our Record",
                text: "Please check your email",
              });
        }else if(!checkUser){
            swal({
                icon: "error",
                title: "Incorrect Credentials",
                text: "Please Check email or Password",
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
let toDoItemList = [];
function addToDo(){
    let toDoItem = document.getElementById("toDoVal");
    if(toDoItem.value.trim() == ""){
        swal({
            icon: "warning",
            title: "It can not be empty",
            text: "Please enter something",
          });
    }else{
        toDoItemList.push({
            toDo: toDoItem.value
        })
        localStorage.setItem('todoList',JSON.stringify(toDoItemList));
    }
}

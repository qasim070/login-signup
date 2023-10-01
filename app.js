
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
                window.document.location = "dashboard.html";
                let  LoginSession =  []
                    LoginSession.push({
                        saveUserId: FirstuserId ,
                        saveUsername:regUsername
                    })
                    localStorage.setItem('userNameForLogin',JSON.stringify(LoginSession));
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
                    let  LoginSession =  []
                    // let getUsername = fetchData.find( e => e.username)
                        LoginSession.push({
                            saveUserId:newUserId ,
                            saveUsername:regUsername
                        })
                        localStorage.setItem('userNameForLogin',JSON.stringify(LoginSession));
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
        let  LoginSession =  []
        let checkUserExist = fetchData.find( e => e.email == logEmail.value)
        let checkUser = fetchData.find( e => e.email == logEmail.value && e.password == logPass.value)
        let getUsername = fetchData.find( e => e.username)
        if(getUsername){
            
            let saveUsername = getUsername.username;
            let saveUserId = getUsername.userId;
            LoginSession.push({
                saveUserId,
                saveUsername
            })

            localStorage.setItem('userNameForLogin',JSON.stringify(LoginSession));
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
window.onload = function () {
    displayTodo();
};





function addToDo(event) {
    event.preventDefault();
    let fetchData = JSON.parse(localStorage.getItem('userNameForLogin')) || [];
    let toDoItemList = JSON.parse(localStorage.getItem('todoList')) || [];
    let getUserId = fetchData.find( e => e.saveUserId)
    // let saveUserId = getUsername.userId;

    let lastId = toDoItemList.length > 0 ? toDoItemList[toDoItemList.length - 1].todoId : 0;
    let newId = lastId + 1;
    let toDoItem = document.getElementById("toDoVal");

    if (toDoItem.value.trim() == "") {
        swal({
            icon: "warning",
            title: "It cannot be empty",
            text: "Please enter something",
        });
    } else {
        toDoItemList.push({
            userId: getUserId.saveUserId,
            todoId: newId,
            toDo: toDoItem.value
        });
        localStorage.setItem('todoList', JSON.stringify(toDoItemList));
        toDoItem.value = "";
        // displayTodo();
    }
}

function displayTodo() {
    let fetchTask = JSON.parse(localStorage.getItem('todoList')); 
    let fetchId = JSON.parse(localStorage.getItem('userNameForLogin')); 
    let ul = document.getElementById("list");
    let noData = document.getElementById("noData");
    let divHeight = document.getElementById("manageheight");
    if(!fetchTask){
        noData.innerHTML = "<span class='material-symbols-outlined'>error</span>"+"No Data to Display";
    }else{
        noData.innerHTML = "";
        divHeight.style.height = "100vh";
        fetchTask.forEach((item) => {
            let checkId = getUsername[0].saveUserId;
            if(checkId === item.userId){
                let createDel = document.createElement("button");
                let toDo = item.toDo;
                let createLi = document.createElement("li");
                let createP = document.createElement("p");
                createDel.innerHTML = "<span class='material-symbols-outlined'>delete_forever</span>" + " Delete";
                createLi.appendChild(createDel);
                createDel.setAttribute("class" , "btn btn-danger myIconBtn")
                createDel.setAttribute("onclick" , "removeTodo(this)")
                createP.textContent = toDo  ;
                createLi.setAttribute("id", "liText");
                createLi.appendChild(createP);
                let createBox = document.createElement("INPUT");
                createBox.setAttribute("type", "checkbox");
                createBox.setAttribute("class" , "mx-2 mb-2")
                createBox.setAttribute("onclick" , "changeStatus()")
                createLi.appendChild(createBox)

                ul.appendChild(createLi);
            }

        });
    }
}
function removeTodo(e){
    let fetchData = JSON.parse(localStorage.getItem('userNameForLogin')) || [];
    let toDoItemList = JSON.parse(localStorage.getItem('todoList')) || [];
    // someArray.splice(x, 1);

    
    // confirm("Are you sure you want to delete? " + e.parentNode.lastChild.innerHTML  )
    // swal({
    //     title: "Are you sure?",
    //     text: "Once deleted, you will not be able to recover this imaginary file!",
    //     icon: "warning",
    //     buttons: true,
    //     dangerMode: true,
    //   })
    //   .then((willDelete) => {
    //     if (willDelete) {
    //       swal("Poof! Your imaginary file has been deleted!", {
    //         icon: "success",
    //       });
    //     } else {
    //       swal("Your imaginary file is safe!");
    //     }
    //   });
}

function deleteAll(){
    let fetchData = JSON.parse(localStorage.getItem("userNameForLogin"))
    let fetchTodo = JSON.parse(localStorage.getItem("todoList"))
    let findLoginId = fetchData.find(e => e.saveUserId)
    let findUserId = fetchTodo.find(e => e.userId)
    //   console.log()
    // if(findLoginId.saveUserId === findUserId.userId){
        for (let i = 0; i < fetchTodo.length; i++) {
            fetchTodo.splice(i, i);
            console.log(JSON.stringify(fetchTodo) +"check kr " + i) 
        }
    // }

}
function changeStatus(){
             
}
function logOut(){
    swal({
        title: "Logout",
        text: "Are you sure you want to Logout this session?",
        icon: "warning",
        buttons: true,
        dangerMode: true,
      })
      .then((willDelete) => {
        if (willDelete) {
          swal("You have been logged out ", {
            icon: "success",
            timer: 4000,
          });
          localStorage.removeItem("userNameForLogin");
          window.document.location = "index.html";
        } else {
          swal("Seems like, You might have accidently pressed Log out button");
        }
      });
}
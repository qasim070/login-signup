
let users = {
    email: "han@gmail.com",
    username: "han",
    password: "123"
}

function signup(){
    // e.preventDefault();

    let regUsername = document.getElementById("myUsername").value;
    let regEmail = document.getElementById("myEmail").value;
    let regPass = document.getElementById("myPassword").value;
    
    user = {
        username: regUsername,
        email: regEmail,
        pass: regPass

    }
    console.log(user)
    
// window.location('login.html')
}

function login(){
    // let logUsername = document.getElementById("myUsername").value;
    // let logEmail = document.getElementById("myEmail").value;
    // let logPass = document.getElementById("myPassword").value;

    console.log(user.username)
    console.log(users.email);
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

// for(i)


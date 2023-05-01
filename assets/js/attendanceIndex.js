document.querySelector("#form").addEventListener("submit", submitFun);


function submitFun(elme) {
    elme.preventDefault();
    username = document.querySelector("#user_email").value;
    password =  document.querySelector("#user_password").value;

    if (username == "admin@gmail.com" && password ==="admin") {
       
        window.location.href = "../../attendace_student.html";
    
    } else {
        alert("Invalid username or password");
        document.querySelector("#form").reset();
    }

}

let email = document.querySelector("#email");
let password = document.querySelector("#password");
let form = document.querySelector("form");


form.addEventListener("submit", function(dets){
    dets.preventDefault();

    document.querySelector("#emailError").textContent = "";
    document.querySelector("#passwordError").textContent = "";

    let emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    let passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
   

 
    let emailans = emailRegex.test(email.value)
    let passwordans = passwordRegex.test(password.value)
    

    let isvalid = true;

    if (!emailans) {
        document.querySelector("#emailError").textContent = "incoorect email";
        document.querySelector("#emailError").style.display = "initial";
        document.querySelector("form").style.border = "1px solid red"

        isvalid = false;
    }
    
    if (!passwordans) {
        document.querySelector("#passwordError").textContent = "incoorect password";
        document.querySelector("#passwordError").style.display = "initial";
        document.querySelector("form").style.border = "1px solid red"

        isvalid = false;
    }

    if(isvalid) {
        document.querySelector("#successMessage").textContent = "successfullly"
        form.style.border = "1px solid green"
        form.reset();

    }
})

// Rahul@123
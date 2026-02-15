let email = document.querySelector("#email");
let password = document.querySelector("#password");

let form = document.querySelector("form");
form.addEventListener("submit", function(dets){
     dets.preventDefault();

     document.querySelector("#emailerror").textContent = "";
     document.querySelector("#passworderror").textContent = "";

     const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
     const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

     let emailans = emailRegex.test(email.value);
     let passwordans = passwordRegex.test(password.value);

     let isvaild = true;

     if(!emailans){
        document.querySelector("#emailerror").textContent = "Incorrect Email";
        document.querySelector("#emailerror").style.display = "initial";
        isvaild = false;
     }

          if(!passwordans){
        document.querySelector("#passworderror").textContent = "Incorrect password";
        document.querySelector("#passworderror").style.display = "initial";
        isvaild = false;
     }

     if(isvaild){
        document.querySelector("#correction").textContent = "Everything is Correct"
     }
      
});



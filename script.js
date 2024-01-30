 const controler = document.getElementById("controler");
 const userName = document.getElementById("username");
 const password = document.getElementById("password");
 const eyesMoni = document.querySelector(".eye-moni");
 const ReyesMoni = document.querySelector(".right-eye-moni");
 const icon = document.querySelector(".fa-solid");
 let count = 0;
 alert("This Login page Created By Jahid Hasan");
  userName.addEventListener("focus", () =>{
    eyesMoni.style.marginTop = "4px";
    ReyesMoni.style.marginTop= "4px";
  });
  userName.addEventListener("focusout", () =>{
    eyesMoni.style.marginTop = "9.5px";
    ReyesMoni.style.marginTop= "9.5px";
  });
  password.addEventListener("focus", () =>{
     controler.classList.add("active");
  });
  password.addEventListener("focusout", () =>{
    controler.classList.remove("active");
  });

   icon.addEventListener("click", ()=>{
       count++;
     if(password.type === "password"){
        password.type = "text";
        icon.classList.add("fa-eye");
     }else{
        password.type = "password";
        icon.classList.remove("fa-eye");
        controler.classList.add("active")
      }
      
       if(count%2===1){
        password.addEventListener("focus", () =>{
          controler.classList.remove("active");
       });
       }else{
        password.addEventListener("focus", () =>{
          controler.classList.add("active");
       })
    }});
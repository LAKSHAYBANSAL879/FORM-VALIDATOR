let nameError=document.getElementById("name-error");
let numberError=document.getElementById("phone-error");
let emailError=document.getElementById("email-error");
let msgError=document.getElementById("msg-error");
let btn=document.getElementById("sumbit")

function validateName() {
    var name=document.getElementById("name").value;


    if(name.length==0){
        nameError.style.display="flex";
        nameError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Please Enter a name';
        nameError.style.color="red";
        return false;
    }
    else if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.style.display="flex";
        nameError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Write Full Name';
        nameError.style.color="red";
        return false;
    }
   else{
    nameError.style.display="flex"
        nameError.innerHTML='<i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i> Valid ';
        nameError.style.color="green"
        return true;
   }
  
}
function validateNumber() {
    let number=document.getElementById("number").value;
    
        if(number.length==0){
            numberError.style.display="flex";
            numberError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Please Enter number';
            numberError.style.color="red";
            return false;
        }
        if (number.length !==10 || !/^\d{10}$/.test(number)) {
            numberError.style.display="flex";
            numberError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Write 10 digit number';
            numberError.style.color="red";
            return false;
        }
       else{
        numberError.style.display="flex"
            numberError.innerHTML='<i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i> Valid ';
            numberError.style.color="green"
            return true;
       }
    //   numberError.innerHTML="";
    }
    function validateMail() {
        let mail=document.getElementById("mail").value;
        
            if(mail.length==0){
                emailError.style.display="flex";
                emailError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Please Enter email-id';
                emailError.style.color="red";
                return false;
            }
        if (!mail.match(/^[A-za-z\._\-[0-9]+[@][A-Za-z]+[\.][a-z]{2,4}$/)) {
                emailError.style.display="flex";
                emailError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Enter valid email-id';
                emailError.style.color="red";
                return false;
            }
           else{
            emailError.style.display="flex"
                emailError.innerHTML='<i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i> Valid ';
                emailError.style.color="green"
                return true;
           }
    //    emailError.innerHTML="";
        }
        function validateMsg() {
            let msg=document.getElementById("msg").value;
            let required=50;
            let left=required-msg.length;
                if(msg.length==0){
                    msgError.style.display="flex";
                    msgError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Please Enter Your Message';
                    msgError.style.color="red";
                    return false;
                }
            if (msg.length<required) {
                    msgError.style.display="flex";
                    msgError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i>Please Enter'+ left +' words to proceed';
                    msgError.style.color="red";
                    return false;
                }
               else{
                msgError.style.display="flex"
                    msgError.innerHTML='<i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i> Valid ';
                    msgError.style.color="green"
                    return true;
               }
        //    msgError.innerHTML="";
            }

        function validateForm(){
let sumbitError=document.getElementById("fixerror");

            if(!validateName() || !validateNumber() || !validateMail() || !validateMsg()){
                sumbitError.style.display="block"
                sumbitError.innerHTML='<i class="fa-sharp fa-light fa-exclamation fa-xl" style="color: #ff0000;"></i> Please Fix The Error';
                sumbitError.style.color="red";
                setTimeout( function() {sumbitError.style.display='none';},7000);
                return false;
            }
          else{
            var name=document.getElementById("name").value;
    let number=document.getElementById("number").value;
    let msg=document.getElementById("msg").value;
    let mail=document.getElementById("mail").value;

           document.querySelector(".form").innerHTML=' <i class="fa-solid fa-circle-check fa-xl" style="color: #08fd72;"></i>FORM SUMBITTED SUCESSFULLY'
           document.querySelector(".form").style.color="green"
           document.querySelector(".form").style.display="flex"
        localStorage.setItem('FULL-NAME',name);
        localStorage.setItem('PHONE-NUMBER',number)
        localStorage.setItem('EMAIL',mail)
        localStorage.setItem('USER-MESSAGE',msg)
          }
        }
  
        // btn.addEventListener('click',validateForm);
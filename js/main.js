window.addEventListener('load', ()=>{
    var form = document.querySelector('#form');
    form.addEventListener('submit', ()=>{
        //Datos
        var name = document.querySelector('#txtName');
        var phone= document.querySelector('#txtPhone');
        var email = document.querySelector('#txtEmail');
        var password= document.querySelector('#txtPassword');

        //Iconos
        var patron= /^[-\w.%+]{1,64}@(?:[A-Z0-9-]{1,63}\.){1,125}[A-Z]{2,63}$/i;
        var caracterValido=/^[a-z\d\u00C0-\u00ff]+$/i; //Numero y letras
        var iconUser= document.querySelector('.fa-user');
        var iconPhone= document.querySelector('.fa-phone');
        var iconEmail= document.querySelector('.fa-envelope');
        var iconLock= document.querySelector('.fa-lock');
        
        // Message Error
        var errorUser= document.querySelector('.errorUser');
        var errorPhone= document.querySelector('.errorPhone');
        var errorEmail= document.querySelector('.errorEmail');
        var errorPassword= document.querySelector('.errorPassword');


        //Input Placeholder change
        function inputUser(){
            var inputEmail= document.getElementsByName("txtName")[0].placeholder="User is required";
        }
        function inputPhone(){
            var inputEmail= document.getElementsByName("txtPhone")[0].placeholder="Phone is required, example 01234567";
        }
        function inputEmail(){
            var inputEmail= document.getElementsByName("txtEmail")[0].placeholder="Email is required";
        }
        function inputPassword(){
            var inputEmail= document.getElementsByName("txtPassword")[0].placeholder="Password is required";
        }

        // Validate User
        if(name.value=='' || name.value==null){
            name.style.borderBottom = '1px solid red';
            iconUser.style.color='red';
            inputUser();
        }
        else if(!caracterValido.test(name.value)){
            name.style.borderBottom = '1px solid red';
            iconUser.style.color='red';
            errorUser.style.visibility = 'visible';
            errorUser.innerHTML='User not valid, enter only letters and number';
        }
        else if( name.value.length<=5){
            name.style.borderBottom = '1px solid red';
            iconUser.style.color='red';
            errorUser.style.visibility= 'visible';
            errorUser.innerHTML='Very short user, enter 6-29 character';
        }
        else if( name.value.length>=30){
            name.style.borderBottom = '1px solid red';
            iconUser.style.color='red';
            errorUser.style.visibility= 'visible';
            errorUser.innerHTML='Very long user, enter 6-29 character';
        }
        else{
            name.style.borderBottom= '1px solid  rgb(137, 238, 137)';
            iconUser.style.color= ' rgb(137, 238, 137)';
            errorUser.style.visibility= 'hidden';
        }

        // Validate Phone
        if(phone.value=='' || phone.value.length<=0){
            phone.style.borderBottom= '1px solid red';
            iconPhone.style.color= 'red';
            inputPhone();
        }
        else if(phone.value.length<=6){
            phone.style.borderBottom= '1px solid red';
            iconPhone.style.color= 'red';
            errorPhone.style.visibility= 'visible'; 
            errorPhone.innerHTML='Very short phone, enter min 7 character';
        }
        else if(phone.value.length>=9){
            phone.style.borderBottom= '1px solid red';
            iconPhone.style.color= 'red';
            errorPhone.style.visibility= 'visible'; 
            errorPhone.innerHTML='Very long phone, enter max 8 character';
        }
        else if(isNaN(phone.value)){
            phone.style.borderBottom= '1px solid red';
            iconPhone.style.color= 'red';
            errorPhone.style.visibility= 'visible'; 
            errorPhone.innerHTML='Phone no valido';
        }
        else{ 
            phone.style.borderBottom= '1px solid rgb(137, 238, 137)';
            iconPhone.style.color= 'rgb(137, 238, 137)';
            errorPhone.style.visibility= 'hidden'; 
        }

        // Validate email
        if(email.value=='' || email.value==null){
            email.style.borderBottom= '1px solid red';
            iconEmail.style.color= 'red';
            inputEmail();
        }
        else if(!patron.test(email.value)){
            email.style.borderBottom= '1px solid red';
            iconEmail.style.color= 'red';
            errorEmail.style.visibility= "visible";
            inputEmail();
        }
        else{
            email.style.borderBottom= '1px solid rgb(137, 238, 137)';
            iconEmail.style.color= 'rgb(137, 238, 137)';
            errorEmail.style.visibility= "hidden";
        }

        // Validate Password
        if(password.value=='' || password.value==null){
            password.style.borderBottom= '1px solid red';
            iconLock.style.color= 'red';
            inputPassword();
        }
        else if( password.value.length <=4){
            password.style.borderBottom= '1px solid red';
            iconLock.style.color= 'red';
            errorPassword.innerHTML='Password very short, enter 5-29 character';
            errorPassword.style.visibility='visible';
        }
        else if( password.value.length >=30){
            password.style.borderBottom= '1px solid red';
            iconLock.style.color= 'red';
            errorPassword.innerHTML='Password very long, enter 5-29 character';
            errorPassword.style.visibility='visible';
        }
        else{
            password.style.borderBottom= '1px solid  rgb(137, 238, 137)';
            iconLock.style.color='rgb(137, 238, 137)';
            errorPassword.style.visibility= 'hidden';
        }
    });  
});
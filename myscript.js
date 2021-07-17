function nameValidation(){
   
    var check1 = /^[-a-zA-Z-()]+(\s+[-a-zA-Z-()]+)*$/;
    var name1 = document.getElementById("inputName").value
    
    if(name1==""){
        document.getElementById("inputName").focus();
        document.getElementById("nameMessage").innerHTML= "This field is required!";
        return false;
    }else if(check1.test(name1)){
        document.getElementById("nameMessage").innerHTML ="";
        return true;
    }else{
        document.getElementById("inputName").focus();
        document.getElementById("nameMessage").innerHTML ="Enter a valid name";
        return false;
    }    
}

function emailValidation(){
    var pattern = /^[^]+@[^]+\.[a-z]{2,3}$/; 
    var email1 = document.getElementById("InputEmail").value
    if(email1==""){
        document.getElementById("emailMessage").innerHTML= "This field is required!";
        return false;
    }else if(email1.match(pattern)){
        document.getElementById("emailMessage").innerHTML ="";
        return true;
    }else{
        document.getElementById("emailMessage").innerHTML ="Enter a valid email";
        return false;
    }
}

function numberValidation(){
    var val = /^[789]\d{9}$/
    var number1 = document.getElementById("inputphone").value;
    if(number1==""){
        
        document.getElementById("numberMessage").innerHTML = "This feild is required!"
        return false;
    }else if(number1.match(val)){
        
        document.getElementById("numberMessage").innerHTML = ""
        return true
    }else{
        
        document.getElementById("numberMessage").innerHTML = "Enter valid number."
        return false
    }
}



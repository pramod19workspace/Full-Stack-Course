function validation(){
    var name=document.getElementById("name").value;
    var email=document.getElementById("email").value;
    var phone=document.getElementById("phone").value;

    if(name==""){
        document.getElementById("err").innerHTML="Please Enter Name";
        document.getElementById("name").focus();
        return false;
    }

    if(email==""){
        document.getElementById("err").innerHTML="Enter Email ID"
        document.getElementById("email").focus();
        return false;
    }
    else{
        var exp_email1=/^[a-zA-Z0-9\-\_\.]+\@[a-zA-Z0-9\-\_\.]+\.[a-z]{2,4}$/;
        if(!exp_email1.test(email)){
            document.getElementById('err').innerHTML="Enter valid Email ID";
            document.getElementById("email").focus();
            return false;
        }
        else{
            document.getElementById('err').innerHTML="";
        }

    if(phone==""){
        document.getElementById("err").innerHTML="Please Enter Name";
        document.getElementById("name").focus();
        return false;
    }
    else{
        var exp_phone=/^[0-9]{10}$/;
        if(!exp_phone.test(phone)){
            document.getElementById('err').innerHTML="Enter valid Phone Number";
            document.getElementById("phone").focus();
            return false;

        }
        else{
            document.getElementById('err').innerHTML="";

        }
    }
    }

    return true;
}

function sameAddress(){
    var option=document.getElementById("same");

    if(option.checked==true){
        document.getElementById("permanentAddress").value=document.getElementById("currentAddress").value;
    }
    if(option.checked==false){
        document.getElementById("permanentAddress").value="";

    }
}
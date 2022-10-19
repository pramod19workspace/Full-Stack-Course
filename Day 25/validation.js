function validation()
            {

                var name=document.getElementById("name").value;
                var email=document.getElementById("email").value;
                var phone=document.getElementById("phone").value;

                if(name==""){
                    document.getElementById("errorMsg").innerHTML="Enter Name";
                    document.getElementById("name").focus();
                    return false;
                }
                else{
                    var reg_name=/^[a-zA-z]{3}/;
                    if(!reg_name.test(name)){
                        document.getElementById("errorMsg").innerHTML="Enter Proper name";
                        document.getElementById("name").focus();
                        return false;
                    }
                    // else{
                    //     document.getElementById("errorMsg").innerHTML="";
                    // }
                }

                if(email==""){
                    document.getElementById("errorMsg").innerHTML="Enter Email";
                    document.getElementById("email").focus();
                    return false;
                }
                else{
                    var reg_email=/^[a-zA-Z0-9\.\_\@\-]+@[a-zA-z]+\.[a-z]{2,4}/;
                    if(!reg_email.test(email)){
                        document.getElementById("errorMsg").innerHTML="Enter Proper email ID";
                        document.getElementById("email").focus();
                        return false;
                    }
                }

                if(phone==""){
                    document.getElementById("errorMsg").innerHTML="Enter Phone Number";
                    document.getElementById("phone").focus();
                    return false;
                }
                else{
                    var reg_phone=/^[0-9]{10}$/;
                    if(!reg_phone.test(phone)){
                        document.getElementById("errorMsg").innerHTML="Enter Proper Phone Number";
                        document.getElementById("phone").focus();
                        return false;
                    }

                


                return true;

            }
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
function validate()
{
 var  username=document.getElementById("username").value;
 var password=document.getElementById("password").value;

if(username=="user123"&& password=="admin")
{   
    window.location.assign ("pages/index.html");
    alert("login succesfully");
     return false;
}

 else
 {
    alert("login failed");
 }

 }
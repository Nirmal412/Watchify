function showps(){
    var x=document.getElementById('password')
    var y=document.getElementById('confirm-password')
    if(x.type==="password" && y.type==="password")
    {
        x.type="text"
        y.type="text"
    }
    else{
        x.type="password"
        y.type="password"
    }
}
document.addEventListener("DOMContentLoaded", function () {
showPasswordCheckbox.addEventListener("show", function () {
    const showPassword = showPasswordCheckbox.checked;
    if (showPassword) {
      passwordField.type = "text";
      confirmPasswordField.type = "text";
    } else {
      passwordField.type = "password";
      confirmPasswordField.type = "password";
    }
  });
})
// form validation
var forms=document.getElementById('form')
// giving one event
forms.addEventListener('submit',e=>{
    e.preventDefault()
    // reading values from users
    var nm=document.getElementById("name").value
    var ml=document.getElementById("mail").value
    var ps=document.getElementById("pass").value
    var cps=document.getElementById("cpass").value
    // conditions
    if(nm!='name'&&ml!='mail'&&ps!='pass'&&cps!='cpass'&&nm==''&&ml==''&&ps==''&&cps=='')
    {
        alert("pls enter valid data!")
    }
    else{
        if(ps!=cps)
        {
            alert("password and confirm password are not same!")
        }
        else{
            localStorage.setItem('mail',ml)
            localStorage.setItem('pass',ps)
            // session storage
            sessionStorage.setItem('mail',ml)
            sessionStorage.setItem('pass',ps)
            confirm('registerd succesfully!')
            open('./login.html')
        }
    }
}
)

const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("submit-form");



//const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (event) => {
    event.preventDefault();
    const username = loginForm.userName.value;
    const password = loginForm.userPassword.value; 

    if (username === "admin" && password === "admin") {
        alert("로그인 되었습니다.");         
        location.href = 'manage.html';
        
    } 
    else if (username === "eanpkr@naver.com" && password === "3618") {
        alert("로그인 되었습니다.");            
        location.href = 'manage.html';       
    }    
    
    else {
        alert("이메일 주소 및 비밀번호를 확인해 주십시오");
    }
   return false;
});








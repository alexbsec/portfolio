
function typeWriter(text, speed, i) {
  if (i < text.length) 
    document.getElementById("typing-effect").innerHTML += text.charAt(i);
    i++;
    setTimeout(function() {
      typeWriter(text, speed, i)
    }, speed);
}

window.onload = function() {
  var sPath = window.location.pathname;
  var sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  var txt;
  var speed = 70;
  if (sPage == ""){
    txt = 'sudo apt-get install me';
  }
  else if (sPage == "labs"){
    txt = 'PortSwigger Labs';
  }
  else if (sPage == "login") {
    txt = 'Login';
  }
  else if (sPage == "sqli01") {
    txt = 'SQLi Vulnerability in Where Clause Allowing Retrieval of hidden data';
  }
  else if (sPage == "sqli-vulnerability-login-bypass.html") {
    txt = 'SQLi Vulnerability Allowing Login Bypass';
  }
  else if (sPage == "excessive-trust-in-client-side-controls.html") {
    txt = 'Excessive trust in Client-Side Controls';
  }
  else if (sPage == "high-level-logic-flaw.html"){
    txt = 'High-Level Logic Vulnerability';
  }
  else if (sPage == "unprotected-admin-functionality.html") {
    txt = 'Unprotected Admin Functionality';
  }
  else if (sPage == "unprotected-admin-functionality-2.html") {
    txt = 'Unprotected Admin Functionality with Unpredictable URL';
  }
  else if (sPage == "user-role-controlled-by-request-parameter.html") {
    txt = 'User role Controlled by Request Parameter';
  }
  else if (sPage == "user-role-can-be-modified-in-user-profile.html") {
    txt = 'User role can be modified in user profile';
  }
  else if (sPage == "user-id-controlled-by-request-parameter.html") {
    txt = 'User ID controlled by Request Parameter'
  }
  else if (sPage == "user-id-controlled-by-request-parameter-2.html") {
    txt = 'User ID controlled by request parameter, with unpredictable user IDs'
  }
  typeWriter(txt, speed, 0);
};

function dropDown(element) {
  var thisDropdown = element.nextSibling.nextSibling;

  if (!thisDropdown.classList.contains('show')) {
    thisDropdown.classList.replace('hide', 'show');
  }
  else {
    thisDropdown.classList.replace('show', 'hide');
  }


}

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
  else if (sPage == "signup") {
    txt = 'Sign-Up';
  }
  else if (sPage == "projects") {
    txt = 'Projects';
  }
  else if (sPage == "keylogger") {
    txt = 'Remote Server Keylogger';
  }
  else if (sPage == "prevent-sqli") {
    txt = 'Preventing SQL Injection';
  }
  else if (sPage == "encryption-malware") {
    txt = 'Encryption Malware in C++';
  }
  else if (sPage == "sqli01") {
    txt = 'SQLi Vulnerability in Where Clause Allowing Retrieval of hidden data';
  }
  else if (sPage == "sqli02") {
    txt = 'SQLi Vulnerability Allowing Login Bypass';
  }
  else if (sPage == "buslogic01") {
    txt = 'Excessive trust in Client-Side Controls';
  }
  else if (sPage == "buslogic02"){
    txt = 'High-Level Logic Vulnerability';
  }
  else if (sPage == "priv-esc01") {
    txt = 'Unprotected Admin Functionality';
  }
  else if (sPage == "priv-esc02") {
    txt = 'Unprotected Admin Functionality with Unpredictable URL';
  }
  else if (sPage == "priv-esc03") {
    txt = 'User role Controlled by Request Parameter';
  }
  else if (sPage == "priv-esc04") {
    txt = 'User role can be modified in user profile';
  }
  else if (sPage == "priv-esc05") {
    txt = 'User ID controlled by Request Parameter'
  }
  else if (sPage == "priv-esc11") {
    txt = 'URL Based Access Control can be Circumvented'
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
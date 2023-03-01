
function typeWriter(text, speed, i) {
  if (i < text.length) 
    document.getElementById("typing-effect").innerHTML += text.charAt(i);
    i++;
    setTimeout(function() {
      typeWriter(text, speed, i)
    }, speed);
}

window.onload = function() {
  const pageTextMap = {
    "": "sudo apt-get install me",
    "labs": "PortSwigger Labs",
    "login": "Login",
    "signup": "Sign-Up",
    "projects": "Projects",
    "encryption-projects": "Encryption Projects",
    "one-time-pad-encryption": "One-time Pad Encryption Algorithm in C++",
    "crib-dragging-attacks": "Crib-dragging attack",
    "keylogger": "Remote Server Keylogger",
    "prevent-sqli": "Preventing SQL Injection",
    "encryption-malware": "Encryption Malware in C++",
    "sqli01": "SQLi Vulnerability in Where Clause Allowing Retrieval of hidden data",
    "sqli02": "SQLi Vulnerability Allowing Login Bypass",
    "buslogic01": "Excessive trust in Client-Side Controls",
    "buslogic02": "High-Level Logic Vulnerability",
    "priv-esc01": "Unprotected Admin Functionality",
    "priv-esc02": "Unprotected Admin Functionality with Unpredictable URL",
    "priv-esc03": "User role Controlled by Request Parameter",
    "priv-esc04": "User role can be modified in user profile",
    "priv-esc05": "User ID controlled by Request Parameter",
    "priv-esc11": "URL Based Access Control can be Circumvented",
    "pentests": "Penetration Test Labs",
    "pwnlab": "Pwnlab: Init",
    "kioptrix-2": "Kioptrix level 2",
    "fristleaks-13": "FristLeaks 1.3",
    "node": "Node",
    "vancouver2018": "Vancouver 2018 Workshop"
  };
  const sPath = window.location.pathname;
  const sPage = sPath.substring(sPath.lastIndexOf('/') + 1);
  const txt = pageTextMap[sPage] || "Page Not Found";
  const speed = 70;
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


document.querySelectorAll(".nav-link").forEach(link => {
  link.addEventListener("mousemove", e => {
    const rect = e.target.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    e.target.style.setProperty("--x", `${x}px`);
    e.target.style.setProperty("--y", `${y}px`);
  });
});
const navLinks = document.querySelectorAll('.navbar-nav .nav-link, .navbar-brand');

function scaleDown(e) {
  e.target.style.transform = 'scale(0.85)';
}

function scaleUp(e) {
  e.target.style.transform = '';
}

navLinks.forEach(link => {
  link.addEventListener('mousedown', scaleDown);
  link.addEventListener('mouseup', scaleUp);
  link.addEventListener('mouseleave', scaleUp);
});

document.querySelectorAll(".nav-link, .navbar-brand").forEach(function(item) {
  item.addEventListener("mouseup", function() {
    item.style.transform = "scale(1)";
  });
});
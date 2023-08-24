
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
    "xss01": "Reflected XSS into HTML context with nothing encoded",
    "xss02": "Stored XSS into HTML context with nothing encoded",
    "xss03": "DOM XSS in document.write sink using source location.search",
    "xss04": "DOM XSS in innerHTML sink using source location.search",
    "xss05": "DOM XSS in jQuery anchor href attribute sink using location.search source",
    "xss06": "DOM XSS in jQuery selector sink using a hashchange event",
    "xss07": "Reflected XSS into attribute with angle brackets HTML-encoded",
    "xss08": "Stored XSS into anchor href attribute with double quotes HTML-encoded",
    "xss09": "Reflected XSS into a JavaScript string with angle brackets HTML encoded",
    "xss11": "DOM XSS in document.write sink using source location.search inside a select element",
    "xss12": "DOM XSS in AngularJS expression with angle brackets and double quotes HTML-encoded",
    "xss13": "Exploiting XSS to perform CSRF",
    "xss14": "Exploiting cross-site scripting to steal cookies",
    "vancouver2018": "Vancouver 2018 Workshop",
    "malware-dev": "Malware Development/Analysis",
    "worm-malware": "Local Worm Malware",
    "topics": "Cybersecurity Topics",
    "intro": "Intro to the Cyber World",
    "offensive": "Intro to Offensive Security",
    "defensive": "Intro to Defensive Security",
    "network": "Intro to Networking",
    "web-fundamentals": "Intro to the Web",
    "network-exploitation": "Network Exploitation Basics",
    "ctfs": "CTFs",
    "smb-exploitation": "TryHackMe - Exploiting SMB - Network Services Room",
    "telnet-exploitation": "TryHackMe - Exploiting Telnet - Network Services Room",
    "ftp-exploitation": "TryHackMe - Exploiting FTP - Network Services Room",
    "nfs-exploitation": "TryHackMe - Exploiting NFS - Network Services 2 Room",
    "smtp-exploitation": "TryHackMe - Exploiting SMTP - Network Services 2 Room",
    "mysql-exploitation": "TryHackMe - Exploiting MySQL - Network Services 2 Room",
    "burpsuite": "Burpsuite Basics",
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
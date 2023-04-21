//CONTENT COPY PROTECTION SCRIPT
// (A) PREVENT CONTEXT MENU FROM OPENING
document.addEventListener("contextmenu", evt => evt.preventDefault(), false);

// (B) PREVENT CLIPBOARD COPYING
document.addEventListener("copy", evt => {
    // (B1) CHANGE THE COPIED TEXT IF YOU WANT
    evt.clipboardData.setData("text/plain", "Copying is not allowed on this webpage");
   
    // (B2) PREVENT THE DEFAULT COPY ACTION
    evt.preventDefault();
  }, false);


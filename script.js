function generateCaptcha() {
  const character = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890"
  let captcha = '';

  for (let i = 0; i < 6; i++) {
    captcha += character.charAt(Math.floor(Math.random() * character.length));
    var captchabox = document.getElementById("captcha")
    captchabox.textContent = captcha;
  }
}

function validateCaptcha() {

  const captcha = document.getElementById("captcha").textContent;
  const userinput = document.getElementById("userInput").value;

  if (userinput === captcha) {

    alert("captcha is correct")
  }

  else {

    alert("captcha is wrong, please try again later")
  }

  document.getElementById("userInput").value = "";
  generateCaptcha();

}

window.onload =
  generateCaptcha;

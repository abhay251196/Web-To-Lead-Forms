let captchaChecked = false;
function beforeSubmit(event) {
    if(captchaChecked){
  let outputdate = document.querySelector(".outputdate");
  let inputdate = document.querySelector(".inputdate");
  console.log(inputdate.value);

  let formatteddate = new Date(inputdate.value).toLocaleDateString("en-IN");

  outputdate.value = formatteddate;
    }
    else{
        alert("Please confirm you are not a robot and check the reCaptcha box!");
        event.preventdefault();
    }
}

function timestamp() {
  var response = document.getElementById("g-recaptcha-response");
  if (response == null || response.value.trim() == "") {
    var elems = JSON.parse(
      document.getElementsByName("captcha_settings")[0].value
    );
    elems["ts"] = JSON.stringify(new Date().getTime());
    document.getElementsByName("captcha_settings")[0].value =
      JSON.stringify(elems);
  }
}
setInterval(timestamp, 500);

function isCaptchaCheck(){
    captchaChecked = true;
}
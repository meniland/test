function ValidateData() {
    let userNameElement = document.getElementById("userName");
    var mailformat = /^([a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+)@([a-zA-Z0-9-])+.(?:\.[a-zA-Z0-9-]+)$/;

    userNameElement.style.borderColor = "";

    if (mailformat.test(!userNameElement.value)) {
        userNameElement.style.borderColor = "red";
        return;
    }

    let passwordElement = document.getElementById("psw");

    passwordElement.style.borderColor = "";

    if(passwordElement.value.length < 6 || passwordElement.value.length > 10){
        passwordElement.style.borderColor = "red";
        return;
    }

    let phoneNumberElement = document.getElementById("phoneNumber");

    // let phoneFormat = /^([0-9-]{3})+-([0-9-]+{7})$/;

    phoneNumberElement.style.borderColor = "";

    let makaf = phoneNumberElement.value.indexOf("-");

    if(makaf != 3){
        phoneNumberElement.style.borderColor = "red";
        return;

    }

    // if(phoneFormat.test(!phoneNumberElement.value)){
    //     phoneNumberElement.style.borderColor = "red";
    //     return;
    // }

}

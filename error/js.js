function validNumber() {
    let userNumber = document.getElementById("userNumber");

    userNumber.style.borderColor = "";

    try {
        if (userNumber.value.length != 4) {
            userNumber.style.borderColor = "red";
            throw new Error("the num must be 4 digits");
        }


        let confirmEvenNumber = userNumber.value.indexOf("-");

        if (confirmEvenNumber != -1) {
            userNumber.style.borderColor = "red";
        }


        let num = userNumber.value;
        let set = new Set();
        while (num > 0) {
            let rightDigit = num % 10;
            set.add(rightDigit);
            num = Math.trunc(num / 10);
        }
        if (set.size < 4) {
            userNumber.style.borderColor = "red";
        }
    }
    catch (e) {
        // alert(e.message);
       let errorMessage = document.getElementById("errorMessage");
       errorMessage.innerHTML = "the num must be 4 digits";
    }
}
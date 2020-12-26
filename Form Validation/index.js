const email= document.getElementById("mail");

email.addEventListener('input', (e) => {
    if (email.validity.typeMismatch) {
        email.setCustomValidity("I Am Expecting An Email!!!!11!!");
    } else {
        email.setCustomValidity("");
    }
});
const nameInput = document.getElementById("contact-name")
const emailInput = document.getElementById("email")
const objectInput = document.getElementById("object")
const messageInput = document.getElementById("message")
const statusMessageDiv = document.getElementById("status-message-div")
const statusMessage = document.getElementById("status-message")

document.getElementById('emailForm').addEventListener('submit', function(event) {
    event.preventDefault();

    if (!this.checkValidity()) {
        this.reportValidity();
        return;
    }

    let params = {
        contactName: nameInput.value,
        email: emailInput.value,
        object: objectInput.value,
        message: messageInput.value,
    };

    emailjs.send("service_o5ny6d8", "template_74gqjbj", params)
        .then(() => {
            nameInput.value = '';
            emailInput.value = '';
            objectInput.value = '';
            messageInput.value = '';
            statusMessageDiv.classList.remove('d-none');
            statusMessage.textContent = "Your email has been sent successfully!";
            statusMessage.style = "color: #CCFF00; margin-top: 10px";
        })
        .catch((error) => {
            statusMessageDiv.classList.remove('d-none');
            statusMessage.textContent = "A problem has occurred, please try again.";
            statusMessage.style = "color:rgb(170, 40, 0); margin-top: 10px";
        });
});
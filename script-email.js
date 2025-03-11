const nameInput = document.getElementById("contact-name")
const emailInput = document.getElementById("email")
const objectInput = document.getElementById("object")
const messageInput = document.getElementById("message")
const form = document.getElementById("emailForm")

function sendEmail () {
    let params = {
        contactName: nameInput.value,
        email: emailInput.value,
        object: objectInput.value,
        message: messageInput.value,
    }
    
    document.getElementById('emailForm').addEventListener('submit', function(event) {
        if (!this.checkValidity()) {
            event.preventDefault(); // Empêche l'envoi du formulaire
            // Optionnel: Affiche un message d'erreur personnalisé ou déclenche le comportement de validation natif
            this.reportValidity(); // Affiche les messages d'erreur du navigateur
        } else {
            let statusMessageDiv = document.createElement("div")
            let statusMessage = document.createElement("p")
            statusMessage.classList.add("text-center")
            emailjs.send("service_3q9tggx", "template_ddwe1kw", params)
                .then(() => {
                    nameInput.value = '';
                    emailInput.value = '';
                    objectInput.value = '';
                    messageInput.value = '';
                    statusMessage.textContent = "Your email has been sent successfully!"
                    statusMessage.style = "color: #CCFF00; margin-top: 10px"
                    statusMessageDiv.appendChild(statusMessage)
                    form.appendChild(statusMessageDiv)
                })
                .catch((error) => {
                    statusMessage.textContent = "A problem has occurred, please try again."
                    statusMessage.style = "color:rgb(170, 40, 0); margin-top: 10px"
                });
        }
    })
};

(function () {
    emailjs.init("TQerHA4eynLXyyq9_");
})();

function sendEmail(event) {
    event.preventDefault();
    const form = event.target;

    const templateParams = {
        name: form.name.value,
        email: form.email.value,
        subject: form.subject.value,
        message: form.message.value,
    };

    emailjs.send('service_bccr4ub', 'template_ikpj5sl', templateParams)
        .then((response) => {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            form.reset();
        }, (error) => {
            console.error('FAILED...', error);
            alert('Failed to send message: ' + JSON.stringify(error));
        });
}

document.getElementById('contactForm').addEventListener('submit', sendEmail);  
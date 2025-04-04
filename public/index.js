// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.querySelector('.contact-form form');
    
    if (contactForm) {
        contactForm.addEventListener('submit', function(event) {

            event.preventDefault();
            

            const formData = new FormData(contactForm);
            

            fetch(contactForm.action, {
                method: 'POST',
                body: formData,
                headers: {
                    'Accept': 'application/json'
                }
            })
            .then(response => {
                if (response.ok) {

                    return response.json();
                } else {

                    throw new Error('Form submission failed');
                }
            })
            .then(data => {

                displayMessage('Thank you! Your message has been sent successfully.', 'success');
                

                contactForm.reset();
            })
            .catch(error => {

                displayMessage('Oops! There was a problem submitting your form. Please try again.', 'error');
                console.error('Error:', error);
            });
        });
    }
    

    function displayMessage(message, type) {

        const messageElement = document.createElement('div');
        messageElement.className = `form-message ${type}`;
        messageElement.textContent = message;
        
        contactForm.parentNode.insertBefore(messageElement, contactForm.nextSibling);
        
        setTimeout(() => {
            messageElement.remove();
        }, 5000);
    }
});
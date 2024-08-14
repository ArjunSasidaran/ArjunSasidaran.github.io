document.addEventListener("DOMContentLoaded", function() {
    // Select all navigation links with a hash in the href
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); 
            
            // Get the target section's ID from the href
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Scroll to the target section with smooth behavior
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

document.getElementById('contact-form').addEventListener('submit', function(event) {

    event.preventDefault();
    var form = event.target;
    var formData = new FormData(form);

    fetch(form.action, {
        method: form.method,
        body: formData,
        headers: {
            'Accept': 'application/json'
        }
    }).then(response => {
        if (response.ok) {
            var messageElement = document.getElementById('form-message');
            messageElement.className = 'form-message success';
            messageElement.innerText = 'Message sent successfully!';
            messageElement.style.display = 'block'; // Show the message
            form.reset(); // Clear the form fields
        } else {
            return response.json().then(data => {
                throw new Error(data.error || 'Error sending message.');
            });
        }
    }).catch(error => {
        var messageElement = document.getElementById('form-message');
        messageElement.className = 'form-message error';
        messageElement.innerText = `Error: ${error.message}`;
        messageElement.style.display = 'block'; // Show the message
    });

});






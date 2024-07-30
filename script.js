document.addEventListener("DOMContentLoaded", function() {
    // Select all navigation links with a hash in the href
    const links = document.querySelectorAll('a[href^="#"]');
    
    // Add click event listener to each link
    links.forEach(link => {
        link.addEventListener('click', function(event) {
            event.preventDefault(); // Prevent the default anchor behavior
            
            // Get the target section's ID from the href
            const targetId = this.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            
            // Scroll to the target section with smooth behavior
            targetSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
});

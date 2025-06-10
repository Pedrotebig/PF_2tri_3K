document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting the default way
    
    const name = event.target.querySelector('input[type="text"]').value;
    const email = event.target.querySelector('input[type="email"]').value;
    const message = event.target.querySelector('textarea').value;
    
    if (name && email && message) {
        alert(`Thank you, ${name}! We will respond to your message shortly.`);
        // Here you can add an actual form submission or AJAX functionality
    } else {
        alert("Please fill out all fields.");
    }
});

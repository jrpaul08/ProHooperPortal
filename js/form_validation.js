$(document).ready(function() {
    $("#contactForm").submit(function(e) {
        // Prevent the form from submitting
        e.preventDefault();

        // Validate form fields
        var name = $("#name").val();
        var email = $("#email").val();
        var message = $("#message").val();

        if (name.trim() === "") {
            alert("Please enter your name.");
            return;
        }

        if (email.trim() === "") {
            alert("Please enter your email.");
            return;
        }

        // Simple email validation using regex
        var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert("Please enter a valid email address.");
            return;
        }

        if (message.trim() === "") {
            alert("Please enter a message.");
            return;
        }

        // Show success message
        $("#successMessage").show();
    });
});

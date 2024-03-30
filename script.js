document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
    var mailtoLink = 'mailto:rc8807928@gmail.com?subject=' + encodeURIComponent('Contact Form Submission') + '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\nMessage: ' + message);
    window.location.href = mailtoLink;
});

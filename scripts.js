document.getElementById('contact-form').addEventListener('submit', function(event) {
    var nameInput = document.getElementById('name');
    var emailInput = document.getElementById('email');
    var messageInput = document.getElementById('message');

    if (!nameInput.value || !emailInput.value || !messageInput.value) {
      event.preventDefault(); // Evitar el envío del formulario
      alert('Por favor, complete todos los campos antes de enviar el formulario.');
    }
    });
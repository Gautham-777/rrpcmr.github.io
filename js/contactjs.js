// Get the contact form element
const contactForm = document.querySelector('form');

// Add event listener for form submission
contactForm.addEventListener('submit', (event) => {
  event.preventDefault(); // Prevent the default form submission behavior

  // Get form input values
  const name = contactForm.elements.name.value;
  const email = contactForm.elements.email.value;
  const message = contactForm.elements.message.value;

  // Perform form validation
  if (name === '' || email === '' || message === '') {
    alert('Please fill in all the fields.');
    return;
  }

  // Create an object with the form data
  const formData = {
    name,
    email,
    message
  };

  // Perform an AJAX request to submit the form data
  // Replace the URL with your server-side endpoint that handles form submissions
  const url = '/submit-contact';
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(formData)
  };

  fetch(url, options)
    .then(response => {
      if (response.ok) {
        alert('Form submitted successfully!');
        contactForm.reset(); // Reset the form after successful submission
      } else {
        alert('An error occurred. Please try again.');
      }
    })
    .catch(error => {
      console.error('Error:', error);
      alert('An error occurred. Please try again.');
    });
});

// Contact Form Validation & Submission
document.addEventListener('DOMContentLoaded', function() {
  const form = document.getElementById('contactForm');

  if (form) {
    form.addEventListener('submit', function(event) {
      event.preventDefault();

      let isValid = true;

      // Get form fields
      const fname = document.getElementById('fname');
      const lname = document.getElementById('lname');
      const phone = document.getElementById('phone');
      const email = document.getElementById('email');

      // Reset previous validation states
      [fname, lname, phone, email].forEach(function(field) {
        field.classList.remove('is-invalid');
        field.style.borderColor = '#ddd';
      });

      // Validate first name
      if (!fname.value.trim()) {
        fname.classList.add('is-invalid');
        fname.style.borderColor = '#c23616';
        isValid = false;
      }

      // Validate last name
      if (!lname.value.trim()) {
        lname.classList.add('is-invalid');
        lname.style.borderColor = '#c23616';
        isValid = false;
      }

      // Validate phone
      var phonePattern = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
      if (!phone.value.trim() || !phonePattern.test(phone.value.trim())) {
        phone.classList.add('is-invalid');
        phone.style.borderColor = '#c23616';
        isValid = false;
      }

      // Validate email
      var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        email.classList.add('is-invalid');
        email.style.borderColor = '#c23616';
        isValid = false;
      }

      // If valid, submit via Formspree
      if (isValid) {
        var formData = new FormData(form);

        fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: {
            'Accept': 'application/json'
          }
        }).then(function(response) {
          if (response.ok) {
            form.style.display = 'none';
            document.getElementById('formSuccess').style.display = 'block';
          } else {
            alert('There was an issue submitting the form. Please try again or email us directly.');
          }
        }).catch(function(error) {
          alert('There was a network error. Please try again or email us directly.');
        });
      }
    });

    // Real-time validation feedback - clear errors on input
    var fields = ['fname', 'lname', 'phone', 'email'];
    fields.forEach(function(fieldId) {
      var field = document.getElementById(fieldId);
      if (field) {
        field.addEventListener('input', function() {
          this.classList.remove('is-invalid');
          this.style.borderColor = '#ddd';
        });
      }
    });
  }
});

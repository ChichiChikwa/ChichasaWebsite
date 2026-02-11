// Contact Form Validation
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
      const phonePattern = /^[\+]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;
      if (!phone.value.trim() || !phonePattern.test(phone.value.trim())) {
        phone.classList.add('is-invalid');
        phone.style.borderColor = '#c23616';
        isValid = false;
      }

      // Validate email
      const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      if (!email.value.trim() || !emailPattern.test(email.value.trim())) {
        email.classList.add('is-invalid');
        email.style.borderColor = '#c23616';
        isValid = false;
      }

      // If valid, show success message
      if (isValid) {
        form.style.display = 'none';
        document.getElementById('formSuccess').style.display = 'block';
      }
    });

    // Real-time validation feedback - clear errors on input
    const fields = ['fname', 'lname', 'phone', 'email'];
    fields.forEach(function(fieldId) {
      const field = document.getElementById(fieldId);
      if (field) {
        field.addEventListener('input', function() {
          this.classList.remove('is-invalid');
          this.style.borderColor = '#ddd';
        });
      }
    });
  }
});

<script>
  document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedbackForm');
    const successMessage = document.getElementById('formSuccess');

    if (form) {
      form.addEventListener('submit', function (e) {
        e.preventDefault(); // Prevent actual form submission
        form.reset();
        successMessage.style.display = 'block';
      });
    }
  });
</script>
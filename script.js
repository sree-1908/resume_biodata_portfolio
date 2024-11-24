document.addEventListener('DOMContentLoaded', function() {
    // Initialize Typed.js
    var options = {
        strings: ["Web Designer", "Data Analyst", "Web Developer"], // Array of job titles
        typeSpeed: 50, // Speed at which each character is typed (ms)
        backSpeed: 30, // Speed at which the text is deleted (ms)
        backDelay: 1000, // Delay before starting to delete (ms)
        startDelay: 500, // Delay before starting to type (ms)
        loop: true, // Loop the typing animation
        showCursor: false // Hide the cursor
    };

    // Create a new instance of Typed
    var typed = new Typed("#typed-job-title", options); // Attach to the span with id "typed-job-title"
});
document.addEventListener('DOMContentLoaded', function () {
  const slider = document.querySelector('.projects-slider');
  let isDown = false;
  let startX;
  let scrollLeft;

  slider.addEventListener('mousedown', (e) => {
    isDown = true;
    slider.classList.add('active');
    startX = e.pageX - slider.offsetLeft;
    scrollLeft = slider.scrollLeft;
  });
  slider.addEventListener('mouseleave', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mouseup', () => {
    isDown = false;
    slider.classList.remove('active');
  });
  slider.addEventListener('mousemove', (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - slider.offsetLeft;
    const walk = (x - startX) * 3; //scroll-fast
    slider.scrollLeft = scrollLeft - walk;
  });
});
function downloadCV() {
  function forceDownloadCV() {
    var link = document.createElement('a');
    link.href = 'assets/sreeja_cv1.pdf'; // Path to your CV file
    link.download = 'Sreeja_CV'; // File name for the downloaded file
    link.click();
  }
}
function sendContactForm() {
  // Get form values using their IDs
  var name = document.getElementById('name').value;
  var email = document.getElementById('email').value;
  var phone = document.getElementById('phone').value;
  var message = document.getElementById('message').value;

  // Simple validation to check if any field is empty
  if (name === "" || email === "" || phone === "" || message === "") {
    alert("Please fill in all the fields.");
    return; // Stop the function if any field is empty
  }

  // If all fields are filled, you can process the form (e.g., send the data to a server)
  // For now, we'll just log the values to the console
  console.log("Form submitted!");
  console.log("Name: " + name);
  console.log("Email: " + email);
  console.log("Phone: " + phone);
  console.log("Message: " + message);

  // Display a success message or perform further actions
  alert("Thank you for reaching out! We will get back to you soon.");
  
  // Optionally, reset the form after submission
  document.getElementById('name').value = '';
  document.getElementById('email').value = '';
  document.getElementById('phone').value = '';
  document.getElementById('message').value = '';
}

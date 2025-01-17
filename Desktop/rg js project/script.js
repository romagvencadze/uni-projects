let currentIndex = 0;

function showSlide(index) {
  const slides = document.querySelector('.slides');
  const dots = document.querySelectorAll('.dot');
  const totalSlides = slides.children.length;

  // Wrap around if the index goes out of bounds
  if (index >= totalSlides) {
    currentIndex = 0;
  } else if (index < 0) {
    currentIndex = totalSlides - 1;
  } else {
    currentIndex = index;
  }

  const offset = -currentIndex * 100;
  slides.style.transform = `translateX(${offset}%)`;

  // Update active dot
  dots.forEach((dot, idx) => {
    if (idx === currentIndex) {
      dot.classList.add('active');
    } else {
      dot.classList.remove('active');
    }
  });
}

// Create dots dynamically for all slides and ensure they are on every slide
function createDots() {
  const slides = document.querySelector('.slides');
  const dotsContainer = document.querySelector('.dots');
  const totalSlides = slides.children.length;

  // Clear any existing dots before adding
  dotsContainer.innerHTML = '';

  for (let i = 0; i < totalSlides; i++) {
    const dot = document.createElement('span');
    dot.classList.add('dot');
    dot.addEventListener('click', () => showSlide(i)); // Add click event for each dot
    dotsContainer.appendChild(dot);
  }

  // Ensure the first dot is active initially and show the first slide
  showSlide(currentIndex);
}

// Initialize the slider
createDots();

// Auto-play slider (optional)
setInterval(() => {
  showSlide(currentIndex + 1);
}, 5000);





// Select buttons and content sections
const filmebiButton = document.querySelector('.filmebi');
const seansebiButton = document.querySelector('.seansebi');
const filmebiContent = document.querySelector('.filmebi-content');
const seansebiContent = document.querySelector('.seansebi-content');

// Function to reset button styles and hide content
function resetButtonStyles() {
    // Reset button styles
    filmebiButton.classList.remove('active');
    filmebiButton.classList.add('inactive');
    seansebiButton.classList.remove('active');
    seansebiButton.classList.add('inactive');

    // Hide both content sections
    filmebiContent.style.display = 'none';
    seansebiContent.style.display = 'none';
}

// Function to show "ფილმები" content
function showFilmebiContent() {
    resetButtonStyles();
    filmebiButton.classList.add('active');
    filmebiButton.classList.remove('inactive');
    filmebiContent.style.display = 'block';
}

// Function to show "სეანსები" content
function showSeansebiContent() {
    resetButtonStyles();
    seansebiButton.classList.add('active');
    seansebiButton.classList.remove('inactive');
    seansebiContent.style.display = 'block';
}

// Event listeners for buttons
filmebiButton.addEventListener('click', showFilmebiContent);
seansebiButton.addEventListener('click', showSeansebiContent);

// Set default selected button and page on load
document.addEventListener('DOMContentLoaded', () => {
    showFilmebiContent(); // "ფილმები" content is shown by default
});







document.addEventListener('DOMContentLoaded', function () {
  const images = document.querySelectorAll('.a, .b, .c');
  let overlayUsageCount = 0; // Counter to track overlay usage
  const maxOverlayUsage1 = 7; // Maximum times the first overlay can be used
  const maxOverlayUsage2 = 16; // Maximum times the first two overlays combined can be used

  images.forEach(image => {
    let overlay; // Define the overlay variable based on the usage count
    if (overlayUsageCount < maxOverlayUsage1) {
      overlay = document.createElement('div');
      overlay.classList.add('overlay');
    } else if (overlayUsageCount < maxOverlayUsage2) {
      overlay = document.createElement('div');
      overlay.classList.add('overlay1');
    } else {
      overlay = document.createElement('div');
      overlay.classList.add('overlay2');
    }

    // Create buttons
    const youtubeButton = document.createElement('button');
    youtubeButton.innerText = 'ტრეილერი';
    youtubeButton.addEventListener('click', function () {
      window.open('https://www.youtube.com', '_blank');
    });

    const moviesButton = document.createElement('button');
    moviesButton.innerText = 'სრულად';
    moviesButton.addEventListener('click', function () {
      window.location.href = 'htmlholder/movie.html';
    });

    overlay.appendChild(youtubeButton);
    overlay.appendChild(moviesButton);
    image.parentNode.insertBefore(overlay, image.nextSibling);

    // Show overlay when hovering over the image
    image.addEventListener('mouseenter', function () {
      overlay.classList.add('active');
    });

    // Hide overlay when leaving the image and not hovering over the buttons
    image.addEventListener('mouseleave', function () {
      setTimeout(() => {
        if (!overlay.matches(':hover')) {
          overlay.classList.remove('active');
        }
      }, 100);
    });

    // Prevent overlay from hiding when hovering over buttons
    overlay.addEventListener('mouseenter', function () {
      overlay.classList.add('active');
    });

    overlay.addEventListener('mouseleave', function () {
      overlay.classList.remove('active');
    });

    // Add hover effects to buttons
    const buttons = overlay.querySelectorAll('button');
    buttons.forEach(button => {
      button.addEventListener('mouseenter', function () {
        button.style.borderColor = 'red'; // Highlight border when button is hovered
      });
      button.addEventListener('mouseleave', function () {
        button.style.borderColor = '#ffffff54'; // Reset border when hover ends
      });
    });

    overlayUsageCount++; // Increment the counter
  });
});



document.querySelector('.hamburger').addEventListener('click', function() {
  this.classList.toggle('active');
  document.querySelector('.menu').classList.toggle('active');
});






let currentLang
document.addEventListener("DOMContentLoaded", () => {
    currentLang = "ge"
});

function changeLanguage() {
    fetch('translator.json').then((resp) => {
        return resp.json()
    }).then((data) => {
        switch (currentLang) {
            case "ge":
                const enKeys = Object.entries(data.en)
                for (let i = 0; i < enKeys.length; i++) {
                    try {
                        let element = document.getElementById(enKeys[i][0])

                        element.textContent = enKeys[i][1]
                    } catch (Exception) {
                        let elements = document.getElementsByClassName(enKeys[i][0])
                        for (let j = 0; j < elements.length; j++) {
                            elements[j].textContent = enKeys[i][1];
                        }
                    }

                }
                currentLang = "en"
                break
            case "en":
                const kaKeys = Object.entries(data.ge)
                for (let i = 0; i < kaKeys.length; i++) {
                    try {
                        let element = document.getElementById(kaKeys[i][0])

                        element.textContent = kaKeys[i][1]
                    } catch (Exception) {
                        let elements = document.getElementsByClassName(kaKeys[i][0])
                        for (let j = 0; j < elements.length; j++) {
                            elements[j].textContent = kaKeys[i][1];
                        }
                    }
                }
                currentLang = "ge"
                break
        }
    })


}





















document.addEventListener('DOMContentLoaded', () => {
  const modal = document.getElementById('registrationModal'); // Modal element
  const openModalButton = document.querySelector('.but2'); // Button to open modal
  const closeModal = document.querySelector('.close'); // Close button in modal

  // Open modal when the button with class "but2" is clicked
  openModalButton.addEventListener('click', () => {
    modal.style.display = 'block';
  });

  // Close modal when the "close" button is clicked
  closeModal.addEventListener('click', () => {
    modal.style.display = 'none';
  });

  // Close modal if user clicks outside of the modal content
  window.addEventListener('click', (event) => {
    if (event.target === modal) {
      modal.style.display = 'none';
    }
  });

  // Handle form submission with validation
  const registrationForm = document.getElementById('registrationForm');
  registrationForm.addEventListener('submit', (e) => {
    e.preventDefault(); // Prevent default form submission

    // Get form inputs
    const firstName = document.getElementById('firstName').value.trim();
    const lastName = document.getElementById('lastName').value.trim();
    const email = document.getElementById('email').value.trim();
    const phone = document.getElementById('phone').value.trim();
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;

    // Validate inputs
    if (!firstName || !lastName || !email || !phone || !password || !confirmPassword) {
      alert('All fields are required.');
      return;
    }

    if (!validateEmail(email)) {
      alert('Please enter a valid email address.');
      return;
    }

    if (!validatePhone(phone)) {
      alert('Phone number must start with "5" and be exactly 9 digits long.');
      return;
    }

    if (password !== confirmPassword) {
      alert('Passwords do not match.');
      return;
    }

    if (password.length < 6) {
      alert('Password must be at least 6 characters long.');
      return;
    }

    // If all validations pass, show success message and close modal
    alert('Registration successful!');
    modal.style.display = 'none'; // Close the modal on successful submission
  });

  // Helper function to validate email format
  function validateEmail(email) {
    const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    return re.test(email);
  }

  // Helper function to validate phone number format
  function validatePhone(phone) {
    const re = /^5\d{8}$/;
    return re.test(phone);
  }
});








// Get elements
const loginModal = document.getElementById('loginModal');
const shesvlaButton = document.getElementById('shesvla');
const closeButton = document.getElementById('closeModal');
const registerButton = document.getElementById('openRegister');
const forgotPasswordLink = document.getElementById('forgotPassword');

// Show the modal when the 'შესვლა' button is clicked
shesvlaButton.addEventListener('click', () => {
  loginModal.style.display = 'block';
});

// Hide the modal when the close button is clicked
closeButton.addEventListener('click', () => {
  loginModal.style.display = 'none';
});

// Hide the modal when clicking outside the modal content
window.addEventListener('click', (event) => {
  if (event.target === loginModal) {
    loginModal.style.display = 'none';
  }
});

// Redirect to the registration page when 'რეგისტრაცია' button is clicked
registerButton.addEventListener('click', () => {
  window.location.href = 'registration-page-url';  // Replace with your actual registration page URL
});

// Handle the 'პაროლის აღდგენას' link click
forgotPasswordLink.addEventListener('click', (event) => {
  event.preventDefault(); // Prevent default link behavior
  alert('Open the password recovery process here.');
  loginModal.style.display = 'none';
});


registerButton.addEventListener('click', () => {
  window.location.href = '/register';  // Example URL for the registration page
});

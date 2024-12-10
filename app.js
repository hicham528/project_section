let navbare = document.querySelector(".navbare");
let close_navbare = document.getElementById("close_navbare");
let open_navbare = document.getElementById("open_navbare");
let change_mode = document.getElementById("change_mode");

// Navbar toggle open/close
open_navbare.onclick = () => {
  navbare.classList.add("new-navbare");
  open_navbare.style.display = "none";
  change_mode.style.display = "none";
};
close_navbare.onclick = () => {
  navbare.classList.remove("new-navbare");
  open_navbare.style.display = "block";
  change_mode.style.display = "block";
};

// Dark mode toggle
change_mode.onclick = () => {
  document.body.classList.toggle("dark_mode");
  if (document.body.classList.contains("dark_mode")) {
    change_mode.classList.replace("fa-moon", "fa-sun");
  } else {
    change_mode.classList.replace("fa-sun", "fa-moon");
  }
};

// Progress bar animation
let html_experience = document.querySelectorAll(".doawnloude_content .html_experience");
let Experience_section = document.getElementById("Experience_section");

window.onscroll = () => {
  if (window.scrollY >= Experience_section.offsetTop - window.innerHeight / 2) {
    html_experience.forEach((item) => {
      item.style.width = item.dataset.width; // Ensure `data-width` is set in the HTML
    });
  }
};

// Form validation and submission
document.addEventListener("DOMContentLoaded", function () {
  const nameInput = document.getElementById("name_input");
  const emailInput = document.getElementById("email_input");
  const messageInput = document.getElementById("message_input");
  const sendButton = document.querySelector(".send_btn");

  const nameError = document.querySelector(".errors_name");
  const emailError = document.querySelector(".email_error");
  const messageError = document.querySelector(".message_error");

  function validateEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  function validateForm() {
    let isValid = true;

    // Name validation
    if (nameInput.value.trim() === "") {
      nameError.textContent = "Name is required.";
      isValid = false;
    } else {
      nameError.textContent = "";
    }

    // Email validation
    if (emailInput.value.trim() === "") {
      emailError.textContent = "Email is required.";
      isValid = false;
    } else if (!validateEmail(emailInput.value.trim())) {
      emailError.textContent = "Please enter a valid email address.";
      isValid = false;
    } else {
      emailError.textContent = "";
    }

    // Message validation
    if (messageInput.value.trim() === "") {
      messageError.textContent = "Message is required.";
      isValid = false;
    } else {
      messageError.textContent = "";
    }

    return isValid;
  }

  sendButton.addEventListener("click", function (event) {
    event.preventDefault();

    if (validateForm()) {
      let parms = {
        name: nameInput.value,
        email: emailInput.value,
        message: messageInput.value,
      };

      nameInput.value = "";
      emailInput.value = "";
      messageInput.value = "";

      // EmailJS integration
      emailjs.send("service_1y4m9d2", "template_fkb8hch", parms)
        .then(function (response) {
          alert("Your email has been sent!");
        })
        .catch(function (error) {
          alert("There was an error sending the email: " + error.text);
        });
    } else {
      alert("Please fix the errors in the form.");
    }
  });
});

// Navbar scroll effect
window.addEventListener("scroll", () => {
  let header = document.querySelector("header");
  const scrollY = window.scrollY;
  header.classList.toggle("new_navbare", scrollY > 0);
});

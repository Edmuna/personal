const x = document.querySelector(".x-icon");
const bars = document.querySelector(".bar-icon");
const menu = document.querySelector(".navbar");
const blabla = document.querySelectorAll(".bar-icon.active");
const overlay = document.querySelector(".overlay");
const contactForm = document.querySelector(".contact");

x.addEventListener("click", () => {
  x.classList.add("closed");
  bars.classList.remove("closed");
  menu.classList.add("closed");
  overlay.classList.remove("full");
  contactForm.classList.remove("not-visible");
});

bars.addEventListener("click", () => {
  x.classList.remove("closed");
  bars.classList.add("closed");
  menu.classList.remove("closed");
  overlay.classList.add("full");
  contactForm.classList.add("not-visible");
});

const form = document.getElementById('myForm');
const sender = document.getElementById("name");
const email = document.getElementById("email");
const msg = document.getElementById("message");

form.addEventListener('submit', function (event) {
  event.preventDefault();

  const templateParams = {
    sender: sender.value,
    email: email.value,
    message: msg.value,
  };

  emailjs.send('service_q83x05s', 'template_wle2anc', templateParams, "1iqi5gSawssZ1Xp36")
    .then(function (response) {
      console.log('SUCCESS!', response.status, response.text, response, templateParams);
      sender.value = "";
      email.value = "";
      msg.value = "";
      // Here the content of the button should be changed or some notification that the e-mail has been succesfully sent
    })
    .catch(function (error) {
      console.log('FAILED...', error);
    });
});

function scrollToSection(event) {
  event.preventDefault();

  const targetId = event.target.getAttribute('href');
  const targetElement = document.querySelector(targetId);
  console.log("Clicked")

  x.classList.add("closed");
  bars.classList.remove("closed");
  menu.classList.add("closed");
  overlay.classList.remove("full");
  contactForm.classList.remove("not-visible");

  if (targetElement) {
    window.scrollTo({
      top: targetElement.offsetTop,
      behavior: 'smooth'
    });
  }
}

const navLinks = document.querySelectorAll('nav a');
navLinks.forEach(link => {
  link.addEventListener('click', scrollToSection);
});


const btnEl = document.querySelector('.btn')
const toggleOptions = () => {
  const wrapperEl = document.querySelector('.wrapper')
  const iconEl = btnEl.querySelector('i')

  wrapperEl.classList.toggle('active')

  if (iconEl.classList.contains('ri-share-line')) {
    iconEl.classList.replace('ri-share-line', 'ri-close-line')
  } else {
    iconEl.classList.replace('ri-close-line', 'ri-share-line')
  }
}
btnEl.addEventListener('click', toggleOptions)
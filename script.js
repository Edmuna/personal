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

var serviceID = 'contact_service';
var templateID = 'template_r0y7ias';
var publicKey = '1iqi5gSawssZ1Xp36';

var templateParams = {
  name: 'James',
  notes: 'Check this out!'
};

emailjs.send(serviceID, templateID, templateParams, publicKey)
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
     console.log('FAILED...', error);
  });

emailjs.sendForm('second_email', 'template_r0y7ias', '.form')
  .then(function(response) {
     console.log('SUCCESS!', response.status, response.text);
  }, function(error) {
     console.log('FAILED...', error);
  });

$('#myForm').on('submit', function(event) {
  event.preventDefault(); // prevent reload
  
  var formData = new FormData(this);
  formData.append('service_id', 'second_email');
  formData.append('template_id', 'template_r0y7ias');
  formData.append('user_id', '1iqi5gSawssZ1Xp36');

  $.ajax('https://api.emailjs.com/api/v1.0/email/send-form', {
      type: 'POST',
      data: formData,
      contentType: false, // auto-detection
      processData: false // no need to parse formData to string
  }).done(function() {
      alert('Your mail is sent!');
  }).fail(function(error) {
      alert('Oops... ' + JSON.stringify(error));
  });
});

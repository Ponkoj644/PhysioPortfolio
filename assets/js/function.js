/* testimonial Slider JS */
if ($(".testimonial-slider").length) {
  const testimonial_slider = new Swiper(".testimonial-slider .swiper", {
    slidesPerView: 1,
    speed: 1000,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 3000,
    },
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    breakpoints: {
      768: {
        slidesPerView: 2,
      },
      991: {
        slidesPerView: 3,
      },
    },
  });
}

// Conterup JS
$(".counter").counterUp({
  delay: 50,
  time: 5000,
});

/* Contact form validation */
var $contactform = $("#contactForm");
$contactform.validator({ focus: false }).on("submit", function (event) {
  if (!event.isDefaultPrevented()) {
    event.preventDefault();
    submitForm();
  }
});

function submitForm() {
  /* Initiate Variables With Form Content*/
  var fullname = $("#fullname").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var subject = $("#subject").val();
  var message = $("#msg").val();

  $.ajax({
    type: "POST",
    url: "form-process.php",
    data:
      "fullname=" +
      fullname +
      "&name=" +
      "&email=" +
      email +
      "&phone=" +
      phone +
      "&subject=" +
      subject +
      "&message=" +
      message,
    success: function (text) {
      if (text == "success") {
        formSuccess();
      } else {
        submitMSG(false, text);
      }
    },
  });
}

function formSuccess() {
  $contactform[0].reset();
  submitMSG(true, "Message Sent Successfully!");
}

function submitMSG(valid, msg) {
  if (valid) {
    var msgClasses = "h3 text-success";
  } else {
    var msgClasses = "h3 text-danger";
  }
  $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
/* Contact form validation end */

/* Appointment form validation */
var $appointmentForm = $("#appointmentForm");
$appointmentForm.validator({ focus: false }).on("submit", function (event) {
  if (!event.isDefaultPrevented()) {
    event.preventDefault();
    submitappointmentForm();
  }
});

function submitappointmentForm() {
  /* Initiate Variables With Form Content*/
  var name = $("#name").val();
  var email = $("#email").val();
  var phone = $("#phone").val();
  var phone = $("#services").val();
  var date = $("#date").val();

  $.ajax({
    type: "POST",
    url: "form-appointment.php",
    data:
      "name=" +
      name +
      "&email=" +
      email +
      "&phone=" +
      phone +
      "&services=" +
      services +
      "&date=" +
      date,
    success: function (text) {
      if (text == "success") {
        appointmentformSuccess();
      } else {
        appointmentsubmitMSG(false, text);
      }
    },
  });
}

function appointmentformSuccess() {
  $appointmentForm[0].reset();
  appointmentsubmitMSG(true, "Message Sent Successfully!");
}

function appointmentsubmitMSG(valid, msg) {
  if (valid) {
    var msgClasses = "h3 text-success";
  } else {
    var msgClasses = "h3 text-danger";
  }
  $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
/* Appointment form validation end */

// back to top button start //

// back to top button end //

var buttonForm = document.querySelector(".search-hotel-btn");
var bookingForm = document.querySelector(".booking-form");
var checkIn = bookingForm.querySelector("[id=checkin-date]");
var checkOut = bookingForm.querySelector("[id=checkout-date]");
var adults = bookingForm.querySelector("[id=adults]");
var children = bookingForm.querySelector("[id=children]");

bookingForm.classList.add("booking-form-hidden");

buttonForm.addEventListener("click", function () {
  bookingForm.classList.remove("booking-form-error");
  bookingForm.classList.toggle("booking-form-hidden");
});

bookingForm.addEventListener("submit", function (evt) {
    if (!checkIn.value || !checkOut.value || !adults.value || !children.value) {
      evt.preventDefault();
      bookingForm.classList.remove("booking-form-error");
      bookingForm.offsetWidth = bookingForm.offsetWidth;
      bookingForm.classList.add("booking-form-error");
    } else
      localStorage.setItem("adults", adults.value);
      localStorage.setItem("adults", children.value);
  });

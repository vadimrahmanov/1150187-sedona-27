var buttonForm = document.querySelector(".search-hotel-btn");
var bookingForm = document.querySelector(".booking-form");

buttonForm.addEventListener("click", function (evt) {
  evt.preventDefault();
  bookingForm.classList.remove("booking-form-error");
  bookingForm.classList.add("booking-form-animation");
  bookingForm.classList.toggle("booking-form-hidden");
});

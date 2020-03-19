var bookingForm = document.querySelector(".booking-form");
var checkIn = bookingForm.querySelector("[name=check-in-date]");
var checkOut = bookingForm.querySelector("[name=check-out-date]");
var adults = bookingForm.querySelector("[name=adults-amount]");
var children = bookingForm.querySelector("[name=children-amount]");


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

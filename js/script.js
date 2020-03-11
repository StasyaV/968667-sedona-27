var searchButton = document.querySelector(".find-hotel__button");
var searchForm = document.querySelector(".search");
var open = searchForm.querySelector(".search-form-close");
var checkIn = searchForm.querySelector("[name=check-in-date]");
var checkOut = searchForm.querySelector("[name=check-out-date]");

  searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.add("search-form-close");
  });
  searchButton.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchButton.classList.add("open");
  });
  open.addEventListener("click", function (evt) {
    evt.preventDefault();
    searchForm.classList.remove("search-form-close");
    checkIn.focus();
  });
  searchForm.addEventListener("submit", function (evt) {
    if (!checkIn.value || !checkOut.value) {
      evt.preventDefault();
      console.log("Нужно заполнить даты приезда и отъезда");
    }
  });
  window.addEventListener("keydown", function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      if (searchForm.classList.contains("search")) {
        searchForm.classList.add("search-form-close");
      }
    }
  });

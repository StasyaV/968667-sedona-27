var searchButton = document.querySelector(".find-hotel__button");
var searchForm = document.querySelector(".search");
var checkIn = searchForm.querySelector("[name=check-in-date]");
var checkOut = searchForm.querySelector("[name=check-out-date]");

searchButton.addEventListener("click", function (evt) {
  evt.preventDefault();
  if (searchForm.classList.contains("search-form-open")) {
    searchForm.classList.remove("search-form-open");
    searchForm.classList.remove("search-form-error");
    searchForm.classList.add("search-form-close");
  } else {
      searchForm.classList.remove("search-form-close");
      searchForm.classList.add("search-form-open");
  }
});
  searchForm.addEventListener("submit", function (evt) {
    if (!checkIn.value || !checkOut.value) {
      evt.preventDefault();
      searchForm.classList.remove("search-form-error");
      searchForm.offsetWidth = searchForm.offsetWidth;
      searchForm.classList.add("search-form-error");
      console.log("Нужно заполнить даты приезда и отъезда");
    }
  });

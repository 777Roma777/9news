document.addEventListener("DOMContentLoaded", function () {
  let links = document.querySelectorAll("a");

  links.forEach(function (link) {
    link.addEventListener("click", function (event) {
      event.preventDefault();

      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    });
  });
});

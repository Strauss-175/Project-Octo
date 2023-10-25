function slide_in() {
    var reveals = document.getElementsByClassName('slideIn');
    console.log(reveals);
    for (var i = 0; i < reveals.length; i++) {
      var windowHeight = window.innerHeight;
      var elementTop = reveals[i].getBoundingClientRect().top;
      if (elementTop < windowHeight - 200) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  }
  window.addEventListener("scroll", slide_in);
const ul = document.querySelector("#ul");

document.querySelector('#responsive').onclick = () =>{
    ul.classList.toggle("active");
}


/*--------------carousel-start----------------*/

let currentIndex = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;

  function showSlide(index) {
    if (index < 0) {
      currentIndex = totalSlides - 1;
    } else if (index >= totalSlides) {
      currentIndex = 0;
    } else {
      currentIndex = index;
    }

    const translateValue = -currentIndex * 100 + '%';
    document.querySelector('.slider-wrapper').style.transform = 'translateX(' + translateValue + ')';
  }

  function prevSlide() {
    showSlide(currentIndex - 1);
  }

  function nextSlide() {
    showSlide(currentIndex + 1);
  }

/*-------------carousel-end---------------*/

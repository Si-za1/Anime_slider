let currentIndex = 1;
showSlides(currentIndex);

function nextSlide(n) {
  showSlides(currentIndex += n);
}

function currentSlide(n) {
  showSlides(currentIndex = n);
}

function showSlides(n) {
    // making the let functional scope
    //recommended to use inside, since outside wont work
  let i;
  let slides = document.getElementsByClassName("image_slider");
  let dots = document.getElementsByClassName("dot");

  // check if the requested slide index is valid
  if (n > slides.length) 
  {
    currentIndex = 1
  }    
  if (n < 1) 
  {
    currentIndex = slides.length;
  }

 
  // for the slides to be displaayed
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }

  // for the movements of the dots
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  
  slides[currentIndex-1].style.display = "block";  
  dots[currentIndex-1].className += " active";
}

function autoSlide() {
  nextSlide(1); // Increment the currentIndex by 1 to move to the next slide
}

// Set the interval to change slides every 3 seconds (3000 milliseconds)
setInterval(autoSlide, 5000);







// the code without the circle

// const sliders = document.querySelectorAll('.image_slider');

// let currentIndex = 0;
// console.log(sliders);

// sliders.forEach((image_slider,index)=>{
//     image_slider.style.left=`${index*100}%`
// })

// const goPrev=()=>{
//     if (currentIndex == 0) {
//         currentIndex = sliders.length - 1;
//         image_slide();
//     } else {
//         currentIndex--;
//         image_slide();
//     }
//     highlightRadioButton(currentIndex);
// };

// const image_slide=()=>{
//     sliders.forEach((image_slider)=>{
//         image_slider.style.transform=`translateX(-${currentIndex*100}%)`
//     })
// }

// //radiobutton

// function highlightRadioButton(currentIndex) {
//     var radioButtons = document.querySelectorAll('.radio-buttons input');
//     for (var i = 0; i < radioButtons.length; i++) {
//         radioButtons[i].className = radioButtons[i].className.replace(" active", "");
//       }
  
//   dots[currentIndex-1].className += " active";
//     }
// //automatic slide
// setInterval(goPrev, 5000);
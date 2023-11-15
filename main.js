window.addEventListener("DOMContentLoaded", main);

function main() {
  beginSlideShow("#slideshow-1");

  beginSlideShow("#slideshow-2");
}

function beginSlideShow(selector) {
  let currentImgIndex = 0;
  setInterval(showNextImage, 2000);

  function showNextImage() {
    // get all the images from dom
    const images = document.querySelectorAll(selector + " img");

    // hide images which are visible now
    const visibleImage = images[currentImgIndex];
    visibleImage.classList.remove("show");

    //   currentImgIndex = (currentImgIndex + 1) % images.length;
    // set the next img index which needs to be seen
    currentImgIndex++;
    if (currentImgIndex >= images.length) {
      currentImgIndex = 0;
    }

    // show the image which is hidden now.
    const hiddenImage = images[currentImgIndex];
    hiddenImage.classList.add("show");
    console.log(visibleImage);
  }
}

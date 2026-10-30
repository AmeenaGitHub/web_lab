// List of images
const images = ["img1.png", "img2.png",
  "img1.png", "img2.png", "img1.png", "img2.png"];
let currentIndex = 0;
let autoPlayTimer = null;

// Show image at given index
function showImage(index) {
  currentIndex = (index + images.length) % images.length; 
  document.getElementById("slideImg").src = images[currentIndex];
}

// Open slideshow at clicked thumbnail
function openSlideshow(index) {
  document.getElementById("slideshow").style.display = "flex";
  showImage(index);
}

// Close slideshow
function closeSlideshow() {
  document.getElementById("slideshow").style.display = "none";
  clearInterval(autoPlayTimer);
  document.getElementById("playBtn").textContent = "Play";
}

// Next / Previous
function nextImage() {
  showImage(currentIndex + 1);
}
function prevImage() {
  showImage(currentIndex - 1);
}

// Auto-play toggle
function toggleAutoPlay() {
  const btn = document.getElementById("playBtn");
  if (autoPlayTimer) {
    clearInterval(autoPlayTimer);
    autoPlayTimer = null;
    btn.textContent = "Play";
  } else {
    autoPlayTimer = setInterval(nextImage, 2000);
    btn.textContent = "Pause";
  }
}
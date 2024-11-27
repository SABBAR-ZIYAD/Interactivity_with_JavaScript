const images = document.querySelectorAll('.preview');

function initializePage() {
  console.log('Page loaded successfully');
  let imageDiv = document.getElementById("image");
  images.forEach((image) => {
      image.setAttribute('tabindex', '0');
  });
}

function upDate(previewPic) {
  var image = previewPic.src;
  document.getElementById("image").style.backgroundImage = "url('" + image + "')";
  
  var text = previewPic.alt;
  document.getElementById("image").innerHTML = text;
  let imageDiv = document.getElementById("image");
  const naturalWidth = previewPic.naturalWidth;
  const naturalHeight = previewPic.naturalHeight;
  imageDiv.style.width = naturalWidth / 2 + "px"; 
  imageDiv.style.height = naturalHeight / 2 + "px";
}

function unDo() {
  document.getElementById("image").style.backgroundImage = "url('')";
  document.getElementById("image").innerHTML = "Hover over an image below to display here.";
  let imageDiv = document.getElementById("image");
  imageDiv.style.width = "575px"; 
  imageDiv.style.height = "650px";
}




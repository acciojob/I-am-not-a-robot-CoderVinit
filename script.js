//your code here
const imageContainer = document.getElementById("imageContainer");
const resetButton = document.getElementById("reset");
const verifyButton = document.getElementById("verify");
const messagePara = document.getElementById("para");

const images = ["img1", "img2", "img3", "img4", "img5"];
let selectedImages = [];

function shuffleImages() {
	let duplicate = images[Math.floor(Math.random() * images.length)];
    let shuffledImages = [...images, duplicate].sort(() => Math.random() - 0.5);

    imageContainer.innerHTML = "";
    shuffledImages.forEach((className, index) => {
      let img = document.createElement("img");
      img.classList.add(className, "image-tile");
      img.dataset.index = index;
      img.addEventListener("click", () => selectImage(img));
      imageContainer.appendChild(img);
    });
}

function selectImage(img) {
	if (selectedImages.length < 2 && !selectedImages.includes(img)) {
      selectedImages.push(img);
      img.classList.add("selected");
      resetButton.style.display = "block";
      if (selectedImages.length === 2) verifyButton.style.display = "block";
    }
}

resetButton.addEventListener("click", () => {
    selectedImages.forEach(img => img.classList.remove("selected"));
    selectedImages = [];
    verifyButton.style.display = "none";
    resetButton.style.display = "none";
    messagePara.textContent = "";
});

verifyButton.addEventListener("click", () => {
    verifyButton.style.display = "none";
    if (selectedImages[0].className === selectedImages[1].className) {
      messagePara.textContent = "You are a human. Congratulations!";
    } else {
      messagePara.textContent = "We can't verify you as a human. You selected the non-identical tiles.";
    }
});

shuffleImages();
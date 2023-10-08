const images = [
    "./assets/images/42ebf2e8554227cb053ee3c3733cb6db.jpeg",
    "./assets/images/2222.png",
    "./assets/images/42ebf2e8554227cb053ee3c3733cb6db.jpeg",
    "./assets/images/2222.png",
    "./assets/images/42ebf2e8554227cb053ee3c3733cb6db.jpeg",
    "./assets/images/2222.png",
    "./assets/images/42ebf2e8554227cb053ee3c3733cb6db.jpeg"
];

let currentIndex = 0;

const prevButton = document.getElementById("prevButton");
const nextButton = document.getElementById("nextButton");
const sliderImage = document.getElementById("sliderImage");
const additionalImagesContainer = document.querySelector(".additional-images");

nextButton.addEventListener("click", () => {
    currentIndex = (currentIndex + 1) % images.length;
    updateSlider();
});

function updateSlider() {
    sliderImage.src = images[currentIndex];

    additionalImagesContainer.innerHTML = "";

    for (let i = 1; i < images.length; i++) {
        const additionalImage = document.createElement("img");
        additionalImage.src = images[(currentIndex + i) % images.length];
        additionalImage.alt = "Resim " + (i + 1);
        additionalImagesContainer.appendChild(additionalImage);
    }
}

updateSlider();

window.addEventListener('scroll', function() {
    const elements = document.querySelectorAll('#Images img, #Images .styled-video');
    const windowHeight = window.innerHeight;
    const windowCenter = windowHeight / 2;

    let closestElement = null;
    let closestDistance = Infinity;

    elements.forEach(element => {
        const elementRect = element.getBoundingClientRect();
        const elementCenter = elementRect.top + (elementRect.height / 2);
        const distance = Math.abs(windowCenter - elementCenter);

        if (distance < closestDistance) {
            closestDistance = distance;
            closestElement = element;
        }
    });

    elements.forEach(element => {
        if (element === closestElement) {
            element.classList.add('grow');
        } else {
            element.classList.remove('grow');
        }
    });
});


let images = ["pictures/jeux/minia platformer 1 2D.png", "pictures/jeux/FPS unity.png", "pictures/jeux/G Pong img.png"];
let currentIndex = 0;

function changeImage() {
    currentIndex = (currentIndex + 1) % images.length;
    document.getElementById("dynamic-image").src = images[currentIndex];
}

setInterval(changeImage, 3000); // Change l'image toutes les 3 secondes

let rendusImages = [
    "pictures/Rendus 3D/Fusée 1.png", // Remplacez par le chemin de votre image 1
    "pictures/Rendus 3D/Still A Lamborghini v2.png", // Remplacez par le chemin de votre image 2
    "pictures/Rendus 3D/The Studio 22.png"  // Remplacez par le chemin de votre image 3
];

let currentRendusIndex = 0;

function changeRendusImage() {
    currentRendusIndex = (currentRendusIndex + 1) % rendusImages.length;
    document.getElementById("dynamic-image2").src = rendusImages[currentRendusIndex];
}

// Change l'image toutes les 3 secondes
setInterval(changeRendusImage, 3000); 


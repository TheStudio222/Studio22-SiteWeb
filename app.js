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

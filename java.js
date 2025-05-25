document.addEventListener('DOMContentLoaded', () => {
    const flower = document.querySelector('.flower');
    const petals = document.querySelectorAll('.petal');
    const giftMessage = document.querySelector('.gift-message p');

    if (flower) {
        flower.addEventListener('mouseenter', () => {
            petals.forEach((petal, index) => {
                petal.style.transition = `transform 0.3s ease-in-out ${index * 0.05}s`;
                const currentTransform = getComputedStyle(petal).transform;
                if (currentTransform === 'none') {
                     // If no transform, apply a slight outward move based on its original rotation
                    const angle = index * 72; // Assuming 5 petals, 360/5 = 72
                    petal.style.transform = `rotate(${angle}deg) translateY(-5px) scale(1.05)`;
                } else {
                    petal.style.transform = `${currentTransform} translateY(-5px) scale(1.05)`;
                }
            });
        });

        flower.addEventListener('mouseleave', () => {
            petals.forEach((petal, index) => {
                petal.style.transition = `transform 0.3s ease-in-out ${index * 0.05}s`;
                // Reset to original rotation
                const angle = index * 72;
                petal.style.transform = `rotate(${angle}deg)`;
            });
        });
    }

    // Simple animation for the gift message
    if(giftMessage) {
        let scale = 1;
        let growing = true;
        setInterval(() => {
            if (growing) {
                scale += 0.005;
                if (scale >= 1.03) growing = false;
            } else {
                scale -= 0.005;
                if (scale <= 0.97) growing = true;
            }
            giftMessage.style.transform = `scale(${scale})`;
        }, 100);
    }
});
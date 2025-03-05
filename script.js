const slides = document.querySelector('.slides');
const prevBtn = document.querySelector('.prev');
const nextBtn = document.querySelector('.next');
const caption = document.getElementById('caption');
const thumbnails = document.querySelectorAll('.thumb');

function updateSlider() {
    slides.prepend(slides.lastElementChild);
    styleImages();
    updateCaption();
}

function styleImages() {
    const images = document.querySelectorAll('.slides img');
    images.forEach((img, i) => {
        img.style.transform = i === 1 ? 'scale(1)' : 'scale(0.8)';
        img.style.opacity = i === 1 ? '1' : '0.6';
    });
}

function updateCaption() {
    const activeImage = document.querySelectorAll('.slides img')[1];
    caption.textContent = activeImage.getAttribute('data-caption');
}


thumbnails.forEach((thumb) => {
    thumb.addEventListener('click', () => {
        const thumbSrc = thumb.getAttribute('src');
        let images = document.querySelectorAll('.slides img');

        
        let targetIndex = Array.from(images).findIndex(img => img.getAttribute('src') === thumbSrc);

        
        while (document.querySelectorAll('.slides img')[1].getAttribute('src') !== thumbSrc) {
            slides.appendChild(slides.firstElementChild);
        }

        styleImages();
        updateCaption();
    });
});

nextBtn.addEventListener('click', () => {
    slides.appendChild(slides.firstElementChild);
    styleImages();
    updateCaption();
});

prevBtn.addEventListener('click', () => {
    slides.prepend(slides.lastElementChild);
    styleImages();
    updateCaption();
});

styleImages();
updateCaption();

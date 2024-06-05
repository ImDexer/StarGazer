document.addEventListener('DOMContentLoaded', function() {
    const bookImages = document.querySelectorAll('.info img');
    bookImages.forEach(image => {
        image.style.transition = 'transform 0.5s ease-in-out';
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.4)';
        });
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bookImages = document.querySelectorAll('.noticia');
    bookImages.forEach(image => {
        image.style.transition = 'transform 0.5s ease-in-out';
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const bookImages = document.querySelectorAll('.fecha');
    bookImages.forEach(image => {
        image.style.transition = 'transform 0.5s ease-in-out';
        image.addEventListener('mouseenter', () => {
            image.style.transform = 'scale(1.1)';
        });
        image.addEventListener('mouseleave', () => {
            image.style.transform = 'scale(1)';
        });
    });
});

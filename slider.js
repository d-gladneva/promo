const sliderhars = () => {
    let slideIndex = 0;
    const nextBtn = document.querySelector('.next');
    const prevBtn = document.querySelector('.prev');
    const slider = document.querySelector('.main-slider');
    const slides = slider.querySelectorAll('.slide');

    const gallerySlider = {
        showSlides(n) {
            let i;
            if (n > slides.length) {
                slideIndex = 1;
            }
            if (n < 1) {
                slideIndex = slides.length;
            }
            for (i = 0; i < slides.length; i++) {
                slides[i].style.display = 'none';
            }
            slides[slideIndex - 1].style.display = 'block';
        },
        nextSlide() {
            this.showSlides((slideIndex += 1));
        },
        prevSlide() {
            this.showSlides((slideIndex -= 1));
        },
        init() {
            this.showSlides(slideIndex);
            this.autoPlay();
        },
        autoPlay() {
            setInterval(() => {
                this.nextSlide();
            }, 2000);
        },
    };
    gallerySlider.init(slideIndex);

    nextBtn.addEventListener('click', () => {
        gallerySlider.nextSlide();
    });
    prevBtn.addEventListener('click', () => {
        gallerySlider.prevSlide();
    });
};

sliderhars();

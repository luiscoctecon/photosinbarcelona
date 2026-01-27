 document.addEventListener('DOMContentLoaded', function() {
        // Mobile menu toggle
        const menuToggle = document.getElementById('mobile-menu');
        const navLinks = document.querySelector('.nav-links');
        menuToggle.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            menuToggle.classList.toggle('active');
        });

       

        galleryItems.forEach(item => {
            item.setAttribute('tabindex', '0');
            item.addEventListener('click', () => openLightbox(item));
            item.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    openLightbox(item);
                }
            });
        });
        closeBtn.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
        document.addEventListener('keydown', (e) => {
            if (lightbox.classList.contains('active') && (e.key === 'Escape' || e.key === 'Esc')) {
                closeLightbox();
            }
        });

        // Touch gesture to close (mobile UX)
        let touchStartY = null;
        lightbox.addEventListener('touchstart', (e) => {
            if (e.touches.length === 1) touchStartY = e.touches[0].clientY;
        });
        lightbox.addEventListener('touchend', (e) => {
            if (touchStartY !== null && e.changedTouches.length === 1) {
                const touchEndY = e.changedTouches[0].clientY;
                if (touchEndY - touchStartY > 80) closeLightbox();
            }
            touchStartY = null;
        });

        // Contact form (no backend, just clear on submit)
        document.querySelector('.contact-form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thank you for reaching out!');
            this.reset();
        });
    });

 document.addEventListener('DOMContentLoaded', function() {
            const track = document.querySelector('.carousel-track');
            const items = document.querySelectorAll('.carousel-item');
            const itemCount = items.length;
            let intervalId;
            let isPaused = false;

            // Clone first and last for infinite effect
            const firstClone = items[0].cloneNode(true);
            const lastClone = items[itemCount - 1].cloneNode(true);
            track.appendChild(firstClone);
            track.insertBefore(lastClone, items[0]);

            let currentIndex = 1;
            let itemWidth = items[0].offsetWidth;
            track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;

            function moveToIndex(index) {
                track.style.transition = "transform 0.5s ease-in-out";
                track.style.transform = `translateX(-${itemWidth * index}px)`;
            }

            function moveCarousel() {
                currentIndex++;
                moveToIndex(currentIndex);

                track.addEventListener('transitionend', () => {
                    if (currentIndex === itemCount + 1) {
                        track.style.transition = "none";
                        currentIndex = 1;
                        track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
                    }
                }, { once: true });
            }

            function prevCarousel() {
                currentIndex--;
                moveToIndex(currentIndex);

                track.addEventListener('transitionend', () => {
                    if (currentIndex === 0) {
                        track.style.transition = "none";
                        currentIndex = itemCount;
                        track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
                    }
                }, { once: true });
            }

            function startCarousel() {
                intervalId = setInterval(moveCarousel, 3000);
            }

            function pauseCarousel() {
                clearInterval(intervalId);
            }

            // Controls
            document.getElementById('pause-btn').addEventListener('click', function() {
                if (isPaused) {
                    startCarousel();
                    this.textContent = 'Pause';
                } else {
                    pauseCarousel();
                    this.textContent = 'Play';
                }
                isPaused = !isPaused;
            });

            document.getElementById('next-btn').addEventListener('click', function() {
                pauseCarousel();
                isPaused = true;
                document.getElementById('pause-btn').textContent = 'Play';
                moveCarousel();
            });

            document.getElementById('prev-btn').addEventListener('click', function() {
                pauseCarousel();
                isPaused = true;
                document.getElementById('pause-btn').textContent = 'Play';
                prevCarousel();
            });

            // Responsive: update width on resize
            window.addEventListener('resize', () => {
                itemWidth = items[0].offsetWidth;
                track.style.transition = "none";
                track.style.transform = `translateX(-${itemWidth * currentIndex}px)`;
            });

            startCarousel();
        });
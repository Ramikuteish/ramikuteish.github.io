/* jshint esversion: 6 */

// Check if the extension API is available before using it
if (typeof chrome !== 'undefined' && chrome.runtime && chrome.runtime.onMessage) {
 chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
  fetch("/api/data")
    .then(res => res.json())
    .then(data => {
      sendResponse({ ok: true, data });
    })
    .catch(error => {
      sendResponse({ ok: false, error: error.message });
    });

  return true;
});
}


/////////////////////////////////////////////////// Circle Follow The Cursor
const circleElement = document.querySelector('.circle');

const mouse = { x: 0, y: 0 };
const circle = { x: 0, y: 0 };

window.addEventListener('mousemove', e => {
    mouse.x = e.x;
    mouse.y = e.y;
});

const speed = 0.15;
const tick = () => {
    circle.x += (mouse.x - circle.x) * speed;
    circle.y += (mouse.y - circle.y) * speed;

    circleElement.style.transform = `translate(${circle.x}px, ${circle.y}px)`;

    window.requestAnimationFrame(tick);
};

tick();


/////////////////////////////////////////////////// Zurück-Button Funktion
function backFunction() {
    window.location.href = "../index.html";
}


//////////////////////////////////////////////////// Hamburger Menü
const hamburger = document.querySelector(".hamburger");
const navbar = document.querySelector(".navbar");

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
});

function hidesidebar() {
    const sidebar = document.querySelector(".sidebar");
    sidebar.style.display = 'none';
}

document.querySelectorAll(".navbar").forEach(n => {
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navbar.classList.remove("active");
    });
});


/////////////////////////////////////////////////// Scroll Reveal Animation

function initScrollReveal() {
    const revealElements = document.querySelectorAll('.uebermich_img, .uebermich_content');

    if ('IntersectionObserver' in window && revealElements.length > 0) {
        const observer = new IntersectionObserver((entries, obs) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    obs.unobserve(entry.target);
                }
            });
        }, {
            threshold: 0.2,
            rootMargin: '0px 0px -10% 0px'
        });

        revealElements.forEach(el => observer.observe(el));
    } else {
        revealElements.forEach(el => el.classList.add('visible'));
    }
}

initScrollReveal();


/////////////////////////////////////////////////// Modal für Videos und Bilder
document.addEventListener("DOMContentLoaded", () => {
    const modal = document.getElementById("videoModal");
    const video = document.getElementById("projectVideo");
    const closeBtn = document.querySelector(".modal-close");

    // Auf Seiten ohne Modal: diesen Teil überspringen
    if (!modal || !video || !closeBtn) return;

    document.querySelectorAll(".project-card").forEach(card => {
        card.addEventListener("click", e => {
            e.preventDefault();

            video.src = card.dataset.video;
            modal.classList.add("active");
            video.play();
        });
    });

    function closeModal() {
        modal.classList.remove("active");
        video.pause();
        video.currentTime = 0;
        video.src = "";
    }


    closeBtn.addEventListener("click", closeModal);

    modal.addEventListener("click", e => {
        if (e.target === modal) {
            closeModal();
        }
    });


    const modal2 = document.getElementById("imgModal");
    const img = document.getElementById("projectImg");
    const closeBtn2 = document.querySelector(".modal-close2");

    let currentImages = [];
    let currentIndex = 0;

    document.querySelectorAll(".project-card2").forEach(card2 => {
        card2.addEventListener("click", e => {
            e.preventDefault();

            currentImages = card2.dataset.images
                .split(",")
                .map(img => img.trim());

            currentIndex = 0;

            img.src = currentImages[currentIndex];
            modal2.classList.add("active");
        });
    });

    document.getElementById("nextImg").addEventListener("click", () => {

        currentIndex++;

        if (currentIndex >= currentImages.length) {
            currentIndex = 0;
        }

        img.src = currentImages[currentIndex];

    });

    document.getElementById("prevImg").addEventListener("click", () => {

        currentIndex--;

        if (currentIndex < 0) {
            currentIndex = currentImages.length - 1;
        }

        img.src = currentImages[currentIndex];

    });

    function closeModal2() {
        modal2.classList.remove("active");
        img.src = "";
    }

    closeBtn2.addEventListener("click", closeModal2);

    modal2.addEventListener("click", e => {
        if (e.target === modal2) {
            closeModal2();
        }
    });
    });
// Popup Skript

// Popup öffnen
function openPopup() {
    const popup = document.querySelector('.popup');
    popup.classList.add('show');
}

// Popup schließen
function closePopup() {
    const popup = document.querySelector('.popup');
    popup.classList.remove('show');
}

// Popup schließen wenn außerhalb geklickt wird
document.addEventListener('click', function (event) {
    const popup = document.querySelector('.popup');
    if (event.target === popup) {
        closePopup();
    }
});


// Hamburger Menü
const hamburger = document.querySelector(".hamburger")
const navbar = document.querySelector(".navbar")

hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    navbar.classList.toggle("active");
})

function hidesidebar() {
    const sidebar = document.querySelector(".sidebar")
    sidebar.style.display = 'none'
}

document.querySelectorAll(".navbar").forEach(n => {
    n.addEventListener("click", () => {
        hamburger.classList.remove("active");
        navbar.classList.remove("active");
    })
})

/*
// Formular
document.getElementById("nachricht").addEventListener("submit", function (event) {
    let name = document.getElementById("name").value.trim();
    let email = document.getElementById("email").value.trim();
    let telefon = document.getElementById("telefon").value;
    let betref = document.getElementById("betref").value;
    let message = document.getElementById("message").value;
    let ergebnis = document.getElementById("ergebnis");

    if (name === "" || email === "" || telefon === "" || betref === "" || message === "") {
        event.preventDefault();
        ergebnis.textContent = 'Bitte fülle alle Pflichtfelder aus.';
        ergebnis.style.color = "red";
    } else {
        ergebnis.textContent = `Danke ${name}, Deine Nachricht wird versendet...`;
        ergebnis.style.color = "green";
    }
});
*/

// Slide Projekte
document.addEventListener('DOMContentLoaded', function () {
    let next = document.querySelector('.next');
    let prev = document.querySelector('.prev');
    let slide = document.querySelector('.slide');

    if (next && prev && slide) {
        next.addEventListener('click', function () {
            let items = document.querySelectorAll('.item');
            if (items.length > 0) {
                slide.appendChild(items[0]);
            }
        });

        prev.addEventListener('click', function () {
            let items = document.querySelectorAll('.item');
            if (items.length > 0) {
                slide.insertBefore(items[items.length - 1], items[0]);
            }
        });
    }
});

// Projekte Galerie Skript
const images = [
    {
        id: 1,
        url: './img/WeProtect\ Berlin.jpg',
        title: 'Berglandschaft',
        description: 'Majestätische Bergkette bei goldenem Sonnenuntergang.'
    },
    {
        id: 2,
        url: './img/Tobias\ Stritt\ -\ Planung\ Montage\ Küchen.jpg',
        title: 'Wald im Nebel',
        description: 'Geheimnisvoller Waldnebel am frühen Morgen.'
    },
    {
        id: 3,
        url: './img/Der\ NASCH\ e.V.jpg',
        title: 'Meeresküste',
        description: 'Gewaltige Wellen brechen an der felsigen Küste.'
    },
    {
        id: 4,
        url: './img/waldtriathlon in Trainingen.jpg',
        title: 'Bergsee',
        description: 'Klarer Bergsee mit perfekter Spiegelung der Berge.'
    },
    {
        id: 5,
        url: './img/flyer/Moderne\ und\ dezente\ Outfits1.JPG',
        title: 'Waldweg',
        description: 'Verschlungener Pfad durch den dichten Nadelwald.'
    },
    {
        id: 6,
        url: './img/flyer/Moderne\ und\ dezente\ Outfits2.JPG',
        title: 'Nebelberge',
        description: 'Berggipfel ragen aus einem Meer aus Nebel heraus.'
    }
];

const imagestablet = [
    {
        id: 1,
        url: './img/WeProtect Berlin-Tablet.jpg',
        title: 'Berglandschaft',
        description: 'Majestätische Bergkette bei goldenem Sonnenuntergang.'
    },
    {
        id: 2,
        url: './img/Tobias Stritt - Planung Montage Küchen-Tablet.jpg',
        title: 'Wald im Nebel',
        description: 'Geheimnisvoller Waldnebel am frühen Morgen.'
    },
    {
        id: 3,
        url: './img/Der NASCH e.V-Tablet.jpg',
        title: 'Meeresküste',
        description: 'Gewaltige Wellen brechen an der felsigen Küste.'
    },
    {
        id: 4,
        url: './img/waldtriathlon in Trainingen-Tablet.jpg',
        title: 'Bergsee',
        description: 'Klarer Bergsee mit perfekter Spiegelung der Berge.'
    }
];

const imagesmobile = [
    {
        id: 1,
        url: './img/WeProtect Berlin-Mobile.jpg',
        title: 'Berglandschaft',
        description: 'Majestätische Bergkette bei goldenem Sonnenuntergang.'
    },
    {
        id: 2,
        url: './img/Tobias Stritt - Planung Montage Küchen-Mobile.jpg',
        title: 'Wald im Nebel',
        description: 'Geheimnisvoller Waldnebel am frühen Morgen.'
    },
    {
        id: 3,
        url: './img/Der NASCH e.V-Mobile.jpg',
        title: 'Meeresküste',
        description: 'Gewaltige Wellen brechen an der felsigen Küste.'
    },
    {
        id: 4,
        url: './img/waldtriathlon in Trainingen-Mobile.jpg',
        title: 'Bergsee',
        description: 'Klarer Bergsee mit perfekter Spiegelung der Berge.'
    }
];

// DOM-Elemente
const monitorContainer = document.getElementById('monitorContainer');
const tabletContainer = document.getElementById('tabletContainer');
const phoneContainer = document.getElementById('phoneContainer');
const galleryContainerMonitor = document.getElementById('galleryContainer');
const galleryContainerTablet = document.getElementById('galleryContainerTablet');
const galleryContainerPhone = document.getElementById('galleryContainerPhone');
const scrollLeftBtn = document.getElementById('scrollLeftBtn');
const scrollRightBtn = document.getElementById('scrollRightBtn');

const deviceInfoElement = document.getElementById('deviceInfo');
const currentDeviceElement = document.getElementById('currentDevice');

// Statusvariablen
let currentImageId = 1;
let isFullscreen = false;
let currentGalleryContainer = galleryContainerMonitor;
let currentDevice = 'monitor';
let isInitialized = false;
let currentImages = images;

// Gerätetyp ermitteln
function detectDevice() {
    const width = window.innerWidth;

    if (width >= 1024) {
        // Monitor (Desktop)
        monitorContainer.style.display = 'block';
        tabletContainer.style.display = 'none';
        phoneContainer.style.display = 'none';
        currentGalleryContainer = galleryContainerMonitor;
        currentDevice = 'monitor';
        currentImages = images;

    } else if (width >= 768 && width < 1024) {
        // Tablet
        monitorContainer.style.display = 'none';
        tabletContainer.style.display = 'block';
        phoneContainer.style.display = 'none';
        currentGalleryContainer = galleryContainerTablet;
        currentDevice = 'tablet';
        currentImages = imagestablet;

        //   currentDeviceElement.textContent = 'Tablet';
    } else {
        // Handy (Mobile)
        monitorContainer.style.display = 'none';
        tabletContainer.style.display = 'none';
        phoneContainer.style.display = 'block';
        currentGalleryContainer = galleryContainerPhone;
        currentDevice = 'phone';
        currentImages = imagesmobile;
        // currentDeviceElement.textContent = 'Handy (Mobile)';
    }

    // Galerie aktualisieren, falls noch nicht initialisiert
    if (currentGalleryContainer.children.length === 0) {
        loadGalleryToContainer(currentGalleryContainer);
    }
}

// Galerie in einen Container laden
function loadGalleryToContainer(container) {
    container.innerHTML = '';

    currentImages.forEach((image, index) => {
        const imageItem = document.createElement('div');
        imageItem.className = 'image-item';
        if (image.id === currentImageId) {
            imageItem.classList.add('selected');
        }
        imageItem.dataset.id = image.id;
        imageItem.dataset.index = index;

        imageItem.innerHTML = `
                    <img src="${image.url}" alt="${image.title}" loading="lazy">
                `;

        imageItem.addEventListener('click', () => selectImage(image.id));

        container.appendChild(imageItem);
    });
}

// Initialisierung der Galerie
function initGallery() {
    // Alle Galerie-Container initialisieren mit den richtigen Arrays
    currentImages = images;
    loadGalleryToContainer(galleryContainerMonitor);
    
    currentImages = imagestablet;
    loadGalleryToContainer(galleryContainerTablet);
    
    currentImages = imagesmobile;
    loadGalleryToContainer(galleryContainerPhone);

    // Gerät erkennen
    detectDevice();

    // Statusanzeige aktualisieren
    updateStatus();

    // Standardmäßig erstes Bild auswählen und anzeigen
    selectImage(currentImageId);
    
    // Markiere als initialisiert - scrollIntoView wird ab jetzt verwendet
    isInitialized = true;
}

// Bild auswählen
function selectImage(id) {
    currentImageId = id;

    // Alle Galerie-Container aktualisieren
    const allContainers = [galleryContainerMonitor, galleryContainerTablet, galleryContainerPhone];

    allContainers.forEach(container => {
        const items = container.querySelectorAll('.image-item');
        items.forEach(item => {
            if (parseInt(item.dataset.id) === id) {
                item.classList.add('selected');
                // Bild in den sichtbaren Bereich scrollen - nur nach Initialisierung
                if (isInitialized) {
                    item.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
                }

                // Index für Statusanzeige aktualisieren
                const index = parseInt(item.dataset.index) + 1;

            } else {
                item.classList.remove('selected');
            }
        });
    });

    // Bild in der Vorschau anzeigen
    const selectedImage = currentImages.find(img => img.id === id);
    if (selectedImage) {
    }
    updateStatus();
}

// Status aktualisieren
function updateStatus() {
    const selectedImage = currentImages.find(img => img.id === currentImageId);
    if (selectedImage) {

    }
}

// Bilder mischen
function shuffleImages() {
    // Zufällige Reihenfolge der Bilder
    for (let i = images.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [images[i], images[j]] = [images[j], images[i]];
    }

    // Alle Galerien neu laden
    loadGalleryToContainer(galleryContainerMonitor);
    loadGalleryToContainer(galleryContainerTablet);
    loadGalleryToContainer(galleryContainerPhone);

    // Status aktualisieren
    setTimeout(updateStatus, 1500);
}

// Vollbildmodus
function toggleFullscreen() {
    let element = document.body;

    if (currentDevice === 'monitor') element = monitorContainer;
    else if (currentDevice === 'tablet') element = tabletContainer;
    else element = phoneContainer;

    if (!isFullscreen) {
        if (element.requestFullscreen) {
            element.requestFullscreen();
        } else if (element.webkitRequestFullscreen) {
            element.webkitRequestFullscreen();
        } else if (element.msRequestFullscreen) {
            element.msRequestFullscreen();
        }
        isFullscreen = true;

    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
        isFullscreen = false;
        updateStatus();
    }
}

// Event Listeners für Buttons
scrollLeftBtn.addEventListener('click', () => {
    // Zum vorherigen Bild springen
    const currentIndex = currentImages.findIndex(img => img.id === currentImageId);
    const prevIndex = currentIndex === 0 ? currentImages.length - 1 : currentIndex - 1;
    selectImage(currentImages[prevIndex].id);
});

scrollRightBtn.addEventListener('click', () => {
    // Zum nächsten Bild springen
    const currentIndex = currentImages.findIndex(img => img.id === currentImageId);
    const nextIndex = (currentIndex + 1) % currentImages.length;
    selectImage(currentImages[nextIndex].id);
});



// Tastatursteuerung
document.addEventListener('keydown', (e) => {
    switch (e.key) {
        case 'ArrowLeft':
            currentGalleryContainer.scrollBy({ left: -300, behavior: 'smooth' });
            break;
        case 'ArrowRight':
            currentGalleryContainer.scrollBy({ left: 300, behavior: 'smooth' });
            break;
        case ' ':
            // Nächstes Bild mit Leertaste
            const currentIndex = currentImages.findIndex(img => img.id === currentImageId);
            const nextIndex = (currentIndex + 1) % currentImages.length;
            selectImage(currentImages[nextIndex].id);
            break;
        case 's':
        case 'S':
            shuffleImages();
            break;
        case 'f':
        case 'F':
            toggleFullscreen();
            break;
    }
});

// Vollbild-Change-Event
document.addEventListener('fullscreenchange', () => {
    isFullscreen = !!document.fullscreenElement;
});

document.addEventListener('webkitfullscreenchange', () => {
    isFullscreen = !!document.webkitFullscreenElement;
});

// Fenstergrößenänderung überwachen
window.addEventListener('resize', detectDevice);

// Galerie initialisieren
initGallery();

// Startanimation für Geräte
setTimeout(() => {
    const currentContainer = document.querySelector('.device-container[style*="display: block"]');
    if (currentContainer) {
        currentContainer.style.opacity = '1';
        currentContainer.style.transform = 'translateY(0)';
    }
}, 100);
/* jshint esversion: 6 */

// Circle Follow The Cursor
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


// Zurück-Button Funktion
function backFunction() {
    window.location.href = "../index.html";
}


// Hamburger Menü
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
        title: 'Berolina Security – Unternehmenswebsite',
        description: `- <b>Projekt:</b> Erstellung und Pflege einer Unternehmenswebsite im Sicherheitsbereich.
- <b>Meine Aufgabe:</b> Umsetzung der Website mit CMS (Sitejet), Strukturierung von Inhalten und Layout.
- <b>Umsetzung:</b> Gestaltung der Seitenstruktur, Integration von Texten und Bildern sowie Optimierung für mobile Endgeräte.
- <b>Fokus:</b> Responsive Design, klare Navigation und benutzerfreundliche Darstellung.
- <b>Ergebnis:</b> Moderne, übersichtliche Website zur Präsentation der Dienstleistungen.`
    },
    {
        id: 2,
        url: './img/Tobias\ Stritt\ -\ Planung\ Montage\ Küchen.jpg',
        title: 'Website „Tobias Stritt“ (Projekt in Entwicklung)',
        description: `- <b>Projekt:</b> Konzeption und Gestaltung einer individuellen Website.
- <b>Meine Aufgabe:</b> Design und Umsetzung mit CMS (Sitejet).
- <b>Umsetzung:</b> Entwicklung von Layout, Struktur und visueller Gestaltung.
- <b>Fokus:</b> Klare Benutzerführung und modernes Webdesign.
- <b>Status:</b> Projekt aktuell in Entwicklung (Preview verfügbar).`
    },
    {
        id: 3,
        url: './img/Der\ NASCH\ e.V.jpg',
        title: 'Website für „Der NASCH e.V.“ (IHK-Abschlussprojekt)',
        description: `- <b>Projekt:</b> Gestaltung und Umsetzung einer Website für einen Verein.
- <b>Meine Aufgabe:</b> Entwicklung der Website von Konzept bis Umsetzung.
- <b>Umsetzung:</b> Realisierung mit HTML, CSS und JavaScript.
- <b>Fokus:</b> Benutzerfreundlichkeit, klare Struktur und visuelle Gestaltung.
- <b>Ergebnis:</b> Funktionale Website zur Darstellung der Vereinsinhalte.
- <b>Status:</b> Projekt aktuell als Referenz verfügbar.`
    },
    {
        id: 4,
        url: './img/waldtriathlon in Trainingen.jpg',
        title: 'Waldtriathlon – Event Website (Trainingsprojekt)',
        description: `- <b>Projekt:</b> Gestaltung und Umsetzung einer Event-Website für eine Sportveranstaltung.
- <b>Meine Aufgabe:</b> Konzeption, Design und technische Umsetzung der Website.
- <b>Umsetzung:</b> Entwicklung der Seitenstruktur, Einbindung von Bildern sowie Gestaltung der Benutzeroberfläche.
- <b>Fokus:</b> Übersichtliche Darstellung von Informationen (Event, Zeitplan, Anmeldung) und responsive Design.
- <b>Ergebnis:</b> Funktionale Website zur Präsentation eines Sportevents mit klarer Navigation und ansprechendem Layout.
- <b>Technologien:</b> HTML, CSS.`
    },
    {
        id: 5,
        url: './img/flyer/Moderne\ und\ dezente\ Outfits1.JPG',
        title: 'Werbeflyer „Moderne und dezente Outfits“ (Trainingsprojekt)',
        description: `- <b>Projekt:</b> Gestaltung eines mehrseitigen Werbeflyers im Bereich Mode.
- <b>Meine Aufgabe:</b> Layout, Bildauswahl und typografische Gestaltung.
- <b>Umsetzung:</b> Entwicklung eines klaren und modernen Designs mit Fokus auf visuelle Hierarchie.
- <b>Fokus:</b> Kombination von Bild und Text, strukturierte Informationsdarstellung und ansprechende Gestaltung.
- <b>Ergebnis:</b> Printprodukt zur Präsentation von Modeinhalten und Kontaktdaten.
- <b>Tools:</b> Adobe InDesign, Photoshop.`
    },
    {
        id: 6,
        url: './img/flyer/Moderne\ und\ dezente\ Outfits2.JPG',
        title: 'Werbeflyer „Moderne und dezente Outfits“ (Trainingsprojekt)',
        description: `- <b>Projekt:</b> Gestaltung eines mehrseitigen Werbeflyers im Bereich Mode.
- <b>Meine Aufgabe:</b> Layout, Bildauswahl und typografische Gestaltung.
- <b>Umsetzung:</b> Entwicklung eines klaren und modernen Designs mit Fokus auf visuelle Hierarchie.
- <b>Fokus:</b> Kombination von Bild und Text, strukturierte Informationsdarstellung und ansprechende Gestaltung.
- <b>Ergebnis:</b> Printprodukt zur Präsentation von Modeinhalten und Kontaktdaten.
- <b>Tools:</b> Adobe InDesign, Photoshop.`
    }
];

const imagestablet = [
    {
        id: 1,
        url: './img/WeProtect Berlin-Tablet.jpg',
        title: 'Berolina Security – Unternehmenswebsite',
        description: `- <b>Projekt:</b> Erstellung und Pflege einer Unternehmenswebsite im Sicherheitsbereich.
- <b>Meine Aufgabe:</b> Umsetzung der Website mit CMS (Sitejet), Strukturierung von Inhalten und Layout.
- <b>Umsetzung:</b> Gestaltung der Seitenstruktur, Integration von Texten und Bildern sowie Optimierung für mobile Endgeräte.
- <b>Fokus:</b> Responsive Design, klare Navigation und benutzerfreundliche Darstellung.
- <b>Ergebnis:</b> Moderne, übersichtliche Website zur Präsentation der Dienstleistungen.`
    },
    {
        id: 2,
        url: './img/Tobias Stritt - Planung Montage Küchen-Tablet.jpg',
        title: 'Website „Tobias Stritt“ (Projekt in Entwicklung)',
        description: `- <b>Projekt:</b> Konzeption und Gestaltung einer individuellen Website.
- <b>Meine Aufgabe:</b> Design und Umsetzung mit CMS (Sitejet).
- <b>Umsetzung:</b> Entwicklung von Layout, Struktur und visueller Gestaltung.
- <b>Fokus:</b> Klare Benutzerführung und modernes Webdesign.
- <b>Status:</b> Projekt aktuell in Entwicklung (Preview verfügbar).`
    },
    {
        id: 3,
        url: './img/Der NASCH e.V-Tablet.jpg',
        title: 'Website für „Der NASCH e.V.“ (IHK-Abschlussprojekt)',
        description: `- <b>Projekt:</b> Gestaltung und Umsetzung einer Website für einen Verein.
- <b>Meine Aufgabe:</b> Entwicklung der Website von Konzept bis Umsetzung.
- <b>Umsetzung:</b> Realisierung mit HTML, CSS und JavaScript.
- <b>Fokus:</b> Benutzerfreundlichkeit, klare Struktur und visuelle Gestaltung.
- <b>Ergebnis:</b> Funktionale Website zur Darstellung der Vereinsinhalte.
- <b>Status:</b> Projekt aktuell als Referenz verfügbar.`
    },
    {
        id: 4,
        url: './img/waldtriathlon in Trainingen-Tablet.jpg',
        title: 'Waldtriathlon – Event Website (Trainingsprojekt)',
        description: `- <b>Projekt:</b> Gestaltung und Umsetzung einer Event-Website für eine Sportveranstaltung.
- <b>Meine Aufgabe:</b> Konzeption, Design und technische Umsetzung der Website.
- <b>Umsetzung:</b> Entwicklung der Seitenstruktur, Einbindung von Bildern sowie Gestaltung der Benutzeroberfläche.
- <b>Fokus:</b> Übersichtliche Darstellung von Informationen (Event, Zeitplan, Anmeldung) und responsive Design.
- <b>Ergebnis:</b> Funktionale Website zur Präsentation eines Sportevents mit klarer Navigation und ansprechendem Layout.
- <b>Technologien:</b> HTML, CSS.`
    }
];

const imagesmobile = [
    {
        id: 1,
        url: './img/WeProtect Berlin-Mobile.jpg',
        title: 'Berolina Security – Unternehmenswebsite',
        description: `- <b>Projekt:</b> Erstellung und Pflege einer Unternehmenswebsite im Sicherheitsbereich.
- <b>Meine Aufgabe:</b> Umsetzung der Website mit CMS (Sitejet), Strukturierung von Inhalten und Layout.
- <b>Umsetzung:</b> Gestaltung der Seitenstruktur, Integration von Texten und Bildern sowie Optimierung für mobile Endgeräte.
- <b>Fokus:</b> Responsive Design, klare Navigation und benutzerfreundliche Darstellung.
- <b>Ergebnis:</b> Moderne, übersichtliche Website zur Präsentation der Dienstleistungen.`
    },
    {
        id: 2,
        url: './img/Tobias Stritt - Planung Montage Küchen-Mobile.jpg',
        title: 'Website „Tobias Stritt“ (Projekt in Entwicklung)',
        description: `- <b>Projekt:</b> Konzeption und Gestaltung einer individuellen Website.
- <b>Meine Aufgabe:</b> Design und Umsetzung mit CMS (Sitejet).
- <b>Umsetzung:</b> Entwicklung von Layout, Struktur und visueller Gestaltung.
- <b>Fokus:</b> Klare Benutzerführung und modernes Webdesign.
- <b>Status:</b> Projekt aktuell in Entwicklung (Preview verfügbar).`
    },
    {
        id: 3,
        url: './img/Der NASCH e.V-Mobile.jpg',
        title: 'Website für „Der NASCH e.V.“ (IHK-Abschlussprojekt)',
        description: `- <b>Projekt:</b> Gestaltung und Umsetzung einer Website für einen Verein.
- <b>Meine Aufgabe:</b> Entwicklung der Website von Konzept bis Umsetzung.
- <b>Umsetzung:</b> Realisierung mit HTML, CSS und JavaScript.
- <b>Fokus:</b> Benutzerfreundlichkeit, klare Struktur und visuelle Gestaltung.
- <b>Ergebnis:</b> Funktionale Website zur Darstellung der Vereinsinhalte.
- <b>Status:</b> Projekt aktuell als Referenz verfügbar.`
    },
    {
        id: 4,
        url: './img/waldtriathlon in Trainingen-Mobile.jpg',
        title: 'Waldtriathlon – Event Website (Trainingsprojekt)',
        description: `- <b>Projekt:</b> Gestaltung und Umsetzung einer Event-Website für eine Sportveranstaltung.
- <b>Meine Aufgabe:</b> Konzeption, Design und technische Umsetzung der Website.
- <b>Umsetzung:</b> Entwicklung der Seitenstruktur, Einbindung von Bildern sowie Gestaltung der Benutzeroberfläche.
- <b>Fokus:</b> Übersichtliche Darstellung von Informationen (Event, Zeitplan, Anmeldung) und responsive Design.
- <b>Ergebnis:</b> Funktionale Website zur Präsentation eines Sportevents mit klarer Navigation und ansprechendem Layout.
- <b>Technologien:</b> HTML, CSS.`
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

    const currentImage = currentImages.find(img => img.id === currentImageId);
    showProjectInfo(currentImage);
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
    showProjectInfo(selectedImage);
    updateStatus();
}

function showProjectInfo(image) {
    const titleEl = document.getElementById('projectTitle');
    const descEl = document.getElementById('projectDescription');

    if (!titleEl || !descEl) return;

    if (image) {
        titleEl.textContent = image.title;
        descEl.innerHTML = image.description.replace(/\n/g, '<br>');
    } else {
        titleEl.textContent = 'Wähle ein Projektbild';
        descEl.textContent = 'Klicke auf ein Bild, um hier die Projektdaten anzuzeigen.';
    }
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
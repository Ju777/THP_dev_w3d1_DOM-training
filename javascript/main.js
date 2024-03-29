// Éléments pour génération de menu aléatoire
const mainCourses = ["Filet de turbot de la mer Noire", "Tablier de sapeur", "Gigot d'agneau", "Faisan de forêt", "Trio de quinoa, chou kale et pousses d'épinard"];
const techniques = ["à la cocotte", "minute", "avec sa sauce hollandaise", "façon sud-ouest", "comme chez ma grand-mère", "déglacé au saké", "maturé en fût de chêne"];
const sides = ["une purée de topinambour", "ses frites truffées", "des châtaignes croustillantes", "une brunoise carotte-cèleri", "un oeuf parfait", "sa crème veloutée de fromages affinés"];
const seasonings = ["au yuzu rouge.", "au poivre vert de Sichuan.", "et une pointe de safran.", "à l'ail noir.", "et un peu de sucre en poudre."];

const getRandom = (data) => data[Math.floor(Math.random() * data.length)];

const menu = `${getRandom(mainCourses)} ${getRandom(techniques)}, avec ${getRandom(sides)} ${getRandom(seasonings)}`
// FIN

// Système de navigation par onglets
const btnHomepage = document.getElementById('btn-homepage');
const btnMenu = document.getElementById('btn-menu');
const btnGalleryPage = document.getElementById('btn-gallery');

const homepage = document.getElementById('homepage-container');
const menuPage = document.getElementById('menu-container');
const galleryPage = document.getElementById('gallery-container');


btnMenu.addEventListener('click', () => {
    menuPage.classList.remove('d-none');
    homepage.classList.add('d-none');
    galleryPage.classList.add('d-none');
});

btnHomepage.addEventListener('click', () => {
    homepage.classList.remove('d-none');
    menuPage.classList.add('d-none');
    galleryPage.classList.add('d-none');
});

btnGalleryPage.addEventListener('click', () => {
    galleryPage.classList.remove('d-none');
    menuPage.classList.add('d-none');
    homepage.classList.add('d-none');
    
});
// FIN

// MISE A JOUR DU MENU AVEC UN MENU ALÉATOIRE
const textMenuContainer = document.getElementById('text-menu-container');
const btnRandom = document.getElementById('btn-random');
btnRandom.addEventListener('click', () => {
    textMenuContainer.innerHTML = menu;
});
// FIN

// TRAVAIL SUR LA POPUP
const popup = document.getElementById('modal');
const mainContainer = document.getElementById('main-container');

document.body.addEventListener('mouseleave', () =>{
    popup.style.display = 'block';
    mainContainer.style.filter = "grayscale(75%)";
    document.body.addEventListener('click', () => {
                popup.style.display = 'none';
                mainContainer.style.filter = "grayscale(0%)";  
    });
});

const popupClosingLink = document.getElementById('modal-close');
popupClosingLink.addEventListener('click', () =>{
    popup.style.display = 'none';
    mainContainer.style.filter = "grayscale(0%)";
});

// FIN

// GALLERIE DE PHOTOS
    // console.log(test.clientWidth );
    // const bounds = test.getBoundingClientRect();
    // console.log(bounds);
    // console.log(bounds.height);

const galleryContainer = document.getElementById('gallery-container');
const allImages = document.getElementsByTagName('img');
let draggedImage;
let targetImage;

// Tout d'abord : récupérer la photo sur laquelle on clique
galleryContainer.addEventListener('mousedown', (e) => {
    for(image of allImages) {
        if(e.clientX >= image.x && e.clientX <= image.x + image.width && e.clientY >= image.y && e.clientY <= image.y + image.height) {
            draggedImage = image;
            // log de vérif
            // console.log(draggedImage);
        }
    }
})

// Ensuite : récupérer les coordonnées de la zone de fin de drag
for(image of allImages) {
    image.addEventListener('dragend', (e) => {
        console.log(e.clientX, e.clientY);
        console.log(draggedImage);
    

        // Maintenant : récupérer l'id de l'image de la zone de drop
        for(image of allImages) {
            if(e.clientX >= image.x && e.clientX <= image.x + image.width && e.clientY >= image.y && e.clientY <= image.y + image.height) {
                targetImage = image;
                // log de vérif
                console.log(targetImage);
            }
        }

        // targetImage prend maintenant le src de draggedImage
        let tmp = targetImage.src;
        targetImage.setAttribute('src', draggedImage.getAttribute('src'));

        // et targetImage prend le src de draggedImage.
        draggedImage.setAttribute('src', tmp);
    });
}
// FIN
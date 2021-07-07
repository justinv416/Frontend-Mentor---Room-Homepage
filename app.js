//Selectors
//Controls
const rightBtn = document.querySelector('.button-right'),
    leftBtn = document.querySelector('.button-left'),
    mobileRightBtn = document.querySelector('.mobile-button-right'),
    mobileLeftBtn = document.querySelector('.mobile-button-left');
//Hero elements
const heroImage = document.querySelector('.hero-image'),
     heroImageMobile = document.querySelector('.hero-image-mobile'),
     heroHeading = document.querySelector('.main-heading'),
     heroContent = document.querySelector('.main-content');
//Nav elements
const navbar = document.querySelector('.nav'),
     iconClose = document.querySelector('.icon-close'),
     iconHamburger = document.querySelector('.icon-hamburger');
// Overlay
const overlay = document.querySelector('.overlay');
// Arrays for content
const images = [
    './images/desktop-image-hero-1.jpg',
    './images/desktop-image-hero-2.jpg',
    './images/desktop-image-hero-3.jpg'
];

const mobileImages = [
    './images/mobile-image-hero-1.jpg',
    './images/mobile-image-hero-2.jpg',
    './images/mobile-image-hero-3.jpg'
]

const headings = [
    'Discover innovative ways to decorate',
    'We are available all across the globe',
    'Manufactured with the best materials'
];

const content = [
    'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
    'With stores all over the world, it\'s easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don\'t hesitate to contact us today.',
    'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.'
];
//Initial index for functions
let index = 0;            
heroImage.src = images[index];
heroImageMobile.src = mobileImages[index];
heroHeading.innerHTML = headings[0]; 
heroContent.innerHTML = content[0];
//Functions for image sliders
const nextImage = () => {
    index++;
    if (index > 2) {
        index = 0
    }         
    heroImage.src = images[index]
    heroHeading.innerHTML = headings[index]
    heroContent.innerHTML = content[index]               
};

const prevImage = () => {
    index--;
    if (index < 0) {
        index = 2;
    }
    heroImage.src = images[index] 
    heroHeading.innerHTML = headings[index]
    heroContent.innerHTML = content[index]                     
};

const nextImageMobile = () => {
    index++;
    if (index > 2) {
        index = 0
    }         
    heroImage.src = images[index]
    heroImageMobile.src = mobileImages[index]
    heroHeading.innerHTML = headings[index]
    heroContent.innerHTML = content[index]    
}

const prevImageMobile = () => {
    index--;
    if (index < 0) {
        index = 2;
    }
    heroImage.src = images[index]
    heroImageMobile.src = mobileImages[index] 
    heroHeading.innerHTML = headings[index]
    heroContent.innerHTML = content[index]  
}
//Functions for navigation bars
const openNav = () => {
   navbar.style.display = 'flex';
   overlay.style.display = 'block'
}

const closeNav = () => {
    navbar.style.display = '';
    overlay.style.display = ''; 
}
//Event listeners
rightBtn.addEventListener('click', nextImage);
leftBtn.addEventListener('click', prevImage);
mobileLeftBtn.addEventListener('click', prevImageMobile);
mobileRightBtn.addEventListener('click', nextImageMobile);
iconClose.addEventListener('click', closeNav);
iconHamburger.addEventListener('click', openNav);
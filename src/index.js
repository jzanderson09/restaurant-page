import './styles.css';
import generateHome from './home.js';
import generateSubMenu from './menu.js';
import generateOptions from './options.js';

function switchPage(pageType) {
    content.innerHTML = '';    
    switch(pageType) {
        case 'menu':
            content.replaceChildren(generateOptions(), generateSubMenu());
            break;
        case 'about':
            alert(pageType);
            break;
        case 'contact':
            alert(pageType);
            break;
        default:
            content.replaceChildren(generateHome());
    }
}

let content = document.querySelector('.content');
                
const navLinks = document.querySelectorAll('.nav-links');
navLinks.forEach(btn => {
    btn.addEventListener('click', () => switchPage(btn.id));
});

switchPage('home');
import './styles.css';
import generateHome from './home';
import generateOptions from './options';
import generateSubMenu from './menu';
import generateContact from './contact';

function switchPage(pageType) {
    let content = document.querySelector('.content');
    content.innerHTML = '';    
    switch(pageType) {
        case 'menu':
            content.append(generateOptions(), generateSubMenu());
            break;
        case 'contact':
            content.append(generateContact());
            break;
        default:
            content.append(generateHome());
    }
}
                
const navLinks = document.querySelectorAll('.nav-links');
navLinks.forEach(btn => {
    btn.addEventListener('click', () => switchPage(btn.id));
});

switchPage('home');
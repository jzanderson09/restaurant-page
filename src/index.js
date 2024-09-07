import './styles.css';
import generateHome from './home';
import generateSubMenu from './menu';
import generateOptions from './options';

function switchPage(pageType) {
    let content = document.querySelector('.content');
    content.innerHTML = '';    
    switch(pageType) {
        case 'menu':
            content.append(generateOptions(), generateSubMenu());
            break;
        case 'about':
            alert(pageType);
            break;
        case 'contact':
            alert(pageType);
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
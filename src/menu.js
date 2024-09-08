import generateAppetizers from './appetizers.js';
import generateDesserts from './desserts.js';
import generateDrinks from './drinks.js';
import generateEntrees from './entrees.js';

//Returns submenu options and submenu (appetizers, entrees, etc):
function generateSubMenu() {
    let menuContent = document.createElement('div');
    menuContent.className = 'menu-content';
    let subMenu = generateAppetizers();
    return subMenu;
}

export function changeSubMenu(subMenuId) {
    let subMenu = document.querySelector('.food-sub-menu');
    subMenu.innerHTML = '';
    switch(subMenuId) {
        case 'entrees':
            subMenu.replaceWith(generateEntrees());
            break;
        case 'desserts':
            subMenu.replaceWith(generateDesserts());
            break;
        case 'drinks':
            subMenu.replaceWith(generateDrinks());
            break;
        default:
            subMenu.replaceWith(generateAppetizers());
    }
}

export default generateSubMenu;
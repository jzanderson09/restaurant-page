import generateAppetizers from './appetizers';
import generateEntrees from './entrees';

// .food-sub-menu > 
//Returns submenu options and submenu (appetizers, entrees, etc):
function generateSubMenu() {
    let menuContent = document.createElement('div');
    menuContent.className = 'menu-content';
    let subMenu = generateAppetizers();
    return subMenu;
}

export function changeSubMenu(subMenuId) {
    let subMenu = document.querySelector('.food-sub-menu');
    switch(subMenuId) {
        case 'entrees':
            subMenu.replaceWith(generateEntrees());
            break;
        default:
            subMenu.replaceWith(generateAppetizers());
    }
}

export default generateSubMenu;
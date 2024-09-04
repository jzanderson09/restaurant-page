import { changeSubMenu } from "./menu";

//returns option button elements:
function generateOptions() {
    let menuOptions = document.createElement('div');
    menuOptions.className = 'menu-options';

    let appetizers = document.createElement('button');
    appetizers.id = 'appetizers';
    let entrees = document.createElement('button');
    entrees.id = 'entrees';
    let desserts = document.createElement('button');
    desserts.id = 'desserts';
    let drinks = document.createElement('button');
    drinks.id = 'drinks';

    [appetizers, entrees, desserts, drinks].forEach(option => {
        option.className = 'option';
        let optionTitle = option.id.charAt(0).toUpperCase() 
        + option.id.slice(1, option.length);
        option.textContent = optionTitle;
        option.addEventListener('click', () => changeSubMenu(option.id));
        menuOptions.appendChild(option);
    });
    
    return menuOptions;
}



export default generateOptions;
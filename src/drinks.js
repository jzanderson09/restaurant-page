import negroni from './menu/drinks/negroni.jpg';
import hugo from './menu/drinks/hugo.jpg';
import bellini from './menu/drinks/bellini.jpg';
import rossini from './menu/drinks/rossini.jpg';

import generateFood from './food.js';

function generateDrinks() {
    let drinks = [
        { food: 'Negroni', price: '$9', image: negroni },
        { food: 'Hugo', price: '$7', image:  hugo},
        { food: 'Bellini', price: '$12', image: bellini },
        { food: 'Rossini', price: '$10', image: rossini },
    ];

    return generateFood(drinks, 'drinks');
}

export default generateDrinks;
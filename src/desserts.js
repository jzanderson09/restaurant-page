import tiramisu from './menu/desserts/tiramisu.jpg';
import gelato from './menu/desserts/gelato.jpg';
import pannacotta from './menu/desserts/pannacotta.jpg';
import biscotti from './menu/desserts/biscotti.jpg';
import affogato from './menu/desserts/affogato.jpg';
import zabaglione from './menu/desserts/zabaglione.jpg';
import macarons from './menu/desserts/macarons.jpg';

import generateFood from './food.js';

function generateDesserts() {
    let desserts = [
        { food: 'Tiramisù', price: '$12', image:tiramisu },
        { food: 'Gelato', price: '$5', image: gelato },
        { food: 'Pannacotta', price: '$7', image: pannacotta },
        { food: 'Biscotti', price: '$5', image: biscotti },
        { food: 'Affogato', price: '$8', image: affogato },
        { food: 'Zabaglione', price: '$8', image: zabaglione },
        { food: 'Macarons', price: '$6', image: macarons }

    ];

    return generateFood(desserts, 'desserts');
}

export default generateDesserts;
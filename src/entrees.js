import risotto from './menu/entrees/risotto.jpg';
import bolognese from './menu/entrees/bolognese.jpg';
import cioppino from './menu/entrees/cioppino.jpg';
import fettuccineAlfredo from './menu/entrees/fettuccine_alfredo.jpg';
import gnocchi from './menu/entrees/gnocchi.jpg';
import pizzaMargherita from './menu/entrees/pizza_margherita.jpg';
import polenta from './menu/entrees/polenta.jpg';


import generateFood from './food.js';

function generateEntrees() {
    let entrees = [
        { food: 'Risotto', price: '$15', image: risotto },
        { food: 'Bolognese', price: '$14', image: bolognese },
        { food: 'Cioppino', price: '$12', image: cioppino },
        { food: 'Fettuccine Alfredo', price: '$16', image: fettuccineAlfredo },
        { food: 'Gnocchi', price: '$12', image: gnocchi },
        { food: 'Pizza Margherita', price: '$18', image: pizzaMargherita },
        { food: 'Polenta', price: '$8', image: polenta },

    ];

    return generateFood(entrees, 'entrees');
}

export default generateEntrees;
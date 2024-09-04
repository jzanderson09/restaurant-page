import tomatoBruschetta from './menu/appetizers/tomato_bruschetta.jpg';
import capreseSalad from './menu/appetizers/caprese_salad.jpg';
import stuffedArtichokes from './menu/appetizers/stuffed_artichokes.jpg';
import carbonaraArancini from './menu/appetizers/carbonara_arancini.jpg';
import bruschettaWithTomatoAndBasil from './menu/appetizers/bruschetta_with_tomato_and_basil.jpg';
import focacciaBread from './menu/appetizers/focaccia_bread.jpg';
import prosciuttoStuzzichini from './menu/appetizers/prosciutto_stuzzichini.jpg';
import garlicSoup from './menu/appetizers/garlic_soup.jpg';

//returns appetizers sub-menu:
function generateAppetizers() {
    let appetizersMenu = document.createElement('div');
    appetizersMenu.className = 'food-sub-menu';
    appetizersMenu.id = 'appetizers-menu';


    //appetizers:
    let foodCard = document.createElement('div');
    foodCard.className = 'food-card';
    let food = document.createElement('p');
    food.id = 'food';
    food.className = 'food-info';
    let price = document.createElement('p');
    price.id = 'price';
    price.className = 'food-info';
    let foodImage = document.createElement('img');
    foodImage.className = 'food-image';

    let appetizers = [{food: 'Tomato Bruschetta', price: '$7', image: tomatoBruschetta}, 
    {food: 'Caprese Salad', price: '$10', image: capreseSalad}, 
    {food: 'Stuffed Artichokes', price: '$12', image: stuffedArtichokes},
    {food: 'Carbonara Arancini', price: '$8', image: carbonaraArancini}, 
    {food: 'Bruschetta with Tomato and Basil', price: '$7', image: bruschettaWithTomatoAndBasil},
    {food: 'Focaccia Bread', price: '$8', image: focacciaBread},
    {food: 'Prosciutto Stuzzichini', price: '$12', image: prosciuttoStuzzichini},
    {food: 'Garlic Soup', price: '$10', image: garlicSoup}];

    appetizers.forEach(appetizer => {
        let currentCard = foodCard.cloneNode();
        let currentFood = food.cloneNode();
        currentFood.textContent = appetizer['food'];
        let currentPrice = price.cloneNode();
        currentPrice.textContent = appetizer['price'];
        let currentImage = foodImage.cloneNode();
        currentImage.src = appetizer['image'];
        currentCard.append(currentFood, currentPrice, currentImage);
        appetizersMenu.appendChild(currentCard);
    });

    return appetizersMenu;
}

export default generateAppetizers;
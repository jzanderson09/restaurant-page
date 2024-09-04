import risotto from './menu/entrees/risotto.jpg';

function generateEntrees() {
    let entreesMenu = document.createElement('div');
    entreesMenu.className = 'food-sub-menu';
    entreesMenu.id = 'entrees-menu';

    //entrees:
    let foodCard = document.createElement('div');
    foodCard.className = 'food-card';
    let food = document.createElement('p');
    food.className = 'food';
    let price = document.createElement('p');
    price.className = 'price';
    let foodImage = document.createElement('img');
    foodImage.className = 'food-image';

    let entrees = [{food: '', price: '', image: risotto}];
    
    entrees.forEach(entree => {
        let currentCard = foodCard.cloneNode();
        let currentFood = food.cloneNode();
        currentFood.textContent = entree['food'];
        let currentPrice = price.cloneNode();
        currentPrice.textContent = entree['price'];
        let currentImage = foodImage.cloneNode();
        currentImage.src = entree['image'];
        currentCard.append(currentFood, currentPrice, currentImage);
        entreesMenu.appendChild(currentCard);
    });

    return entreesMenu;
}

export default generateEntrees;
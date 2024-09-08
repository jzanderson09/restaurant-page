function generateFood(foodObjArr, foodType) {
    let foodMenu = document.createElement('div');
    foodMenu.className = 'food-sub-menu';
    foodMenu.id = `${foodType}-menu`;

    let foodCard = document.createElement('div');
    foodCard.className = 'food-card';
    let food = document.createElement('p');
    food.className = 'food-info';
    let price = document.createElement('p');
    price.className = 'food-info';
    let foodImage = document.createElement('img');
    foodImage.className = 'food-image';

    foodObjArr.forEach(item => {
        let currentCard = foodCard.cloneNode();
        let currentFood = food.cloneNode();
        currentFood.textContent = item['food'];
        let currentPrice = price.cloneNode();
        currentPrice.textContent = item['price'];
        let currentImage = foodImage.cloneNode();
        currentImage.src = item['image'];
        currentCard.append(currentFood, currentPrice, currentImage);
        foodMenu.appendChild(currentCard);
    });

    return foodMenu;
}

export default generateFood;
import Nonna from './home/nonna-home.jpg';

function generateHome() {
    let homeDiv = document.createElement('div');
    homeDiv.id = 'home-div';

    let homeHeader = document.createElement('h1');
    homeHeader.id = 'home-header';
    homeHeader.textContent = 'Cucina Della Nonna';

    let headerQuote = document.createElement('p');
    headerQuote.id = 'header-quote';
    headerQuote.textContent = 'Dai nostri cuori al vostro piatto';
    
    let nonnaImg = document.createElement('img');
    nonnaImg.id = 'nonna-img';
    nonnaImg.src = Nonna;

    let info = document.createElement('p');
    info.className = 'content-info';
    info.textContent = 'Our recipes of Italian cuisine ' + 
    'have been passed down for 5 generations. Our food ' + 
    'has brought our family and friends together to ' + 
    'enjoy the little things that really matter in life. ' + 
    'We sincerely hope it does the same for you.';
    
    homeDiv.append(homeHeader, headerQuote, nonnaImg, info);
    return homeDiv;
}

export default generateHome;
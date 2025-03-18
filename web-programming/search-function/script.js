console.log('hehe :D')

const food = ['Pho', 'Com tam', 'Bun bo', 'Bun cha', 'Banh can', 'Banh trang', 'Pizza', 'Sushi'];
// Render all the food inside our food array to respect the Single source of Truth principle
const menuList = document.querySelector('#menu-list');

// Dynamic render
food.forEach(f => {
    const listItem = document.createElement('li');
    listItem.textContent = f;
    menuList.append(listItem);
});


// 1. Get the user input from the box
const searchForm = document.querySelector('#search-form');
const searchResult = document.querySelector('#search-result');

searchForm.addEventListener('submit', (e) => {
    e.preventDefault(); // prevent the page from reloading

    const searchValue = searchForm[0].value;
    
    // const foundFood = food.find(f => f === searchValue);

    // 2. Compare the input to the food we have in our menu
    // const found = food.includes(searchValue);
    const found = food.find(f => f.toLowerCase() === searchValue.toLowerCase());

    // Pizza - PIZZA => pizza vs pizza

    console.log(found);

    // 3. Display possible outcomes:
    // - Found: You ordered: ...
    // - Not found: Sorry we dont have ...
    if (found) {
        searchResult.textContent = 'You ordered: ' + found + '!!';
    } else {
        searchResult.textContent = 'Sorry we dont have ' + searchValue + ':(';
    }

    // reset the input for the next search
    searchForm[0].value = '';
    
});


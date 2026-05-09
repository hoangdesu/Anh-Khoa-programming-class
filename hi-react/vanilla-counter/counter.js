const countText = document.querySelector('#count-text');

const increaseBtn = document.querySelector('#increase-btn');

let count = 1;

// 1. event listener
increaseBtn.addEventListener('click', () => {
    // 2. update variable
    count++;
    console.log('count: ', count);

    // 3. update UI
    countText.textContent = `Count: ${count}`;
});

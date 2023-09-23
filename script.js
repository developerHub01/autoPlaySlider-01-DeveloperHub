const wrapper = document.querySelector('.wrapper');
const leftBtn = document.querySelector('.left');
const rightBtn = document.querySelector('.right');
let cards = document.querySelectorAll('.card');

cards = Array.from(cards);
let currentIndex = 0;

console.log(cards);

const getCurrentIndex = ()=>{
    return cards.findIndex(card => card.classList.contains('active'));
}

rightBtn.addEventListener('click', ()=>{
    currentIndex = getCurrentIndex();
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex+1)%cards.length;
    cards[currentIndex].classList.add('active');
})
leftBtn.addEventListener('click', ()=>{
    currentIndex = getCurrentIndex();
    cards[currentIndex].classList.remove('active');
    currentIndex = (cards.length + currentIndex-1)%cards.length;
    cards[currentIndex].classList.add('active');
})

const intervalInnerCode = ()=>{
    cards[currentIndex].classList.remove('active');
    currentIndex = (currentIndex+1)%cards.length;
    cards[currentIndex].classList.add('active');
}

let animatInterval = setInterval(()=>{
    intervalInnerCode();
}, 1500);

wrapper.addEventListener('mouseover', ()=>{
    clearInterval(animatInterval);
})
wrapper.addEventListener('mouseleave', ()=>{
    animatInterval = setInterval(()=>{
        intervalInnerCode();
    }, 1500);
})
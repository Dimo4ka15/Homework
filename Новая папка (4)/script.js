let wrapper = document.querySelector('.wrapper')
let btn = document.querySelector('.button')
let btnDown = document.querySelector('.down')
let btnRight = document.querySelector('.right')
let btnLeft = document.querySelector('.left')
let btnTop = document.querySelector('.top')

btn.addEventListener('click', () => create())
btnDown.addEventListener('click', () => down())
btnRight.addEventListener('click', () => right())
btnLeft.addEventListener('click', () => left())
btnTop.addEventListener('click', () => a ())
let size;
let r = 0, t = 0;

let create = () => {
    size = document.querySelector('.input_text').value
    if(size<50 || size>500) return
    
    let block = document.createElement('div')
    block.classList.add('block')
    block.style.width = size+'px'
    block.style.height = size+'px'

    wrapper.insertAdjacentElement('afterbegin',block)
} 

let down = () => {
    let block = document.querySelector('.block');
    if((+size + t)+10 > 500) return
    t += 10;
    block.style.marginTop = t + 'px';
}

let right  = () => {
    let block = document.querySelector('.block');
    if((+size + t)+10 > 500) return
    t += 10;
    block.style.marginLeft = t + 'px';
}
let left  = () => {
    let block = document.querySelector('.block');
    if((+size + t)+10 > 500) return
    t += -10;
    block.style.marginLeft = t + 'px';
}

let a  = () => {
    let block = document.querySelector('.block');
    if((+size + t)+10 > 500) return
    t += -10;
    block.style.marginTop = t + 'px';
}
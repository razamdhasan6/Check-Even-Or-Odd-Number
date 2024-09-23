let inputbox = document.querySelector('.inputbox');
let btn = document.querySelector('.btn');
let display=document.querySelector('.display')
let btnfun=btn.addEventListener('click',() => {
    let box = inputbox.value;
    display.textContent = "";

        if(box==='') {
        display.textContent = 'is not valid number'
        }
        else if (box % 2 === 0) {
            display.textContent = `${inputbox.value} is Even Number`
        }
        else if (box % 2 !== 0) {
            display.textContent = `${inputbox.value} is Odd Number`
        }
        else {
            display.textContent = 'is not valid number'
        }
    

})

const wineList = document.querySelector('.header__button_left')
const wineTest = document.querySelector('.header__button_right')

wineList.addEventListener('click', ()=> setScrollTo())
wineTest.addEventListener('click', ()=> etAnotherScrollTo())

function setScrollTo(){
    window.scrollTo({
       left: 0,
       top: 1810,
       behavior: "smooth"
     })
}
function etAnotherScrollTo(){
    window.scrollTo({
       left: 0,
       top: 2750,
       behavior: "smooth"
    })
}
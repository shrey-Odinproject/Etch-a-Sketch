let oneDivSize // globally declaring 
do {
    oneDivSize = parseInt(prompt('entr dimension'));
} // asks the dimension of grid to user}
while (oneDivSize > 100); // only accepts value less than 50 else it asks again

const body = document.querySelector('body')
const mainDiv = document.querySelector('.mainDiv')

mainDiv.setAttribute('style', `height :${584.6}px;width:${584.6}px`) // main div is 500x500

for (let i = 0; i < oneDivSize * oneDivSize; i++) {
    const gridDiv = document.createElement('div')
    gridDiv.classList.add('gridDiv')
    mainDiv.appendChild(gridDiv)
}// created divs using for loop

const gridDivNodeList = document.querySelectorAll('.gridDiv')

// adding hover feature for all divs
gridDivNodeList.forEach(divElm => {
    divElm.addEventListener('mouseover', (e) => e.target.classList.add('hovering'))
    //divElm.addEventListener('mouseout', (e) => e.target.classList.remove('hovering'))
    divElm.setAttribute('style', `height :${584.6 / oneDivSize}px;width:${584.6 / oneDivSize}px`) // here i setted width and height of a single grid div
})// above line causes bug for strange values like 7,13,17 i.e grid is filled strangly

const buttonDiv=document.createElement('div')
buttonDiv.classList.add('buttondiv')
buttonDiv.setAttribute('style','width:500px')
body.appendChild(buttonDiv)

const reset = document.createElement('button')
reset.textContent = 'RESET'
buttonDiv.appendChild(reset)

reset.addEventListener('click', (e) => gridDivNodeList.forEach(divElm => divElm.classList.remove('hovering')))// resets all divs
reset.addEventListener('mouseover', (e) => e.target.classList.add('hoveringbtn'))
reset.addEventListener('mouseout', (e) => e.target.classList.remove('hoveringbtn'))

/*const RGB = document.createElement('button')
RGB.textContent = 'RGB'
buttonDiv.appendChild(RGB)

RGB.addEventListener('mouseover', (e) => e.target.classList.add('hoveringbtn'))
RGB.addEventListener('mouseout', (e) => e.target.classList.remove('hoveringbtn'))*/

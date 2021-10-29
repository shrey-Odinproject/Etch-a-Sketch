let oneDivSize=parseInt(prompt('entr dimension')) // asks the dimension of grid to user

const body = document.querySelector('body')
const mainDiv = document.querySelector('.mainDiv')
mainDiv.setAttribute('style', `height :${500}px;width:${500}px`)
for (let i = 0; i < oneDivSize*oneDivSize; i++) {
    const gridDiv = document.createElement('div')
    gridDiv.classList.add('gridDiv')
    mainDiv.appendChild(gridDiv)
}// created divs using for loop

const gridDivNodeList = document.querySelectorAll('.gridDiv')

// adding hover feature for all divs
gridDivNodeList.forEach(divElm => {
    divElm.addEventListener('mouseover', (e) => e.target.classList.add('hovering'))
    //divElm.addEventListener('mouseout', (e) => e.target.classList.remove('hovering'))
    divElm.setAttribute('style', `height :${500 / oneDivSize}px;width:${500 / oneDivSize}px`) // here i setted width and height of a single grid div
})

const reset = document.createElement('button')
reset.textContent = 'RESET'
body.appendChild(reset)

reset.addEventListener('click', (e) => gridDivNodeList.forEach(divElm => divElm.classList.remove('hovering')))// resets all divs
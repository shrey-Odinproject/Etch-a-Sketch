const body=document.querySelector('body')
const mainDiv = document.querySelector('.mainDiv')
for (let i = 0; i < 256; i++) {
    const gridDiv = document.createElement('div')
    gridDiv.classList.add('gridDiv')
    mainDiv.appendChild(gridDiv)
}// created divs using for loop
const gridDivNodeList = document.querySelectorAll('.gridDiv')

// adding hover feature for all divs
gridDivNodeList.forEach(divElm => {
    divElm.addEventListener('mouseover', (e) => e.target.classList.add('hovering'))
    //divElm.addEventListener('mouseout', (e) => e.target.classList.remove('hovering'))

})

const reset = document.createElement('button')
reset.textContent='RESET'
body.appendChild(reset)

reset.addEventListener('click', (e) => gridDivNodeList.forEach(divElm =>divElm.classList.remove('hovering')))// resets all divs
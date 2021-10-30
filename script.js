const body = document.querySelector('body')
const mainDiv = document.querySelector('.mainDiv')

const mainDivDimensions = '500px'
let gridDimension; // stores the dimension of grid eg 10 ,4 (translates to 10x10 4x4)
do {
    gridDimension = parseInt(prompt('entr dimension'));
} // asks the dimension of grid to user}
while (gridDimension > 100); // only accepts value less than 101 else it asks again

mainDiv.setAttribute('style',
    `height :${mainDivDimensions};
width:${mainDivDimensions};
grid-template-columns:${'auto '.repeat(gridDimension)};
grid-template-row:${'auto '.repeat(gridDimension)};`)// setting up the grid area and num of rows and col in grid depending on grid dimension

function makeMainDivChilds(dimension) { //function to create grid divs eg if 10 then 100 divs are created that ar eto be placed in 10x10
    for (let i = 0; i < dimension * dimension; i++) {
        const gridDiv = document.createElement('div')
        gridDiv.classList.add('gridDiv')
        mainDiv.appendChild(gridDiv)
    }

}

makeMainDivChilds(gridDimension) // creates divs by calling function

const gridDivNodeList = document.querySelectorAll('.gridDiv') // nodelist of all griddivs
gridDivNodeList.forEach(divElm => {
    divElm.addEventListener('mouseover', (e) => e.target.classList.add('hovering'))
})

const buttonDiv = document.createElement('div') // this will store all divs
buttonDiv.classList.add('buttondiv')
buttonDiv.setAttribute('style', `width:${mainDivDimensions}`)
body.appendChild(buttonDiv)

const reset = document.createElement('button')
reset.textContent = 'RESET'
buttonDiv.appendChild(reset)

reset.addEventListener('click', (e) => gridDivNodeList.forEach(divElm => divElm.classList.remove('hovering')))// resets all divs
reset.addEventListener('mouseover', (e) => e.target.classList.add('hoveringbtn'))
reset.addEventListener('mouseout', (e) => e.target.classList.remove('hoveringbtn'))
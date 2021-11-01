const body = document.querySelector('body')
const mainDiv = document.querySelector('.mainDiv')

let rgb = false


const mainDivDimensions = '500px'
let gridDimension; // stores the dimension of grid eg 10 ,4 (translates to 10x10 4x4)
do {
    gridDimension = parseInt(prompt('entr dimension from 2 to 100'));
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
const gridDivNodeList = document.querySelectorAll('.gridDiv') // nodelist of all griddivs created


const buttonDiv = document.createElement('div') // this will store all buttons
buttonDiv.classList.add('buttondiv')
buttonDiv.setAttribute('style', `width:${mainDivDimensions}`)
body.appendChild(buttonDiv)

const reset = document.createElement('button')
reset.textContent = 'RESET'
buttonDiv.appendChild(reset)

const RGB = document.createElement('button')
RGB.textContent = 'To RGB'
buttonDiv.appendChild(RGB)

const allButtons = document.querySelectorAll('.buttondiv button') //all buttons in buttondiv
allButtons.forEach(button => {// common action for all buttons

    button.addEventListener('mouseover', (e) => e.target.classList.add('hoveringbtn'))
    button.addEventListener('mouseout', (e) => e.target.classList.remove('hoveringbtn'))

})
// below are button specific action

// the reset acctions are a bit messy
reset.addEventListener('click', () => {
    gridDivNodeList.forEach(divElm => divElm.classList.remove('hovering'))// resets all divs by removing class
    gridDivNodeList.forEach(divElm => divElm.removeAttribute('style'))// removing style
})


RGB.addEventListener('click', () => {
    console.log(rgb = !rgb)
    //RGB.textContent = (rgb === false) ? 'To RGB' : 'To normal';
    if (rgb == false) {
        RGB.textContent = 'To RGB'
        effectOnGridDivNormal()
    }
    else {
        effectOnGridDivRGB()
        RGB.textContent = 'To Normal'
    }
})
// on click RGB button we toggle value of rgb variable)

function getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}// RETURNS A RANDOM COLOR
function addHoveringClass(e) { e.target.classList.add('hovering') }
function addRGBStyle(e) { e.target.setAttribute('style', `background:${getRandomColor()}`) }

function effectOnGridDivNormal() {

    gridDivNodeList.forEach(divElm => { // what will happen to each div element
        //if (rgb == false) {

        //divElm.removeAttribute('style')

        divElm.addEventListener('mouseover', addHoveringClass)
        divElm.removeEventListener('mouseover',addRGBStyle)
        //}
        /*else {
            
                divElm.classList.remove('hovering')
            
            divElm.addEventListener('mouseover', (e) => e.target.setAttribute('style', `background:${getRandomColor()}`))
        }*/
        // changing div color using js
    })

}
function effectOnGridDivRGB() {
    gridDivNodeList.forEach(divElm => {
        divElm.addEventListener('mouseover', addRGBStyle)
        divElm.removeEventListener('mouseover',addHoveringClass)
    })
}
effectOnGridDivNormal()

// IMPLEMENTING CHANGING rgb VALUE VIA BUTTON CLICK AND UPDATING THE GRID ON BUTTON CLICK IS LEFT 
// PROGRAMMS WORKS IF WE MANUALLLY CHANGE rgb I NOW HAVE TO INCORPORATE BUTTON AND DYNAMICALLY switching modes
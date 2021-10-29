const mainDiv=document.querySelector('.mainDiv')
for(let i =0;i<256;i++){
    const gridDiv=document.createElement('div')
    gridDiv.classList.add('gridDiv')
    mainDiv.appendChild(gridDiv)
}
const gridDivNodeList=document.querySelectorAll('.gridDiv')

gridDivNodeList.forEach(divElm=>{divElm.addEventListener('mouseover',(e)=>e.target.classList.add('hovering'))
divElm.addEventListener('mouseout',(e)=>e.target.classList.remove('hovering'))})
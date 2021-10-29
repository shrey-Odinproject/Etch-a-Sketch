const mainDiv=document.querySelector('.mainDiv')
for(let i =0;i<36;i++){
    const gridDiv=document.createElement('div')
    gridDiv.classList.add('gridDiv')
    mainDiv.appendChild(gridDiv)
}

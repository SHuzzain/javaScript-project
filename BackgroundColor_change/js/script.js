const navColorFilper = document.getElementById('colorFliper')
const navSimpleColor = document.getElementById('simpleColor')
const navHexColor = document.getElementById('hexColor')
const bgColorPattren = document.getElementById('colorPattren')
const bgColorChangeBtn = document.getElementById('colorChangeBtn')

const colors = ['red','blue','pink', 'yellow','orange'];
const hexColor = ['a','b','c','d','e','f'];
let ranclr = ''

for( i in hexColor){
    hexColor[i]= hexColor[i].toUpperCase()
    if(i == hexColor.length - 1){
        for( i=0;i<10;i++){
            hexColor.push(i)
        }
    }
}
console.log(hexColor)
// color cahnge controller place
    bgColorChangeBtn.onclick = () =>{
        randerTheSavedColor = randomClr(1);
        document.body.style.backgroundColor = randerTheSavedColor;
        bgColorPattren.textContent = randerTheSavedColor
        navTextColorChange(randerTheSavedColor);
    }
navHexColor.addEventListener('click', () =>{
   bgColorChangeBtn.onclick = () =>{
    randerTheSavedColor = randomClr(2);
    document.body.style.backgroundColor = `#${randerTheSavedColor}`;
    bgColorPattren.textContent = `#${randerTheSavedColor}`;
    navTextColorChange(randerTheSavedColor)
   }
       
})
const navTextColorChange = (bgclr) =>{
    navColorFilper.style.color = `#${bgclr}`
}


const randomClr = (key) =>{
    switch (key) {
        case 1:
             ranclr = colors[Math.floor(Math.random() * colors.length)]
             return ranclr
        case 2:
              ranclr = ''
              for(i = 0; i<6;i++){
              ranclr += hexColor[Math.floor(Math.random() * hexColor.length)]
             }
             bgColorPattren.textContent = ''
             return ranclr;
               
        default:
            break;
    }

}


 
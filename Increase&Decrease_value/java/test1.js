let divButton = document.getElementById('button')
let checkValue = document.querySelectorAll('.check')
let store = {
    'red': 0, 
    'yellow' :0,
    'blue' : 0
}

checkValue.forEach((click) => {
    click.onclick = () =>{
        store[click.value]+= 1
        click.innerText = store[click.value]
    } 
})
function clear (){
    store.red =0
    store.yellow =0
    store.blue =0
    checkValue.forEach((click) => {
        click.innerText = ''
    })
}
divButton.onclick = () => clear();


let ad = 65;

const chr = String.fromCharCode(ad)



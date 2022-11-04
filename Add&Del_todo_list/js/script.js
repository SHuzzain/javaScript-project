const inputVal = document.getElementById('inputBox')
const deleteVal = document.getElementById('deletetInput')
const deletebtn = document.getElementById('deleteBtn')
const childDiv = document.getElementById('demo')
let totoList = [];
let storeTag = [];
let count = 0;
function addToto(){
  totoList.push(inputVal.value);
  render(totoList);
}

function createElem(pTag){
storeTag.push(pTag)
   deletebtn.onclick = () =>{
    storeTag.forEach((check) =>{
      if(check.innerText == deleteVal.value){
        deleteToto(check)
      }
    })
   
   }
}

 const render = (totoValue) =>{
  let pTag = document.createElement('p')
  pTag.setAttribute('id',`${totoValue[count]}`)
  pTag.innerText = totoValue[count];
  childDiv.appendChild(pTag)
  count+=1

 createElem(pTag);
 
 }
 const deleteToto = (pTagIdVal) =>{
  for( let i =0; i<=totoList.length; i++ ){
   if(pTagIdVal.innerText == totoList[i]){
      totoList.splice(i,1)
      childDiv.removeChild(childDiv.children[i])
      storeTag.splice(i,1)
      count-=1
   }
  }
   
 }
const submitBtn = document.getElementsByClassName('sumbitBtn')[0]
const inputBox = document.getElementsByClassName("inputTextBox")[0]
const itemList = document.getElementsByClassName("all-prodect")[0]
const alertTag = document.getElementsByClassName('alert')[0]
const clearBtn = document.getElementsByClassName('clearAllItem')[0]
const dynamicHeight = document.getElementsByClassName('mainPage-container')[0]
const formId = document.querySelector('.myForm')


let editTag = false;
let editId = 0;
let editedElement = "";

// controller add , edit , delete
const gerItemList = (e) => {
   e.preventDefault()
   const value = inputBox.value
   if(value && !editTag) return addList(value)
   else if(value && editTag) return editTheList(value, editedElement)
   else return displayAlert('plesea enter the item name', 'warning')
   
}
//  add item to list
const addList = (value) => {
 
   const keyId = new Date().getTime()
   createNewDom(keyId, value)
   addLocalStroageServer(keyId, value) 

}
// edit list on item
const editTheList = (val, id) => {
    id.innerHTML = val
    displayAlert('Item name changed', 'sucess')
    setBackDefault()
    editLocalServer(id.parentElement.dataset.id, val)
}
// display the message use doing
const displayAlert = (mesg, type) => {
  alertTag.textContent = mesg;
  alertTag.classList.add(`alert-${type}`)
    setTimeout(() => {
   alertTag.textContent = "";
  alertTag.classList.remove(`alert-${type}`)
  },1000)
}
// clear the all item from list
const clearListItem = () => {
   if(itemList.children.length === 0) return displayAlert('plesea enter the item name', 'warning')
   Array.from(itemList.children).forEach((deleteTheItems) => {
      itemList.removeChild(deleteTheItems)
   })
   heightAnimation('clear')
   displayAlert('all the item to cleared', 'warning')
   localStorage.removeItem("list")
   
}
// get list item from user click and edit
const editItem = (e) => {
   const id = e.currentTarget.parentElement.dataset.id
   const target = e.target.parentElement.children[0]
    inputBox.value = target.innerHTML
    submitBtn.value = "Edit"
    editTag = true;
    editedElement = target;
    editId = id;
}
// delete the item from list user to click
const deleteItem = (e) => {
   const target = e.currentTarget.parentElement;
   itemList.removeChild(target)
   heightAnimation('sub')
   displayAlert('Item deleted from list', 'warning')
   removeItemFromLocalStorage(target)
}
// set to default setting
const setBackDefault = () => {
   inputBox.value = ''
   editTag = false;
   editId = ''
   submitBtn.value= "Submit"
}
// height animation the height dynamically added
const heightAnimation = (val, index) => {
   let item = getSelection()
   let count = 0;
   let height = 0;
   if(val == 'add'){
      count = itemList.children.length
      if(count){
         for(i = 0; i<count; i++){
            height += 38
         }
         height += 237
      }
      
      dynamicHeight.style.height = `${height}px`;
   }else if(val == 'sub'){
      dynamicHeight.style.height = `${dynamicHeight.clientHeight - 38}px`;
   }else{
      dynamicHeight.style.height = `${237}px`
   }
}
// local storage area controller
const addLocalStroageServer = (id, value) => {
   const obj = {id, value}
   const item = getLocalStorage()
   item.push(obj)
   localStorage.setItem('list', JSON.stringify(item))
}
const editLocalServer = (id ,val) => {
  let item = getLocalStorage();
  item = item.filter((i) =>{
   if(i.id === Number(id)){
    
      return i.value = val
   }else{
      return i
   }
  })
  localStorage.setItem('list', JSON.stringify(item))
}

const removeItemFromLocalStorage = (val) => {
   const id = Number(val.dataset.id)
   let item = getLocalStorage();
    item = item.filter((i) => {
      if(i.id !== id){
         return i
      }
   })
   localStorage.setItem('list', JSON.stringify(item))
}

const createNewDom = (id , value, index) => {
  
   const divTag = document.createElement('div')
   divTag.setAttribute('data-id',`${id}`)
   divTag.className = 'item-list';
   divTag.innerHTML = `<span>${value}</span>
                 <i class="fa fa-edit" id="edit"></i>
                 <i class="material-icons" id="delete">delete</i>`
   displayAlert("Item add to list succsessfully",'sucess')
   itemList.appendChild(divTag)
    heightAnimation('add', index);
   setBackDefault()
  
   
   //  edit and delete button
   const editBtn = divTag.querySelector('#edit')
   const deleteBtn = divTag.querySelector('#delete')
   editBtn.addEventListener('click', editItem)
   deleteBtn.addEventListener('click', deleteItem)
}

// get list of item from local storage
const setListItem = () => {
   
    let item = getLocalStorage();
    item.forEach((i, index) => {
      createNewDom(i.id, i.value, index)
      
    })
}
//short cut of local stroage
const getLocalStorage = () => {
 return  localStorage.getItem('list') 
   ? JSON.parse(localStorage.getItem('list')):[]
} 
// submit to server
formId.addEventListener("submit" , gerItemList)
// clear button
clearBtn.addEventListener('click', clearListItem)
// rander the server storage
window.addEventListener("DOMContentLoaded", setListItem)



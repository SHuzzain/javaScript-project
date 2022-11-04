const articaleTag = document.querySelectorAll('.article-container')
let childs;
// get child from article div
articaleTag.forEach((randerInsidechild) => {
// save the all span tag 
   const spanTag = randerInsidechild.firstElementChild.lastElementChild.firstElementChild;
// add class name to child element
   spanTag.firstElementChild.classList.add('plusIcon')
   spanTag.lastElementChild.classList.add('minusIcon')
// speraed the two childs
   for(i=0;i<=spanTag.children.length;i++){
 //if parent element rander the undefine return that     
    if(spanTag.children[i] == undefined){
        return
    }else{
// all i to wait for user click
        spanTag.children[i].addEventListener('click', (even) =>{
//reset the section tag page
            resetVal();
//user click the button then the for loop get all class form user clicked button           
            for(i=0; i<= even.target.classList.length;i++){
// if condition checking the class in the button class if the class in the button the condition is true
            if(even.target.classList[i]== 'plusIcon'){
                 even.target.style.display = 'none'
                 spanTag.lastElementChild.style.display = 'contents'
                spanTag.parentElement.parentElement.parentElement.lastElementChild.style.display = 'contents'
            }else if(even.target.classList[i] == 'minusIcon'){
                even.target.style.display = 'none'
                spanTag.firstElementChild.style.display = 'flex'
                spanTag.parentElement.parentElement.parentElement.lastElementChild.style.display = 'none'
               
            }
            }
        })
    }
 }
})
//reset the page controller
const resetVal = () =>{
    articaleTag.forEach((recheck)=>{
        recheck.lastElementChild.style.display = 'none'
        recheck.firstElementChild.lastElementChild.firstElementChild.firstElementChild.style.display = 'flex'
        recheck.firstElementChild.lastElementChild.firstElementChild.lastElementChild.style.display = 'none'

     })
}
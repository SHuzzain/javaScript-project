const hambargerBtn = document.getElementsByClassName('toggleBtn')[0]
const arrowUp = document.getElementsByClassName('scroll-to-top')[0]
let navContainerDiv = hambargerBtn.parentElement
const saveTheDynamicHeight = []
hambargerBtn.firstElementChild.addEventListener('click', () => {
      randerTheHeight();
      const toggleBtn = hambargerBtn.classList.toggle('open-topBar')
      if(!toggleBtn) return navContainerDiv.style.height = '50px'
      navContainerDiv.style.height = `${saveTheDynamicHeight[1]+saveTheDynamicHeight[0]}px`   
})
const randerTheHeight = () =>{
      saveTheDynamicHeight[0] = navContainerDiv.getBoundingClientRect().height;
      saveTheDynamicHeight[1] = navContainerDiv.children[1].getBoundingClientRect().height
}
window.onscroll = () => {
   scrollFunction();
}
const scrollFunction = () =>{
  if(document.body.scrollTop > 50 || document.documentElement.scrollTop > 50){
    document.body.firstElementChild.setAttribute("data-setTop","true")
    navContainerDiv.children[1].setAttribute("aria-checked","true")
    arrowUp.setAttribute('data-arrowUp','true')
   
  }else{
    document.body.firstElementChild.setAttribute("data-setTop","false")
    navContainerDiv.children[1].setAttribute("aria-checked","false")
    arrowUp.setAttribute('data-arrowUp','false')
  }
}

const data = document.querySelector('.date')
data.innerHTML = new Date().getFullYear();

const scrollLink = Array.from(document.querySelector('.navBar-links').children)
 
   scrollLink.forEach((link) => {
    const aTag = Array.from(link.children)
      aTag.forEach((aTagLink) => {
          aTagLink.addEventListener('click', (even) => {
              const id = even.currentTarget.getAttribute("href").slice(1);
              const elementId = document.getElementById(id);
              let position = elementId.offsetTop - 50;
              window.scrollTo({
                left:0,
                top: position,
              })
              hambargerBtn.classList.remove('open-topBar')
              navContainerDiv.style.height = '50px'
          })
      })
   })

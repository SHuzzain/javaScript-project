const mainPage_image = document.getElementById('article-mainImage')
const arrowBtn = document.getElementsByClassName("buttons-container")[0]
let prevImage = [];
let count = 1;
let resatValue = false
const randomImages = async(prevData, value) =>{
   if(value == "arrow"){
         
         mainPage_image.src = prevData.message;
         resatValue = true;
   }else{
      const res = await fetch('https://dog.ceo/api/breeds/image/random')
      const data = await res.json()
      mainPage_image.src = data.message
      if(resatValue == true){
         prevImage = [];
         count = 1;
         console.log("hi")
      }
      resatValue = false
      prevImage.push(data)
   }
}
arrowBtn.childNodes.forEach(arrowButton => {
   arrowButton.addEventListener("click", (event) =>{
  Array.from(event.target.classList).map(classNames => {
         if(classNames === "fa-angle-left"){
            count++
            const undefinedCheck = prevImage[prevImage.length - count  ]
            undefinedCheck !== undefined ? randomImages(undefinedCheck, "arrow") : count--
         }else if(classNames === "fa-angle-right"){
            
            count--
            const undefinedCheck = prevImage[prevImage.length - count]
            undefinedCheck !== undefined ? randomImages(undefinedCheck, "arrow") : count++

         }
  }) 
      
     
      
      
   })
})
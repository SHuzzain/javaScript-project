const countTheInnerValue = document.getElementById('countValue')
const mainClassBtns = document.querySelectorAll('.main-optionTwo')
let count = 0;
mainClassBtns.forEach((check) =>{
   check.childNodes.forEach((recheck) =>{
    recheck.onclick = () =>{
        switch (recheck.innerHTML) {
            case "INCREASE":
                   count++;
                   countTheInnerValue.innerHTML = count;
                   if(count > 0){
                    countTheInnerValue.style.color = 'green'
                   }else if(count == 0){
                    countTheInnerValue.style.color ='black'
                   }
                   break;

                break;
            case "DECREASE":
                      count--;
                      countTheInnerValue.innerHTML = count;
                      if(count < 0){
                        countTheInnerValue.style.color = 'red'
                       }else if(count == 0){
                        countTheInnerValue.style.color ='black'
                       }
                break;
            case "RESET":
                        count = 0
                        countTheInnerValue.innerHTML = count;
                       count == 0?countTheInnerValue.style.color ='black': console.log('error')
                break;
            default:
                break;
        }
    }
   })
})
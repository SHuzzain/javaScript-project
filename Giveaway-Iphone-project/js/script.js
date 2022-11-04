const giveawayDate = document.getElementById('giveaway-day')
const countDown = Array.from(document.getElementsByClassName('count-down')[0].children)
const dateAndTime = []
const getDateAndTimeValue = () => {
  const currentDate = new Date()
    const futureDate = new Date( 2022 , 11, 20, 11, 30, 0)
    dateAndTime[0] =  futureDate.getFullYear()
    dateAndTime[1] =  futureDate.getMonth()
    dateAndTime[2] =  futureDate.getHours()
    dateAndTime[3] = futureDate.getMinutes()
    dateAndTime[4] = futureDate.getDate()

 giveawayDate.innerHTML = `giveaway ends on  ${getDaysName(dateAndTime[4])}, ${dateAndTime[4]} 
${getMonthName(dateAndTime[1]).slice(0, -4)} ${dateAndTime[2]}:${dateAndTime[3]}am`

countDown.forEach((divValue,index) => {

    
    let reminingDay = Math.abs(currentDate.getDate() - dateAndTime[4])
     let hour = currentDate.getHours() % 12;
     let mins = currentDate.getMinutes();
     let sec = currentDate.getSeconds();
     let year = currentDate.getFullYear();
     let month = currentDate.getMonth();
    
    if(year < dateAndTime[0]){
        countDownReset()
        sec = 0
    }else if(month > dateAndTime[1] ){
         countDownReset()
         sec = 0
    }else if(reminingDay <= 0 && hour <= 11 && mins >= 30){
        countDownReset()
        sec = 0
    }
   const saveTheVal = [reminingDay,hour,mins,sec]
   
   divValue.firstElementChild.innerHTML = saveTheVal[index] < 10 ? `0${saveTheVal[index]}`:saveTheVal[index]
   
})
}

const countDownReset = () => {

   document.body.firstElementChild.classList.add('expired')
        countDown.forEach((reset) => {
            reset.firstElementChild.innerHTML = 0
        })
        clearInterval(setCountDown)

}

// const getRemainingDay = (todayDate) =>{
//     const year = currentDate.getFullYear() - dateAndTime[0]
//     const month = ((currentDate.getMonth() + 1) - 12) - (dateAndTime[1] - 12)
//     let days;
//     if(year >= 1 || month >= 1){
//        days = (365 * year) + (getMonthDays(month))
//     }else{
//         days = currentDate.getDate()
//     }
//     return days
// }
// const getMonthDays = (remainingMonth) => {
//     const month = currentDate.getMonth() + 1
//     const eitherDays = [1,3,5,7,8,10,12]
//     let monthDays = 0;
//     for(i=0;i<=remainingMonth;i++){
//      let month = (currentDate.getMonth() + 1) + i
//        for(i of eitherDays)
//         if( month == eitherDays){2
//             monthDays += 31
//         }else if(month == 2){
//             monthDays += checkLeapYear(currentDate.getFullYear()) ? 29 : 28;
//         }else{
//             monthDays += 30
//         }
      
//     }
//     return monthDays - currentDate.getDate()
     
// }
// function checkLeapYear(year) {

//     //three conditions to find out the leap year
//     if ((0 == year % 4) && (0 != year % 100) || (0 == year % 400)) {
//         return true;
//     } else {
//         return false;
//     }
// }
// convert to  month and week number to name

function getMonthName(mouthNum) {
    const date = new Date()
    date.setMonth(mouthNum -1);
    return date.toLocaleString('en-US', {month: 'long'});
}
function getDaysName(weekdayName) {
    const date = new Date()
    date.setDate(weekdayName);
    return date.toLocaleString('en-US', {weekday: 'long'});
}
let setCountDown = setInterval(getDateAndTimeValue, 1000)
const daysInMonth = (month,year) => {
const months = month
    let days = 0, c = 0, a =0
    do{
      for(let i = 0;i<=month;i++){
        if((i==1)||(i==3)||(i==5)||(i==7)||(i==8)||(i==10)||(i==12)){
           days+=31
        } else if((i==4)||(i==6)||(i==9)||(i==11)){
           days+=30
        } else if(i==2){
            days+=28
            c++
            if(c==3){
                days+=1
            }
        }
        if(i==12){
        month-=12
        i=0
        }
        a = i+a
     }
    }while(a==months)
year = days/365
console.log(`total year:${year}`)
      return days
    }
    let month = Number(prompt('Enter the month : '))
    console.log(daysInMonth(month))
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    
    

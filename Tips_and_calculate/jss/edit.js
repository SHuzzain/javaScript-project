let billInput = document.getElementById('billTotalInput')
let tipInput = document.getElementById('tipInput')
let perPerson = document.getElementById('numberOfPeople')
let totalPerson = document.getElementById('perPersonTotal')
let numberOfPeople = Number(perPerson.innerText)

function calculateBill() {
  const  bill = Number(billInput.value)
  const tip = Number(tipInput.value)/100
    const tipAmount =   tip * 100
 const total = tipAmount + bill
 const totalValue = total / numberOfPeople
 totalPerson.innerText = totalValue.toFixed(2)
}
function increasePeople() {
   numberOfPeople +=1
   perPerson.innerText = numberOfPeople
    calculateBill()
}
function decreasePeople(){
   numberOfPeople -=1
   if( numberOfPeople < 1){
      numberOfPeople = 1
      return 
   }
   
   perPerson.innerText = numberOfPeople
   calculateBill()
}


// ** getComputerChoice randomly selects between `rock` `paper` `scissors` and returns that string **
// getComputerChoice() 👉 'Rock'
// getComputerChoice() 👉 'Scissors'
function getComputerChoice(value) {
    const game = ['Rock', 'Paper', 'Scissors']
    const random = Math.floor(Math.random(game) * game.length )
    return game[random]
  }
  let handDiv = document.getElementById('hands')
    let resultDiv = document.getElementById('result')
    let playerScore = document.getElementById('player-score')
  // ** getResult compares playerChoice & computerChoice and returns the score accordingly **
  // human wins - getResult('Rock', 'Scissors') 👉 1
  // human loses - getResult('Scissors', 'Rock') 👉 -1
  // human draws - getResult('Rock', 'Rock') 👉 0
  let store = {
    'points' : 0
  }
  function getResult(playerChoice, computerChoice) {
    // return the result of score based on if you won, drew, or lost
        let score;
        if(playerChoice == computerChoice){
           score =0
        }else{
            if(playerChoice == 'Rock')
            {
                if(computerChoice == 'Scissors'){
                    score = 1
                    store.points +=1
                   
                }else if(computerChoice == 'Paper'){
                   score =-1
                   store.points -=1
                }
    
            }else if(playerChoice == 'Scissors'){
                 if(computerChoice == 'Rock'){
                      score = -1
                      store.points -=1
                 }else if(computerChoice == 'Paper'){
                       score = 1
                       store.points +=1
                 }
            }else if(playerChoice == 'Paper'){
                  if(computerChoice == 'Rock'){
                    score = 1
                    store.points +=1
                  }else if(computerChoice == 'Scissors'){
                    score =  -1
                    store.points -=1
                  }
            }
        }

        
       
    // All situations where human draws, set `score` to 0
  
  
    // All situations where human wins, set `score` to 1
    // make sure to use else ifs here
    // Otherwise human loses (aka set score to -1)
  
  
    // return score
    return score
  }
  
  // ** showResult updates the DOM to `You Win!` or `You Lose!` or `It's a Draw!` based on the score. Also shows Player Choice vs. Computer Choice**
  function showResult(score, playerChoice, computerChoice) {
    // Hint: on a score of -1
       if(score== 1){
       
        resultDiv.innerHTML = 'you win'
       }else if(score == -1){
       
        resultDiv.innerHTML = 'you lost'
       }else {
       
        resultDiv.innerHTML = 'draw'
       }
        playerScore.innerHTML = `Your Score ${store.points}`
       handDiv.innerHTML = `('.') ${playerChoice} vs {::} ${computerChoice}`
    // You should do result.innerText = 'You Lose!'
    // Don't forget to grab the div with the 'result' id!
  }
  
  // ** Calculate who won and show it on the screen **
  function onClickRPS(playerChoices) {
    const names = getComputerChoice()

       showResult(getResult(playerChoices, names),playerChoices,names)

  }
  
  
  // ** Make the RPS buttons actively listen for a click and do something once a click is detected **
  function playGame() {
    // use querySelector to select all RPS Buttons
    let userChocie = document.querySelectorAll('.rpsButton')
    let clear = document.getElementById('endGameButton')
    
    // * Adds an on click event listener to each RPS button and every time you click it, it calls the onClickRPS function with the RPS button that was last clicked *
    userChocie.forEach(checkTheValue =>{
        checkTheValue.onclick = () =>{

        onClickRPS(checkTheValue.value)
        }
      })
    // 1. loop through the buttons using a forEach loop
    // 2. Add a 'click' event listener to each button
    // 3. Call the onClickRPS function every time someone clicks
    // 4. Make sure to pass the currently selected rps button as an argument
     clear.onclick = () =>{
        endGame()
     }
  
  
    // Add a click listener to the end game button that runs the endGame() function on click
        
  }
  
  // ** endGame function clears all the text on the DOM **
  function endGame() {
     playerScore.innerHTML = ""
     handDiv.innerHTML = ""
     resultDiv.innerHTML = ""
     store.points = 0
  }
  
  playGame()
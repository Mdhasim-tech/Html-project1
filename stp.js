alert("WELCOME TO THE KID'S ZONE.\n\tIT'S TIME FOR FUN!!")
alert("LET'S PLAY THE GAME STONE PAPER AND SCISSOR.YOU HAVE TO CHOOSE [stone,paper or scissor].STONE HIT'S THE SCISSOR AND WINS,PAPER WRAPS IN THE STONE AND WINS ,SCISSOR CUTS THE PAPER AND WINS.\n\t\t\t LET'S START!! ")
let arr=["stone","paper","scissor"]


let human_point=0
let comp_point=0
let total_chances=5
while(total_chances!=0){
  let index=Math.floor(Math.random()*arr.length)
  let comp_choice=arr[index]
  let human_choice=prompt("Enter Your choice");--total_chances;
  
  if (human_choice==comp_choice) 
  {alert("This is a tie!! "+`you chose ${human_choice} and the computer chose ${comp_choice}`)}

  else if (human_choice=="stone" & comp_choice=="scissor") 
  {alert("You win!! "+`you chose ${human_choice} and the computer chose ${comp_choice}`);++human_point}
  
  else if (human_choice=="paper" & comp_choice=="stone")
  {alert("You win!! "+`you chose ${human_choice} and the computer chose ${comp_choice}`);++human_point}
    
  else if (human_choice=="scissor" & comp_choice=="paper")
  {alert("You win!! "+`you chose ${human_choice} and the computer chose ${comp_choice}`);++human_point}

  else {alert("You loose! "+`you chose ${human_choice} and the computer chose ${comp_choice}`);++comp_point}
  }


if (human_point>comp_point){alert("YOU WIN THE GAME!!"+ `YOUR TOTAL POINTS IS ${human_point} AND COMPUTERS TOTAL POINTS IS ${comp_point}`)}

else if (human_point<comp_point){alert("YOU LOOSE THE GAME!!"+ `YOUR TOTAL POINTS IS ${human_point} AND COMPUTERS TOTAL POINTS IS ${comp_point}`)}

else {alert("THE GAME IS TIED!!");alert(`YOUR TOTAL POINTS IS ${human_point} AND COMPUTER TOTAL POINTS IS ${comp_point}`)}

alert("THANKS FOR PLAYING.PLEASE RELOAD THE PAGE TO PLAY AGAIN.\n\t\t\tSEE YOU NEXT TIME!!!")

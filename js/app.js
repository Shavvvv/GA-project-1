    /*----- constants -----*/
    // types of bets
    const fiveDollar = 5;
    const tenDollar = 10;
    const fifteenDollar=15;

    //  payouts 
    const payouts={
        straightUp:36,
        odds:2,
        evens:2,
        lowNums:2,
        highNums:2
    }
    
    
    //straight up bets
    const numbers=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
    18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]



  /*----- state variables -----*/
let wheelSpin;
let payout=0;
  /*----- cached elements  -----*/
let betWager;
let betsMade=[]

  /*----- event listeners -----*/

  //listeners  for user bet amount
  let findChipBtn = document.getElementById('cash-chips');
  let setChipBtn = findChipBtn.addEventListener('click',setBetPrice);  

  // listener for user bets made

  let findBetsBtn = document.getElementById('bets-to-be-made')
  let setBetsBtn = findBetsBtn.addEventListener('click',pushBets)

   // listener for play button

   let findPlayBtn = document.getElementById('spin-wheel')
   let setPlayBtn = findPlayBtn.addEventListener('click',playGame)




  /*----- functions -----*/



  // Function to assign the value of user bets 
  function setBetPrice(e){
    let choice=e.target;
    if(choice.innerText ==='$5'){
        betWager=fiveDollar
        console.log(`price= ${betWager}`)
        return;
    }else if(choice.innerText ==='$10'){
        betWager=tenDollar
        console.log(`price= ${betWager}`)
    }else if(choice.innerText ==='$15'){
        betWager=fifteenDollar
        console.log(`price= ${betWager}`)
    }

    }



    function pushBets(e){

        let betType=e.target.innerText;

      betsMade.push(betType)
   
console.log(betsMade)

    }


 // plays the game, "Spins the wheel"
function playGame(){

    wheelSpin= numbers[Math.floor(Math.random()*37)]
    console.log(wheelSpin)

    checkWins()

}

function checkWins(){
    
    betsMade.forEach(function(bet){

if((bet==='odd')&& (wheelSpin%2===1)){
payout+=betWager*payouts.odds;
console.log(`payout= $ ${payout}`)
}

if((bet==='even')&& (wheelSpin%2===0) && (wheelSpin!==0)){
    payout+=betWager*payouts.evens;
    console.log(`payout= $ ${payout}`)
    }
   


    if((bet==='1-18') &&  wheelSpin<19 && wheelSpin!==0){
        payout+=betWager*payouts.lowNums;
        console.log(`payout= $ ${payout}`)
    }


    if((bet==='19-36') &&  wheelSpin>18 ){
        payout+=betWager*payouts.highNums;
        console.log(`payout= $ ${payout}`)
    }

})


}


// init function runs here
init()



  // init function is declared here
    function init(){

         

        render()
    }


    function render(){






    }


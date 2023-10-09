	/*----- constants -----*/
    // types of bets
const fiveDollar = 5;
const tenDollar = 10;


//straight up bets

let zero = 0
let one = 1
let two = 2
let three = 3
let four = 4
let five = 5
let six =  6
let seven = 7
let eight = 8
let nine = 9
let ten = 10
let eleven = 11
let twelve = 12
let thirteen = 13
let fourteen = 14
let fifteen = 15
let sixteen = 16
let seventeen = 17
let eighteen = 18
let nineteen = 19
let twenty = 20
let twentyOne = 21
let twentyTwo = 22
let twentyThree = 23
let twentyFour = 24
let twentyFive = 25
let twentySix = 26
let twentySeven = 27
let twentyEight = 28
let twentyNine = 29
let thirty = 30
let thirtyOne = 31
let thirtyTwo = 32
let thirtyThree = 33
let thirtyFour = 34
let thirtyFive = 35
let thirtySix = 36


//line bets 


let lb0123 = [zero,one,two,three]






	/*----- state variables -----*/
let payout=36;

	/*----- cached elements  -----*/


	/*----- event listeners -----*/
 let chipSet=document.getElementById('cash-chips');
 let betPrice=chipSet.addEventListener('click',setBetPrice)


	/*----- functions -----*/

function setBetPrice(e){
    let choice=e.target;
    if(choice.innerText ==='5'){
        bet=fiveDollar
        console.log(`price= ${bet}`)
    }else if(choice.innerText ==='10'){
        bet=tenDollar
        console.log(`price= ${bet}`)
    }

    }

let userBet=document.getElementById('odd/even-bets')
let userBetListener=userBet.addEventListener

    if(!isNaN(bet)){
let wheelSpin= Math.floor(Math.random()*37)
    }
    
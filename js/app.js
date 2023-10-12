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
        highNums:2,
        reds:2,
        blacks:2,
        top:3,
        middle:3,
        floor:3,
        dozen_1st:3,
        dozen_2nd:3,
        dozen_3rd:3,
        topLine:9,
        line:6,
        street:12,
        corner:9,




    }
    
    
    //straight up bets
    const numbers=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,
    18,19,20,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36]

    // arrays to store numbers that are either red or black
    const black =[2,4,6,8,10,11,13,15,17,20,22,24,26,28,29,31,33,35]
    const red  =[1,3,5,7,9,12,14,16,18,19,21,23,25,27,30,32,34,36]

    // arrays for  column bets
    const TOP  =[3,6,9,12,15,18,21,24,27,30,33,36]
    const MIDDLE =[2,5,8,11,14,17,20,23,26,29,32,35]
    const FLOOR =[1,4,7,10,13,16,19,22,25,28,31,34]


    // arrays for dozen bets
    const FIRST_12= [1,2,3,4,5,6,7,8,9,10,11,12]
    const SECOND_12=[13,14,15,16,17,18,19,20,21,22,23,24]
    const THIRD_12= [25,26,27,28,29,30,31,32,33,34,35,36]

    // Arrays for line bets
    const ST_0_3= [0,1,2,3]
    const ST_1_6 = [1,2,3,4,5,6]
    const ST_4_9 = [4,5,6,7,8,9]
    const ST_7_12 = [7,8,9,10,11,12]
    const ST_10_15 = [10,11,12,13,14,15]
    const ST_13_18 = [13,14,15,16,17,18]
    const ST_16_21 = [16,17,18,19,20,21]
    const ST_19_24 = [19,20,21,22,23,24]
    const ST_22_27 = [22,23,24,25,26,27] 
    const ST_25_30 = [25,26,27,28,29,30]
    const ST_28_33 = [28,29,30,31,32,33]
    const ST_31_36 = [31,32,33,34,35,36]
    const TOP_LINE = [0,1,2,3]


   // Arrays for Street bets
    const STREET_1 =[1,2,3]
    const STREET_4 =[4,5,6]
    const STREET_7=[7,8,9]
    const STREET_10 =[10,11,12]
    const STREET_13 =[13,14,15]
    const STREET_16 =[16,17,18]
    const STREET_19 =[19,20,21]
    const STREET_22 =[22,23,24]
    const STREET_25 =[25,26,27]
    const STREET_28 =[28,29,30]
    const STREET_31 =[31,32,33]
    const STREET_34 =[34,35,36]
  
    // Arrays for corner Bets
   
    const CORNER_1_2_4_5 =[1,2,4,5]
    const CORNER_2_3_5_6=[2,3,5,6]
    const CORNER_4_5_7_8=[4,5,7,8]
    const CORNER_5_6_8_9 =[5,6,8,9]
    const CORNER_7_8_10_11=[7,8,10,11]
    const CORNER_8_9_11_12=[8,9,11,12]
    const CORNER_10_11_13_14=[10,11,13,14]
    const CORNER_11_12_14_15=[11,12,14,15]
    const CORNER_13_14_16_17=[13,14,16,17]
    const CORNER_14_15_17_18=[14,15,17,18]
    const CORNER_16_17_19_20=[16,17,19,20]
    const CORNER_17_18_20_21=[17,18,20,21]
    const CORNER_19_20_22_23=[19,20,22,23]
    const CORNER_20_21_23_24=[20,21,23,24]
    const CORNER_22_23_25_26=[22,23,25,26]
    const CORNER_23_24_26_27=[23,24,26,27]
    const CORNER_25_26_28_29=[25,26,28,29]
    const CORNER_26_27_29_30=[26,27,29,30]
    const CORNER_28_29_31_32=[28,29,31,32]
    const CORNER_29_30_32_33=[29,30,32,33]
    const CORNER_31_32_34_35=[31,32,34,35]
    const CORNER_32_33_35_36=[32,33,35,36]


    const split01=[0,1]

    
    




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


    if((bet==='red')&&(red.includes(wheelSpin))){

        payout+=betWager*payouts.reds;
        console.log(`payout= $ ${payout}`)
    }


    if((bet==='black')&&(black.includes(wheelSpin))){

        payout+=betWager*payouts.blacks;
        console.log(`payout= $ ${payout}`)
    }

    if((bet==='TOP')&& (TOP.includes(wheelSpin))){
        payout+=betWager*payouts.top;
        console.log(`payout= $ ${payout}`)

    }

    if((bet==='MIDDLE')&& (MIDDLE.includes(wheelSpin))){
        payout+=betWager*payouts.middle;
        console.log(`payout= $ ${payout}`)

    }

    if((bet==='FLOOR')&& (FLOOR.includes(wheelSpin))){
        payout+=betWager*payouts.floor;
        console.log(`payout= $ ${payout}`)

    }

    if((bet==='1st 12')&&(FIRST_12.includes(wheelSpin))){
        payout+=betWager*payouts.dozen_1st;
        console.log(`payout= $ ${payout}`)
    }

    if((bet==='2nd 12')&&(SECOND_12.includes(wheelSpin))){
        payout+=betWager*payouts.dozen_2nd;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='3rd 12')&&(THIRD_12.includes(wheelSpin))){
        payout+=betWager*payouts.dozen_3rd;
        console.log(`payout= $ ${payout}`)
    }

    if((bet==='0,1,2,3')&& (ST_0_3.includes(wheelSpin))){

        payout+=betWager*payouts.topLine;
        console.log(`payout= $ ${payout}`)
    }

    if((bet==='1,2,3,4,5,6')&& (ST_1_6.includes(wheelSpin))){

        payout+=betWager*payouts.line;
        console.log(`payout= $ ${payout}`)
    }

    if((bet==='4,5,6,7,8,9')&& (ST_4_9.includes(wheelSpin))){

        payout+=betWager*payouts.line;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='7,8,9,10,11,12')&& (ST_7_12.includes(wheelSpin))){

        payout+=betWager*payouts.line;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='10,11,12,13,14,15')&& (ST_10_15.includes(wheelSpin))){

        payout+=betWager*payouts.line;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='13,14,15,16,17,18')&& (ST_13_18.includes(wheelSpin))){

        payout+=betWager*payouts.line;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='16,17,18,19,20,21')&& (ST_16_21.includes(wheelSpin))){

        payout+=betWager*payouts.line;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='19,20,21,22,23,24')&& (ST_19_24.includes(wheelSpin))){

        payout+=betWager*payouts.line;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='22,23,24,25,26,27')&& (ST_22_27.includes(wheelSpin))){

        payout+=betWager*payouts.line;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='25,26,27,28,29,30')&& (ST_25_30.includes(wheelSpin))){

        payout+=betWager*payouts.line;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='28,29,30,31,32,33')&& (ST_28_33.includes(wheelSpin))){

        payout+=betWager*payouts.line;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='31,32,33,34,35,36')&& (ST_31_36.includes(wheelSpin))){

        payout+=betWager*payouts.line;
        console.log(`payout= $ ${payout}`)
    }
  
    if((bet==='STREET_1') && (STREET_1.includes(wheelspin))){
        payout+=betWager*payouts.street;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='STREET_4') && (STREET_4.includes(wheelspin))){
        payout+=betWager*payouts.street;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='STREET_7') && (STREET_7.includes(wheelspin))){
        payout+=betWager*payouts.street;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='STREET_10') && (STREET_10.includes(wheelspin))){
        payout+=betWager*payouts.street;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='STREET_13') && (STREET_13.includes(wheelspin))){
        payout+=betWager*payouts.street;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='STREET_16') && (STREET_16.includes(wheelspin))){
        payout+=betWager*payouts.street;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='STREET_19') && (STREET_19.includes(wheelspin))){
        payout+=betWager*payouts.street;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='STREET_22') && (STREET_22.includes(wheelspin))){
        payout+=betWager*payouts.street;
        console.log(`payout= $ ${payout}`)
    }

    if((bet==='STREET_25') && (STREET_25.includes(wheelspin))){
        payout+=betWager*payouts.street;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='STREET_28') && (STREET_28.includes(wheelspin))){
        payout+=betWager*payouts.street;
        console.log(`payout= $ ${payout}`)
    }
    if((bet==='STREET_31') && (STREET_31.includes(wheelspin))){
        payout+=betWager*payouts.street;
        console.log(`payout= $ ${payout}`)
    }

    if((bet==='STREET_34') && (STREET_34.includes(wheelspin))){
        payout+=betWager*payouts.street;
        console.log(`payout= $ ${payout}`)
    }


    if((bet==='CORNER1') && (CORNER_1_2_4_5.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER2') && (CORNER_2_3_5_6.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER4') && (CORNER_4_5_7_8.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER5') && (CORNER_5_6_8_9.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER7') && (CORNER_7_8_10_11.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER8') && (CORNER_8_9_11_12.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER10') && (CORNER_10_11_13_14.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER11') && (CORNER_11_12_14_15.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER13') && (CORNER_13_14_16_17.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER14') && (CORNER_14_15_17_18.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER16') && (CORNER_16_17_19_20.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER17') && (CORNER_17_18_20_21.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER19') && (CORNER_19_20_22_23.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER20') && (CORNER_20_21_23_24.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER22') && (CORNER_22_23_25_26.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER23') && (CORNER_23_24_26_27.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER25') && (CORNER_25_26_28_29.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER26') && (CORNER_26_27_29_30.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER28') && (CORNER_28_29_31_32.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER29') && (CORNER_29_30_32_33.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER31') && (CORNER_31_32_34_35.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

    if((bet==='CORNER32') && (CORNER_32_33_35_36.includes(wheelSpin))){
        payout+=betWager*payouts.corner;
        console.log(`payout= $ ${payout}`) 
    }

   





    //  end of check wins function
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


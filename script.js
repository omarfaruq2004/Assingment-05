           // Heart icon
 
 const buttons = document.querySelectorAll('.heart-btn');

buttons.forEach(button => {
    button.addEventListener('click', function(){
        
    
  const hearts =parseInt(document.getElementById('heart').innerText);
 
  
     const current = hearts + 1;

    document.getElementById('heart').innerText = current;
   

    })
})

            //Call Buttons



// document.getElementById('national-call-btn').addEventListener('click', function(){
     
//   const money =parseInt(document.getElementById('money').innerText);

//        if(money < 20){
//         alert('You do not have enough coin, you need at least 20 coin to make a call ')
//         return;
//      }

//     alert(' Calling National Emaergency service 999');
     
//      const currentMoney = money - 20;

//     document.getElementById('money').innerText = currentMoney;

// });


const callButton =document.querySelectorAll('.call-btn');

callButton.forEach(callBtn => {
  
})

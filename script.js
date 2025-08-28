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



  document.getElementById('National-call-btn').addEventListener('click', function(){
      

  const money =parseInt(document.getElementById('money').innerText);

       if(money < 20){
       alert('You do not have enough coin, you need at least 20 coin to make a call ')
        return;    
        }

     alert(' Calling National Emaergency service 999');
     
     const currentMoney = money - 20;

     document.getElementById('money').innerText = currentMoney;

    const name =document.querySelector('.name').innerText;
    const number = parseInt(document.querySelector('.number').innerText)
    
     


    const li =document.createElement('li');
    li.innerText = `${name} ${number} - ${new Date().toLocaleTimeString()}`;
    
    const callList =document.getElementById('callList');
    callList.appendChild(li)
      
})



document.getElementById('police-call-btn').addEventListener('click', function(){
      
  const money =parseInt(document.getElementById('money').innerText);

       if(money < 20){
       alert('You do not have enough coin, you need at least 20 coin to make a call ')
        return;    
        }

     alert(' Calling Police Helpline service 999');
     
     const currentMoney = money - 20;

     document.getElementById('money').innerText = currentMoney;




    const name1 =document.querySelector('.name1').innerText;
    const number1 = parseInt(document.querySelector('.number1').innerText)
    
     


    const li =document.createElement('li');
    li.innerText = `${name1} ${number1} - ${new Date().toLocaleTimeString()}`;
    
    const callList =document.getElementById('callList');
    callList.appendChild(li)
      
})



document.getElementById('Fire-call-btn').addEventListener('click', function(){
      
  const money =parseInt(document.getElementById('money').innerText);

       if(money < 20){
       alert('You do not have enough coin, you need at least 20 coin to make a call ')
        return;    
        }

     alert(' Calling Fire service 999');
     
     const currentMoney = money - 20;

     document.getElementById('money').innerText = currentMoney;


    const name2 =document.querySelector('.name2').innerText;
    const number2 = parseInt(document.querySelector('.number2').innerText)
    
     


    const li =document.createElement('li');
    li.innerText = `${name2} ${number2} - ${new Date().toLocaleTimeString()}`;
    
    const callList =document.getElementById('callList');
    callList.appendChild(li)
      
})




document.getElementById('Ambulance-call-btn').addEventListener('click', function(){
      
  const money =parseInt(document.getElementById('money').innerText);

       if(money < 20){
       alert('You do not have enough coin, you need at least 20 coin to make a call ')
        return;    
        }

     alert(' Calling Ambulance service 1994-999999');
     
     const currentMoney = money - 20;

     document.getElementById('money').innerText = currentMoney;


    const name3 =document.querySelector('.name3').innerText;
    const number3 = parseInt(document.querySelector('.number3').innerText)
    
     
    const li =document.createElement('li');
    li.innerText = `${name3} ${number3} - ${new Date().toLocaleTimeString()}`;
    
    const callList =document.getElementById('callList');
    callList.appendChild(li)
      
})




document.getElementById('women-call-btn').addEventListener('click', function(){
      
  const money =parseInt(document.getElementById('money').innerText);

       if(money < 20){
       alert('You do not have enough coin, you need at least 20 coin to make a call ')
        return;    
        }

     alert(' Calling Women & Child Helpline service 109');
     
     const currentMoney = money - 20;

     document.getElementById('money').innerText = currentMoney;


    const name4 =document.querySelector('.name4').innerText;
    const number4 = parseInt(document.querySelector('.number4').innerText)
    
     
    const li =document.createElement('li');
    li.innerText = `${name4} ${number4} - ${new Date().toLocaleTimeString()}`;
    
    const callList =document.getElementById('callList');
    callList.appendChild(li)
      
})



document.getElementById('Anti-call-btn').addEventListener('click', function(){
      
  const money =parseInt(document.getElementById('money').innerText);

       if(money < 20){
       alert('You do not have enough coin, you need at least 20 coin to make a call ')
        return;    
        }

     alert(' Calling Anti Corruption Helpline  service 106');
     
     const currentMoney = money - 20;

     document.getElementById('money').innerText = currentMoney;


    const name5 =document.querySelector('.name5').innerText;
    const number5 = parseInt(document.querySelector('.number5').innerText)
    
     
    const li =document.createElement('li');
    li.innerText = `${name5} ${number5} - ${new Date().toLocaleTimeString()}`;
    
    const callList =document.getElementById('callList');
    callList.appendChild(li)
      
})


document.getElementById('Elect-call-btn').addEventListener('click', function(){
      
  const money =parseInt(document.getElementById('money').innerText);

       if(money < 20){
       alert('You do not have enough coin, you need at least 20 coin to make a call ')
        return;    
        }

     alert(' Calling Electricity Helpline service 16216');
     
     const currentMoney = money - 20;

     document.getElementById('money').innerText = currentMoney;


    const name6 =document.querySelector('.name6').innerText;
    const number6 = parseInt(document.querySelector('.number6').innerText)
    
     
    const li =document.createElement('li');
    li.innerText = `${name6} ${number6} - ${new Date().toLocaleTimeString()}`;
    
    const callList =document.getElementById('callList');
    callList.appendChild(li)
      
})




document.getElementById('Brac-call-btn').addEventListener('click', function(){
      
  const money =parseInt(document.getElementById('money').innerText);

       if(money < 20){
       alert('You do not have enough coin, you need at least 20 coin to make a call ')
        return;    
        }

     alert(' Calling Brac Helpline service 16445');
     
     const currentMoney = money - 20;

     document.getElementById('money').innerText = currentMoney;


    const name7 =document.querySelector('.name7').innerText;
    const number7 = parseInt(document.querySelector('.number7').innerText)
    
     
    const li =document.createElement('li');
    li.innerText = `${name7} ${number7} - ${new Date().toLocaleTimeString()}`;
    
    const callList =document.getElementById('callList');
    callList.appendChild(li)
      
})



document.getElementById('Railway-call-btn').addEventListener('click', function(){
      
  const money =parseInt(document.getElementById('money').innerText);

       if(money < 20){
       alert('You do not have enough coin, you need at least 20 coin to make a call ')
        return;    
        }

     alert(' Calling Railway Helpline service 163');
     
     const currentMoney = money - 20;

     document.getElementById('money').innerText = currentMoney;


    const name8 =document.querySelector('.name8').innerText;
    const number8 = parseInt(document.querySelector('.number8').innerText)
    
     
    const li =document.createElement('li');
    li.innerText = `${name8} ${number8} - ${new Date().toLocaleTimeString()}`;
    
    const callList =document.getElementById('callList');
    callList.appendChild(li)
      
})




































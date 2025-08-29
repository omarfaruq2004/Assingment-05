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



            // History Button - Clear
  
const hoveEffect = document.getElementById('History-Btn');
const History =document.getElementById('History');

hoveEffect.addEventListener('click', function(){
  
// History.classList.toggle('hidden');

});

    


          // Copy Button

function copyButton(){
        const copyCount = parseInt(document.getElementById('copy-count').innerText);
     const newCopyCount = copyCount + 1;

    document.getElementById('copy-count').innerText = newCopyCount;

};


document.getElementById('copy1').addEventListener('click', function(){

  const text =document.getElementById('textCopy').innerText;

  navigator.clipboard.writeText(text).then(() => {
    alert('Text copied: ' + text);

  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });

  copyButton();
  
})



document.getElementById('copy2').addEventListener('click', function(){

  const text =document.getElementById('textCopy').innerText;

  navigator.clipboard.writeText(text).then(() => {
    alert('Text copied: ' + text);

  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });

  copyButton();
  
})



document.getElementById('copy3').addEventListener('click', function(){

  const text =document.getElementById('textCopy').innerText;

  navigator.clipboard.writeText(text).then(() => {
    alert('Text copied: ' + text);

  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });

  copyButton();
  
})



document.getElementById('copy4').addEventListener('click', function(){

  const text1 =document.getElementById('textCopy1').innerText;

  navigator.clipboard.writeText(text1).then(() => {
    alert('Text copied: ' + text1);

  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });

  copyButton();
  
})



document.getElementById('copy5').addEventListener('click', function(){

  const text2 =document.getElementById('textCopy2').innerText;

  navigator.clipboard.writeText(text2).then(() => {
    alert('Text copied: ' + text2);

  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });

  copyButton();
  
})



document.getElementById('copy6').addEventListener('click', function(){

  const text3 =document.getElementById('textCopy3').innerText;

  navigator.clipboard.writeText(text3).then(() => {
    alert('Text copied: ' + text3);

  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });

  copyButton();
  
})



document.getElementById('copy7').addEventListener('click', function(){

  const text7 =document.getElementById('textCopy7').innerText;

  navigator.clipboard.writeText(text7).then(() => {
    alert('Text copied: ' + text7);

  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });

  copyButton();
  
})



document.getElementById('copy8').addEventListener('click', function(){

  const text8 =document.getElementById('textCopy8').innerText;

  navigator.clipboard.writeText(text8).then(() => {
    alert('Text copied: ' + text8);

  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });

  copyButton();
  
})



document.getElementById('copy9').addEventListener('click', function(){

  const text9 =document.getElementById('textCopy9').innerText;

  navigator.clipboard.writeText(text9).then(() => {
    alert('Text copied: ' + text9);

  }).catch(err => {
    console.error('Failed to copy text: ', err);
  });

  copyButton();
  
})




































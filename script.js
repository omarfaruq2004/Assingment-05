           // Heart icon
 
 const buttons = document.querySelectorAll('.heart-btn');

buttons.forEach(button => {
    button.addEventListener('click', function(){
        
    
  const hearts =parseInt(document.getElementById('heart').innerText);
 
  
     const current = hearts + 1;

    document.getElementById('heart').innerText = current;
   

    })
})





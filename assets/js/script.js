/** create random pictures from array
 *Create a function that returns a random picture from array when the display button is clicked */  

let buttonsSubmit = document.getElementById('submit');
let buttonRandomImage = document.getElementById('random-image');

let footballImagesArray = [{
    name:'suarez' ,
    image: 'https://free4kwallpapers.com/uploads/originals/2016/04/28/luis-suarez-uruguayan-footballer-wallpaper.jpg'},
    
    { name: 'messi',
    image: 'https://free4kwallpapers.com/uploads/originals/2016/04/28/lionel-messi-argentine-footballer-wallpaper.jpg'}
   ,
    { name: 'hazard',
    image: 'https://free4kwallpapers.com/uploads/originals/2016/04/19/eden-hazard-belgian-footballer-wallpaper.jpg'}
   ,
  { name: 'iniesta',
  image: 'https://free4kwallpapers.com/uploads/originals/2016/04/15/andres-iniesta-spanish-footballer-wallpaper.jpg'}
   ,
   {
    name: 'ronaldo',
    image: 'http://newarena.com/wp-content/uploads/2018/04/GettyImages-938394414-1024x683.jpg'
   },
    {   name:'mane',
        image:'https://static.businessinsider.com/image/5e1496e0855cc2475b3ba926.jpg'
    },

    { 
       name:'rashford',
       image: 'https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2020_25/3390304/200616-marcus-rashford-mc-1409.JPG'
    },

    {
        name: 'salah',
        image:'https://sillyseason.com/wp-content/uploads/2016/10/Top-ten-best-performing-footballers-in-the-world-2018.jpg' 
    },

    {
        name: 'kane',
        image:'https://d31xsmoz1lk3y3.cloudfront.net/big/452153.jpg?v=1549220749'
    },

    {
    name: 'ronaldhinho',
    image:'http://static.sportskeeda.com/wp-content/uploads/2013/01/Ronaldinho-in-action-1169846.jpg'
    }
   
  
];

  let selectedImage;

  function randomImages(){
   
     
  imgNumber = Math.abs(Math.floor(Math.random() * (0 - footballImagesArray.length))) 

  console.log(imgNumber);
   let images = document.getElementById('img');
   images.innerHTML = `<img  id="selected-image" src= "${footballImagesArray[imgNumber].image}">`;
  
   selectedImage = footballImagesArray[imgNumber];
  

  }



/**
 * 1.Allow the DOM to load and add event
 * listeners to the buttons.
 * 2.When the page loads,a random image to appear.
 * 
 */
 

document.addEventListener('DOMContentLoaded', function(){
   
    
buttonRandomImage.addEventListener('click', randomImages);
buttonsSubmit.addEventListener('click', userResponse);
     
             
})

document.addEventListener('keydown', function(event){
      if (event.key === "Enter"){
        userResponse();
      }
})



/** This function is meant to check the outcome of the random image and match it with the name*/ 



/**This function is mean't to check the user response
 * and match it to see if it matches the image and name.
 * Then alert a congragulatory message to the user!
 */

function userResponse(){
            
    let userAnswer = document.getElementById('answer-box').value;
    console.log(userAnswer,  selectedImage.name );
    
   

    if (!userAnswer){
        alert("Please fill answer box")
    } else if  (userAnswer === selectedImage.name ){
        alert("Congratulations you guessed it");
        scoreIncrease();
        
    } else {
        alert("Oh sorry, try again!");
        wrongScoreIncrease();
    }



}



/* Increase score */

function scoreIncrease(){
 let oldScore =   document.getElementById('score').textContent;
 document.getElementById('score').textContent = ++oldScore;

}

/* Decrease score */

function wrongScoreIncrease(){
   let oldScore = document.getElementById('wrong').textContent;
   let newScore = ++oldScore;
   document.getElementById('wrong').textContent = newScore;
    

   if(newScore === 2){
    alert('game over');
   buttonsSubmit.removeEventListener('click',  userResponse);
   buttonRandomImage.removeEventListener('click', randomImages);
  
   }

}


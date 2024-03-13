/** create random pictures from array
 *Create a function that returns a ranom åpicture from array when the display button is clicked */  

  function randomImages(){
    let footballImagesArray = [{
        name:'Suarez' ,
        image: 'https://free4kwallpapers.com/uploads/originals/2016/04/28/luis-suarez-uruguayan-footballer-wallpaper.jpg',width:'50px',height:'50px'},
        
        { name: 'Messi',
        image: 'https://free4kwallpapers.com/uploads/originals/2016/04/28/lionel-messi-argentine-footballer-wallpaper.jpg',width:'50px',height:'50px'}
       ,
        { name: 'Hazard',
        image: 'https://free4kwallpapers.com/uploads/originals/2016/04/19/eden-hazard-belgian-footballer-wallpaper.jpg',width:'50px',height:'50px'}
       ,
      { name: 'Iniesta',
      image: 'https://free4kwallpapers.com/uploads/originals/2016/04/15/andres-iniesta-spanish-footballer-wallpaper.jpg',width:'50px',height:'50px'}
       ,
  ];

  imgNumber = Math.abs(Math.floor(Math.random() * (0 - footballImagesArray.length))) 

  console.log(imgNumber);
   let images = document.getElementById('img');
   images.innerHTML = `<img src= "${footballImagesArray[imgNumber].image}" style ="width:400px ">`;
  

  }



/**
 * 1.Allow the DOM to load and add event
 * listeners to the buttons.
 * 2.When the page loads,a random image to appear.
 * 
 */


document.addEventListener('DOMContentLoaded', function(){
   
    let button = document.getElementById('random-image');
    button.addEventListener('click', randomImages);


   
})




/* Create a function that checks users response */

function userResponse() {

}

/* Create a function that loops throw the array and returns the corrrect answer*/

function checkAnswer(){

}

/* Create a modal that gives  a hint on answer */

function hintAnswer(){

}

/* Increase score */

function scoreIncrease(){

}

/* Decrease score */

function scoreDecrease(){

}
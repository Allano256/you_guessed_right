/** create random pictures from array
 *Create a function that returns a ranom åpicture from array when the display button is clicked */  

  function randomImages(){
    let footballImagesArray = [{
        name:'Suarez' ,
        image: 'https://free4kwallpapers.com/uploads/originals/2016/04/28/luis-suarez-uruguayan-footballer-wallpaper.jpg',width:'100px',height:'100px'},
        
        { name: 'Messi',
        image: 'https://free4kwallpapers.com/uploads/originals/2016/04/28/lionel-messi-argentine-footballer-wallpaper.jpg',width:'100px',height:'100px'}
       ,
        { name: 'Hazard',
        image: 'https://free4kwallpapers.com/uploads/originals/2016/04/19/eden-hazard-belgian-footballer-wallpaper.jpg',width:'100px',height:'100px'}
       ,
      { name: 'Iniesta',
      image: 'https://free4kwallpapers.com/uploads/originals/2016/04/15/andres-iniesta-spanish-footballer-wallpaper.jpg',width:'100px',height:'100px'}
       ,
  ];

  //Find the length of array of images
  let arrayLength = footballImagesArray.length;
  let newArray = [];

  for(let i = 0; i < arrayLength; i++){
    newArray[i] = newImage();
    newArray[i].image = footballImagesArray[i].image;
    newArray[i].width = footballImagesArray[i].width;
    newArray[i].height = footballImagesArray[i].height;

  }

  //create a random number for the image to be displayed
  function getRandomNum(min,max){
    imgNumber = Math.floor(Math.random() * (min - max + 1))

    return newArray[imgNumber];
  }

  let newImage = getRandomNum(0, newArray.length - 1);

  //Remove the previous image
   let images = document.getElementsByTagName('image');

   let I = images.length;
   for(let p = 0; p < I; p++){
    images[0].parentNode.removeChild(images[0]);
   }


   //Show new random image
   document.body.appendChild(newImage);
  }


// let fottballStadiums = [
//      {name: 'wembley',
//      image: 'https://a.cdn-hotels.com/gdcs/production67/d1184/209ba1af-54ee-4550-9fd5-f0e80adc25a3.jpg',width:'100px',height:'100px' }
//     ,
//     { name: 'Old trafford',
//     image: 'http://www.sportslook.net/wp-content/uploads/2015/03/SD-OldTrafford-1.jpg',width:'100px',height:'100px'}
//    ,
//     { name: 'Allianz Arena',
//     image: 'http://www.interpcan.ca/wp-content/uploads/sites/260/2020/03/b178a0878f3ab1bcdbd4e82fcb1b77ae.jpg',width:'100px',height:'100px'}
//    ,

// ]

/**
 * 1.Allow the DOM to load and add event
 * listeners to the buttons.
 * 2.When the page loads,a random image to appear.
 * 
 */

document.addEventListener('DOMContentLoaded', function(){
    let buttons = document.getElementsByTagName('button');

    for(let button of buttons){
        button.addEventListener('click', function(){
            console.log('We active!');
            alert('We active buttons!');
            if(this.getAttribute('data-type') === "submit"){
               checkAnswer();
            } else {
                alert("Oh sorry try again!");
                /* if the person gives a wrong answer,a new image is generated */
                randomImages();
            }
        })
    }
    
    // document.getElementById('randomImage').addEventListener('click', function(){

    // })

})

/* create a function to start running the game */

function runGame(){
    

}



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
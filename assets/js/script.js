let buttonsSubmit = document.getElementById("submit");
let buttonRandomImage = document.getElementById("random-image");
let images = document.getElementById("img");
let selectedImage;

/*Array containing the images to be displayed */
let footballImagesArray = [
  {
    name: "suarez",
    image:
      "https://free4kwallpapers.com/uploads/originals/2016/04/28/luis-suarez-uruguayan-footballer-wallpaper.jpg",
  },

  {
    name: "messi",
    image:
      "https://free4kwallpapers.com/uploads/originals/2016/04/28/lionel-messi-argentine-footballer-wallpaper.jpg",
  },
  {
    name: "hazard",
    image:
      "https://free4kwallpapers.com/uploads/originals/2016/04/19/eden-hazard-belgian-footballer-wallpaper.jpg",
  },
  {
    name: "iniesta",
    image:
      "https://free4kwallpapers.com/uploads/originals/2016/04/15/andres-iniesta-spanish-footballer-wallpaper.jpg",
  },
  {
    name: "ronaldo",
    image:
      "http://newarena.com/wp-content/uploads/2018/04/GettyImages-938394414-1024x683.jpg",
  },
  {
    name: "mane",
    image:
      "https://static.businessinsider.com/image/5e1496e0855cc2475b3ba926.jpg",
  },

  {
    name: "rashford",
    image:
      "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2020_25/3390304/200616-marcus-rashford-mc-1409.JPG",
  },

  {
    name: "kane",
    image: "https://d31xsmoz1lk3y3.cloudfront.net/big/452153.jpg?v=1549220749",
  },
];

/* A function that generates random images */
function randomImages() {
  imgNumber = Math.abs(
    Math.floor(Math.random() * (0 - footballImagesArray.length))
  );

  images.innerHTML = `<img  id="selected-image" src= "${footballImagesArray[imgNumber].image}">`;

  selectedImage = footballImagesArray[imgNumber];
}

/**
 * 1.Allow the DOM to load and add event
 * listeners to the buttons.
 */

document.addEventListener("DOMContentLoaded", function () {
  buttonRandomImage.addEventListener("click", randomImages);
  buttonsSubmit.addEventListener("click", userResponse);
});

document.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    userResponse();
  }
});

/*This variable is for the message to be displayed as a result of any input */
const displayMessage = function (message) {
  document.getElementById("message").textContent = message;
};

/** This function checks the outcome of the random image and matches it with the user's response*/
function userResponse() {
  let userAnswer = document.getElementById("answer-box").value.toLowerCase();

  if (!userAnswer) {
    displayMessage("Please fill answer box");
  } else if (userAnswer === selectedImage.name) {
    displayMessage("You guessed right...");
    randomImages();
    scoreIncrease();
    clearAnswerbox();
  } else {
    displayMessage("Oh sorry try again...");
    wrongScoreIncrease();
    clearAnswerbox();
  }
}
/*This function clears the answer box when the user submits an answer */
function clearAnswerbox() {
  document.getElementById("answer-box").value = "";
}

/* This function increases the score */
function scoreIncrease() {
  let newScore = document.getElementById("score").textContent;
  document.getElementById("score").textContent = ++newScore;
  if (newScore === 2) {
    displayMessage("CONGS,CHAMPION!!!");
    document.getElementById("football").style.backgroundColor = "#90ee90";
    document.getElementById("message").style.fontSize = "30px";
    buttonsSubmit.removeEventListener("click", userResponse);
    buttonRandomImage.removeEventListener("click", randomImages);
  }
}

/*This function decreases the score */
function wrongScoreIncrease() {
  let oldScore = document.getElementById("wrong").textContent;
  let newScore = ++oldScore;
  document.getElementById("wrong").textContent = newScore;

  if (newScore === 2) {
    displayMessage("Game Over...");
    buttonsSubmit.removeEventListener("click", userResponse);
    buttonRandomImage.removeEventListener("click", randomImages);
  }
}

/*This function resets the game */
document.getElementById("again").addEventListener("click", function () {
  document.getElementById("answer-box");
  document.getElementById("random-image");
  document.getElementById("wrong").textContent = "0";
  document.getElementById("score").textContent = "0";
});

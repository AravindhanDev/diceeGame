var randomNumber = Math.floor(Math.random()*6+1);

var randomNumber2 = Math.floor(Math.random()*6+1);

// if (randomNumber1 === 1){
//     document.querySelector (".img1").setAttribute('src', 'images/dice1.png');
// }
// else if (randomNumber1 === 2){
//   document.querySelector (".img1").setAttribute('src', 'images/dice2.png');
// }
// else if (randomNumber1 === 3){
//   document.querySelector (".img1").setAttribute('src', 'images/dice3.png');
// }
// else if (randomNumber1 === 4){
//   document.querySelector (".img1").setAttribute('src', 'images/dice4.png');
// }
// else if (randomNumber1 === 5){
//   document.querySelector (".img1").setAttribute('src', 'images/dice5.png');
// }
// else{
//   document.querySelector (".img1").setAttribute('src', 'images/dice6.png');
// }
//
//
// if (randomNumber2 === 1){
//     document.querySelector (".img2").setAttribute('src', 'images/dice1.png');
// }
// else if (randomNumber2 === 2){
//   document.querySelector (".img2").setAttribute('src', 'images/dice2.png');
// }
// else if (randomNumber2 === 3){
//   document.querySelector (".img2").setAttribute('src', 'images/dice3.png');
// }
// else if (randomNumber2 === 4){
//   document.querySelector (".img2").setAttribute('src', 'images/dice4.png');
// }
// else if (randomNumber2 === 5){
//   document.querySelector (".img2").setAttribute('src', 'images/dice5.png');
// }
// else{
//   document.querySelector (".img2").setAttribute('src', 'images/dice6.png');
// }
//
//
// if (randomNumber1 === randomNumber2){
//   document.querySelector("h1").innerHTML = "<span>&#128681;</span> Draw!";
// }
// else if(randomNumber1 > randomNumber2){
//   document.querySelector("h1").innerHTML = "Player 1 Win! <span>&#128681;</span>";
// }
// else{
//   document.querySelector("h1").innerHTML = " 	<span>&#128681;</span> Player 2 Win!";
// }



// var first = prompt("What's the name of Player1");
// var second = prompt("What's the name of Player2");
//
//
// if(first !== undefined || second !== undefined){
//   document.querySelectorAll('p')[0].innerHTML = first;
//   document.querySelectorAll('p')[1].innerHTML = second;
// }





var randomImageSource = "images/dice"+randomNumber +".png";

var image1 = document.querySelectorAll("img")[0].setAttribute('src', randomImageSource);

//for image 2

var randomImageSource2 = "images/dice" + randomNumber2 +".png";

var image2 = document.querySelectorAll("img")[1].setAttribute('src', randomImageSource2);


if (randomNumber === randomNumber2){
  document.querySelector("h1").innerHTML = "🚩 Draw! 🚩";
}
else if(randomNumber > randomNumber2){
  document.querySelector("h1").innerHTML = "Player 1 Win! 🚩";
}
else{
  document.querySelector("h1").innerHTML = "🚩Player 2 Win!";
}

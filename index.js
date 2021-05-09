var randomNumber1=Math.floor((Math.random() * 6) + 1);
var randomimg="dice"+randomNumber1+".png";
var randomsource="images/"+randomimg;


var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomsource);



var randomNumber2=Math.floor((Math.random() * 6) + 1);
var randomimg2="dice"+randomNumber2+".png";
var randomsource2="images/"+randomimg2;


var image2=document.querySelectorAll("img")[1];
image2.setAttribute("src",randomsource2);

if (randomNumber1>randomNumber2){
  document.querySelector("h1").innerHTML="😎Player 1 Wins🎉";
}
else if (randomNumber1===randomNumber2){
  document.querySelector("h1").innerHTML="😉DRAW😜";
}
else{
  document.querySelector("h1").innerHTML="😎Player 2 Wins🎉";
}

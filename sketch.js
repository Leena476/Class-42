//string variable
var name = "Leena";

//array variable
var array = [1,2,3,4];

function setup () {
  
  //create canvas
  createCanvas(400,400);
  
  //array practice
  array.push(name);
  console.log(array.length);
  
  //switch cases practice
  switch(name){
    case "leena": console.log("right");
      break;
    case "LEENA": console.log("wrong");
      break;
    default: console.log("None of it is correct.")
      break;
  }
  
  //for loop practice
  for (var i = 0; i < 11; i = i+2){
    console.log("This is the value of i: " + i);
  }
  
  //while loop practice
  var a = 0;
  while (a<6){
    console.log("This is the value of a: " + a);
    a++;
  }
  
}

function draw () {
  
  //conditional programming practice
  //comparison and operators practice
  //define background color
  if(3+3 === 10){
    background("red");
  } else {
    background("blue");
  }
  
  //display text instructions to open the console
  fill(255);
  textSize(50);
  text("Open the console",5,50);
  
}
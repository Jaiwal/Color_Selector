var numSquares=6;
var colors = genrateRandomColors(numSquares);

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
var h1=document.querySelector("h1");
var resetButton=document.querySelector("#reset");

var easybtn=document.querySelector("#easybtn");
var hardbtn=document.querySelector("#hardbtn");





easybtn.addEventListener("click",function(){
   hardbtn.classList.remove("selected");
	easybtn.classList.add("selected");
	numSquares=3;
	colors=genrateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;



	for(var i=0;i<squares.length;i++)
	{
		 if(colors[i])
		 {

			squares[i].style.backgroundColor=colors[i];
		 }
		 else
		 {
			 squares[i].style.display="none";
		 }
	}

})

hardbtn.addEventListener("click",function(){

	hardbtn.classList.add("selected");
	easybtn.classList.remove("selected");
	numSquares=6;
	colors=genrateRandomColors(numSquares);
	pickedColor=pickColor();
	colorDisplay.textContent=pickedColor;



	for(var i=0;i<squares.length;i++)
	{
		
			squares[i].style.backgroundColor=colors[i];
		
			 squares[i].style.display="block";
	}
	
	})

resetButton.addEventListener("click",function()
{
	//generate all new colors
	colors=genrateRandomColors(numSquares);
	//pick a new random from array
	pickedColor=pickColor();
	//change color display to match picked color
	colorDisplay.textContent=pickedColor;


	messageDisplay.textContent="";
	//change colors of squares
	for (var i=0;i<squares.length;i++)
	{  
		squares[i].style.backgroundColor=colors[i];
		
			}
			h1.style.backgroundColor="steelblue";

})

colorDisplay.textContent = pickedColor;



for(var i = 0; i < squares.length; i++){
	// add initial colors to squares
	squares[i].style.backgroundColor = colors[i];

	//add click listeners to squares
	squares[i].addEventListener("click", function() {
		//grab color of clicked squares
		var clickedColor = this.style.backgroundColor;
		//compare color to pickedColor
		if(clickedColor === pickedColor) {
			messageDisplay.textContent = "Correct!";
			resetButton.textContent="Play Again?"
			changeColors(clickedColor);
			  //calling the fn AND pasing the clicked color which is the required correct color
		h1.style.backgroundColor= clickedColor;
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}
	});
}

function changeColors(color) {     
	//loop through all squares
	for(var i = 0; i < squares.length; i++) {
		//change each color to match given color
		squares[i].style.backgroundColor = color;
	}
}

function pickColor() {
	var random = Math.floor(Math.random() * colors.length); //length=6,but highest we want =5 since it gives 0<random<1
	return colors[random];
}

function genrateRandomColors(num)
{  //make an array

     var arr=[];
    //add num random to array
    for(var i=0;i<num;i++)
	{   arr.push(randomColor());
		//get random color and push into array
	}
	//return array
	return arr;
}  
function randomColor()
{
	//pick a "red" from 0 to 255
	var r=Math.floor(Math.random()*256);
	//pick a "green" from 0 to 255
	var g=Math.floor(Math.random()*256);
	//pick a "blue" from 0 to 255
	var b=Math.floor(Math.random()*256);
  return "rgb(" + r + ", " + g + ", " + b + ")" ;
}
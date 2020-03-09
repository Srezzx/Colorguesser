var numberofblocks =6;
var colors = generaterandomcolor(numberofblocks);
var pickedcolor = pickcolor();
var colordisplay = document.getElementById("colordisplay");
colordisplay.textContent = pickedcolor;
var squares = document.querySelectorAll(".square");
var messagedisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetbutton = document.querySelector("#reset");
var modebuttons = document.querySelectorAll(".mode");

for(var i=0;i<modebuttons.length;i++)
{
	modebuttons[i].addEventListener("click",function()
	{
		modebuttons[0].classList.remove("selected");
		modebuttons[1].classList.remove("selected");
		this.classList.add("selected");
		if(this.textContent === "Easy")
		{
			numberofblocks=3;
		}
		else
		{
			numberofblocks=6;
		}
		reset();
	});
}


function reset()
{
	colors = generaterandomcolor(numberofblocks);
	pickedcolor = pickcolor();
	colordisplay.textContent = pickedcolor;
	resetbutton.textContent = "New Colors";
	h1.style.backgroundColor = "steelblue";
	messagedisplay.textContent = "";
	for(var i=0;i<squares.length;i++)
	{
		if(colors[i])
		{
		squares[i].style.backgroundColor = colors[i];
		squares[i].style.display = "block";
	    }
	    else
	    {
	    	squares[i].style.display = "none";
	    }
	}
}



resetbutton.addEventListener("click",function()
{
	reset();
});


for(var i=0;i<squares.length;i++)
{
	squares[i].style.backgroundColor = colors[i];
	squares[i].addEventListener("click",function(){
	 var clickedcolor = this.style.backgroundColor
	 
	 if(clickedcolor === pickedcolor)
	 {
	 	messagedisplay.textContent = "Correct";
	 	changecolor(pickedcolor);
	 	h1.style.backgroundColor = pickedcolor;
	 	resetbutton.textContent = "Play Again";
	 }
	 else
	 {
	 	this.style.backgroundColor = "black";	
	 	messagedisplay.textContent = "Try Again";
	 }
	});

}

function changecolor(color)
{
	for(var i=0;i<squares.length;i++)
	{
		squares[i].style.backgroundColor = color;
	}
}


function generaterandomcolor(num)
{
	var arr =[];
	for(var i=0;i<num;i++)
	{
		arr[i] = randomcolor();
	}
	return arr;
}

function randomcolor()
{
	var red = Math.floor(Math.random() * 256);
	var green = Math.floor(Math.random() * 256);
	var blue = Math.floor(Math.random() * 256);
	return "rgb(" + red + ", " + green + ", " + blue +")";
}

function pickcolor()
{
	var col= Math.floor(Math.random() * colors.length );
	return colors[col];
}
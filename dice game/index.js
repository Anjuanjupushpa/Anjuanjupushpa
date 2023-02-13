var randomNum1 = Math.floor(Math.random() * 6) + 1;
var randomImage1 ="image/d" + randomNum1 + ".png";

var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImage1);

var randomNum2 = Math.floor(Math.random() * 6) + 1;
var randomImage2 ="image/d" + randomNum1 + ".png";

var image2 = document.querySelectorAll("img")[1];
image2.setAttribute("src",randomImage2); 

if(randomNum1 > randomNum2)
{
	document.querySelectorAll("h1").innerHTML = "player 1 wins !";
}

else if(randomNum2 > randomNum1)
{
	
		document.querySelectorAll("h1").innerHTML = "player 2 wins !";
}
else
{
	document.querySelectorAll("h1").innerHTML = "draw ";
}
//Globals
var itemClicked = 0;
var itemClickedID = 0;

//Event listener
document.getElementById("loslassen").addEventListener("click", itemloslassen);

function itemCheck(obj)
{
	if(itemClickedID != 0)
	{
		document.getElementById(itemClickedID).style.border = '1px solid black';
		itemClickedID = obj.id;
		document.getElementById(itemClickedID).style.border = '1px solid red';
	}
	else
	{
		itemClickedID = obj.id;
		document.getElementById(itemClickedID).style.border = '1px solid red';

		var x = document.getElementById("buttons");
		x.style.display = "block";
	}
}

function itemloslassen()
{
	if(itemClickedID != 0)
	{
		document.getElementById(itemClickedID).style.border = '1px solid black';
		itemClickedID = 0;
		var x = document.getElementById("buttons");
		x.style.display = "none";
	}
}

function mouseonItem() 
{
	
}

function mouseoutofItem() 
{
	
}

//Globals
var itemClicked = 0;
var itemClickedID = 0;
var inventar;
var item;
var bild;
var p;

$('#inventarschliessen').click(() => {
    mp.trigger('inventarschliessen');
});

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

function itemAdden(Id, Name, IMG)
{
	inventar = document.getElementById('inventarmenu');

	item = document.createElement('div');
	item.setAttribute('class', 'item1');
	item.setAttribute('id', Id);
	item.setAttribute('onclick', 'itemCheck(this);');

	bild = document.createElement('img');
	bild.setAttribute('src', IMG);

	p = document.createElement('p');
	p.setAttribute('class', 'item-desc-1');
	p.innerHTML = `<center>${Name}</center>`;

	item.appendChild(bild);
	item.appendChild(p);

	inventar.appendChild(item);
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

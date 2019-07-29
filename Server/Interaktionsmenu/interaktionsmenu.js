//Globals
let Type = 0;

function Art(Id)
{
	if(Id == 1)
	{
		for (var i = 1; i <= 6; i++) 
		{
			var x = document.getElementById("int" + i);
			x.style.display = "none";
		}
	}
	else if(Id == 2)
	{
		for (var i = 7; i <= 12; i++) 
		{
			var x = document.getElementById("int" + i);
			x.style.display = "none";
		}
	}
}

function getid(obj) 
{
	let text = null;
	let selected = 0;

	var x = document.getElementById(obj.id);

	switch (obj.id) 
	{
		case "int1":
			text = "Handeln";
			selected = 1;
			break;
		case "int2":
			text = "Personalausweis zeigen";
			selected = 2;
			break;
		case "int3":
			text = "Fahrerlaubnis zeigen";
			selected = 3;
			break;
		case "int4":
			text = unescape("%DCberfallen");
			selected = 4;
			break;
		case "int5":
			text = "Noch nicht belegt";
			selected = 5;
			break;
		case "int6":
			text = "Noch nicht belegt";
			selected = 6;
			break;
		case "int7":
			text = "Motor";
			selected = 7;
			break;
		case "int8":
			text = unescape("Auf/Abschlie%DFen");
			selected = 8;
			break;
		case "int9":
			text = "Kofferraum";
			selected = 9;
			break;
		case "int10":
			text = "Motorhaube";
			selected = 10;
			break;
		case "int11":
			text = "Noch nicht belegt";
			selected = 11;
			break;
		case "int12":
			text = "Noch nicht belegt";
			selected = 12;
			break;
		default:
			text = "Unbekannt"
			selected = 0;
			break;
		
	}

	mp.trigger('selectedzumserver', selected);
	document.getElementById("itemdesc").innerHTML = text;
}

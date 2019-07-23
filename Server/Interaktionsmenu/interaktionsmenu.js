function getid(obj) 
{
	let text = null;

	//Interaktionsmenü ohne Auto
	switch (obj.id) 
	{
		case "int1":
			text = "Handeln";
			break;
		case "int2":
			text = "Personalausweis zeigen";
			break;
		case "int3":
			text = "Überfallen";
			break;
		case "int4":
			text = "Test";
			break;
		case "int5":
			text = "Test";
			break;
		case "int6":
			text = "Test";
			break;
		case "int7":
			text = "Test";
			break;
		case "int8":
			text = "Test";
			break;
		case "int9":
			text = "Test";
			break;
		case "int10":
			text = "Test";
			break;
		case "int11":
			text = "Test";
			break;
		case "int12":
			text = "Test";
			break;
		default:
			text = "Bla"
			break;
		
	}
	document.getElementById("itemdesc").innerHTML = text;
}
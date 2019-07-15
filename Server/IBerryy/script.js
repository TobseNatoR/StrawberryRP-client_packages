function DashboardDaten(Grad, Nickname) 
{
    document.getElementById('Grad').innerHTML = Grad + "°C";
	document.getElementById('P_Nickname_Index').innerHTML = Nickname;
}

function SpielerDaten(Nickname, Level, Playertime, Lastonline, Exp, Geschlecht, Ehepartner, Beruf, Geld, Handynummer) 
{
    document.getElementById('P_Nickname_Top').innerHTML = Nickname + "'s Profil";
	document.getElementById('P_Nickname_Seite').innerHTML = Nickname;
	document.getElementById('P_Nickname_Index').innerHTML = Nickname;
	document.getElementById('P_Level_Seite').innerHTML = Level;
	document.getElementById('P_Playertime_Seite').innerHTML = Playertime;
	document.getElementById('P_Lastonline_Seite').innerHTML = Lastonline;
	document.getElementById('P_Nickname').innerHTML = Nickname;
	document.getElementById('P_Level').innerHTML = Level;
	document.getElementById('P_Playertime').innerHTML = Playertime;
	document.getElementById('P_Exp').innerHTML = Exp;
	document.getElementById('P_Geschlecht').innerHTML = Geschlecht;
	document.getElementById('P_Ehepartner').innerHTML = Ehepartner;
	document.getElementById('P_Beruf').innerHTML = Beruf;
	document.getElementById('P_Geld').innerHTML = Geld;
	document.getElementById('P_Handynummer').innerHTML = Handynummer;
}


window.onload = function() 
{
	if (window.location.href.indexOf('index.html') > -1) 
	{
		mp.trigger('DashboardDaten');
	}
	else if (window.location.href.indexOf('aStats.html') > -1) 
	{
		mp.trigger('SpielerDaten');
	}
	
	$('#gruppen').click(() => {
		mp.trigger('Gruppierungzumserver');
	});
}

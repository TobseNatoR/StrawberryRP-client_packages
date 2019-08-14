let Player = mp.players.local;

var mein247Browser;
var meineGruppierungBrowser;
var inviteBrowser;

var tabelle;
var eintrag;
var zelle1;
var zelle2;
var zelle3;
var zelle4;

var inhalt1;
var inhalt2;
var inhalt3;
var inhalt4;

mp.events.add('247browseroeffnen', () => {
    mein247Browser = mp.browsers.new('package://Server/247/247.html');
	mp.gui.cursor.show(true, true);
});

mp.events.add('247browserschliessen', () => {
    mein247Browser.destroy();
	mp.gui.cursor.show(false, false);
	
});

mp.events.add('ItemKaufen', (Id) => {
	mp.events.callRemote('ItemKaufen247', Id);
});

mp.events.add('Items_Eintragen', (Id, Name, Preis, IMG) => {
	Eintragen(Id, Name, Preis, IMG);
});

function Eintragen(Id, Name, Preis, IMG) 
{
	mein247Browser.execute(`tabelle = document.getElementById('247tabelle').getElementsByTagName('tbody')[0];`);
	mein247Browser.execute(`eintrag = tabelle.insertRow(tabelle.rows.length);`);
	mein247Browser.execute(`zelle1 =  eintrag.insertCell(0);`);
	mein247Browser.execute(`zelle2 =  eintrag.insertCell(1);`);
	mein247Browser.execute(`zelle3 = eintrag.insertCell(2);`);
	mein247Browser.execute(`zelle4 = eintrag.insertCell(3);`);

	mein247Browser.execute(`inhalt1 = document.createElement('img');`);
	mein247Browser.execute(`inhalt1.src = '${IMG}';`);
	
	mein247Browser.execute(`inhalt2 = document.createTextNode('${Name}');`);
	mein247Browser.execute(`inhalt3 = document.createTextNode('${Preis}');`);
	mein247Browser.execute(`inhalt4 = document.createElement('input');`);
	
	mein247Browser.execute(`inhalt4.type = "button";`);
	mein247Browser.execute(`inhalt4.className = "btn btn-success btn-success";`);
	mein247Browser.execute(`inhalt4.value = "Kaufen";`);
	mein247Browser.execute(`inhalt4.dataset.target = ${Id};`);
	mein247Browser.execute(`inhalt4.id = ${Id};`);
	
	mein247Browser.execute(`inhalt4.onclick = itemkaufen;`);
	
	mein247Browser.execute(`zelle1.appendChild(inhalt1);`);
	mein247Browser.execute(`zelle2.appendChild(inhalt2);`);
	mein247Browser.execute(`zelle3.appendChild(inhalt3);`);
	mein247Browser.execute(`zelle4.appendChild(inhalt4);`);
	
}



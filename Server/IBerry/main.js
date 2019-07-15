var IBerry;

//Server Kram
let Grad;

//Spieler Kram
let Nickname;
let Level;
let Playertime;
let Lastonline;
let Exp;
let Geschlecht;
let Ehepartner;
let Beruf;
let Geld;
let Handynummer;

mp.events.add('IBerryoeffnen', () => {
    IBerry = mp.browsers.new('package://Server/IBerry/index.html');
	mp.gui.cursor.show(true, true);
});

mp.events.add('IBerryschliessen', () => {
    IBerry.destroy();
	mp.gui.cursor.show(false, false);
});

mp.events.add('DashboardDaten', () => {
	IBerry.execute(`DashboardDaten('${Grad}', '${Nickname}');`);
});

mp.events.add('SpielerDaten', () => {
	IBerry.execute(`SpielerDaten('${Nickname}', '${Level}', '${Playertime}', '${Lastonline}', '${Exp}', '${Geschlecht}', '${Ehepartner}', '${Beruf}', '${Geld}', '${Handynummer}');`);
});

mp.events.add('IBerry_Laden_Server', (S_Grad) => {
	Grad = S_Grad;
});

mp.events.add('Gruppierungzumserver', () => {
	mp.events.callRemote('Gruppierung_IBerry', 1);
});

mp.events.add('IBerry_Laden_Spieler', (P_Nickname, P_Level, P_Playertime, P_Lastonline, P_Exp, P_Geschlecht, P_Ehepartner, P_Beruf, P_Geld, P_Handynummer) => {
	Nickname = P_Nickname;
	Level = P_Level;
	Playertime = P_Playertime;
	Lastonline = P_Lastonline;
	Exp = P_Exp;
	Geschlecht = P_Geschlecht;
	Ehepartner = P_Ehepartner;
	Beruf = P_Beruf;
	Geld = P_Geld;
	Handynummer = P_Handynummer;
});



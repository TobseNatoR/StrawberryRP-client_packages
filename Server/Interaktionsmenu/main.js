var interaktionsmenu;
let player = mp.players.local;
let selected = 0;

mp.events.add('interaktionsmenuoeffnen', (preis) => {
    interaktionsmenu = mp.browsers.new('package://Server/Interaktionsmenu/index.html');
	mp.gui.cursor.show(true, true);
});

mp.events.add('interaktionsmenuschliessen', () => {
    interaktionsmenu.destroy();
	mp.gui.cursor.show(false, false);
});

mp.events.add('selectedzumserver', (nummer) => {
    selected = nummer;
});

mp.events.add('interaktionsmenudatenabfragen', () => {
    mp.events.callRemote('InteraktionsMenuDaten', selected);
});

mp.events.add('interaktionsmenutyp', (Typ) => {
    interaktionsmenu.execute(`Art(${Typ})`);
});



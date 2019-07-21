var interaktionsmenu;
let player = mp.players.local;
mp.events.add('interaktionsmenuoeffnen', (preis) => {
    interaktionsmenu = mp.browsers.new('package://Server/Interaktionsmenu/index.html');
	mp.gui.cursor.show(true, true);
});

mp.events.add('interaktionsmenuschliessen', () => {
    interaktionsmenu.destroy();
	mp.gui.cursor.show(false, false);
});




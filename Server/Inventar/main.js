var inventar;

mp.events.add('inventaroeffnen', () => {
    inventar = mp.browsers.new('package://Server/Inventar/index.html');
	mp.gui.cursor.show(true, true);
});

mp.events.add('inventarschliessen', () => {
    inventar.destroy();
	mp.gui.cursor.show(false, false);
	
});

mp.events.add('InventarDaten', (Id, Name, IMG) => {
	inventar.execute(`itemAdden('${Id}', '${Name}', '${IMG}');`);
});

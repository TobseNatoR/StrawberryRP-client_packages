$('#abbrechen').click(() => {
	mp.trigger('savelisteschliessen');
});

function saveTeleport() {
	var e = window.event,
	btn = e.target || e.srcElement;
	mp.trigger('SaveTeleport', btn.id);
}

function deleteSave() {
	var e = window.event,
	btn = e.target || e.srcElement;
	mp.trigger('SaveL�schen', btn.id);
}
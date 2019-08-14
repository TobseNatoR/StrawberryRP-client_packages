$('#247schliessen').click(() => {
    mp.trigger('247browserschliessen');
});

function itemkaufen() 
{
	var e = window.event,
	btn = e.target || e.srcElement;
	mp.trigger('ItemKaufen', btn.id);
}

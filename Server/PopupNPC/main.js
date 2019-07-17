var npcbrowser;
let player = mp.players.local;
mp.events.add('npcpopupoeffnen', (npcname, npctext) => {
    npcbrowser = mp.browsers.new('package://Server/PopupNPC/popupnpc.html');
    npcbrowser.execute(`document.getElementById('npcname').innerHTML = '${npcname}';`);﻿
    npcbrowser.execute(`document.getElementById('npctext').innerHTML = '${npctext}';`);﻿
});

mp.events.add('npcpopupschliessen', () =>
{
    npcbrowser.destroy();
});




//Globals

//Taste M
mp.keys.bind(0x4D, true, function ()
{
    if (mp.gui.cursor.visible) return;
    mp.events.callRemote('AutoAnAus');
});

//Taste Enter
mp.keys.bind(0x0D, true, function ()
{
    mp.events.callRemote('EnterCheck');
});

//Taste E
mp.keys.bind(0x45, true, function ()
{
    if (mp.gui.cursor.visible) return;
    mp.events.callRemote('ECheck');
});

//Taste K
mp.keys.bind(0x4B, true, function ()
{
    if (mp.gui.cursor.visible) return;
    mp.events.callRemote('KCheck');
});

//Taste B
mp.keys.bind(0x42, true, function ()
{
    if (mp.gui.cursor.visible) return;
    mp.events.callRemote('BCheck');
});

//Taste F2
mp.keys.bind(0x71, true, function ()
{
    if (mp.gui.cursor.visible) return;
    mp.events.callRemote('F2Check');
});

//Taste F3
mp.keys.bind(0x71, true, function ()
{
    if (mp.gui.cursor.visible) return;
    mp.events.callRemote('Fahrzeug_Privat_Abschliessen');
});

//Taste F8
mp.keys.bind(0x77, true, function ()
{
    if (mp.gui.cursor.visible) return;
    mp.events.callRemote('IBerry');
});

//Taste N
mp.keys.bind(0x4E, true, function ()
{
    if (mp.gui.cursor.visible) return;
    mp.events.callRemote('NCheck');
});

//Taste L
mp.keys.bind(0x4C, true, function ()
{
    if (mp.gui.cursor.visible) return;
    let localVeh = mp.players.local.vehicle;
	if (localVeh) 
	{
		let lightState = localVeh.getLightsState(1,1);
		if(lightState.lightsOn == 0)
		{
			localVeh.setLights(2);
			mp.events.callRemote('LichtAn');
		}
		else
		{
			localVeh.setLights(1);
			mp.events.callRemote('LichtAus');
		}
	}
});

//Keys halten
mp.events.add('render', () =>
{
	//Y
    if (mp.keys.isUp(89) === true) 
	{
        mp.events.callRemote('ScoreboardHiden');
    } 
	else 
	{
        mp.events.callRemote('ScoreboardZeigen');
    }
	
	//X
	if (mp.keys.isUp(88) === true) 
	{
        mp.events.callRemote('InteraktionsMenuHiden');
    } 
	else 
	{
        mp.events.callRemote('InteraktionsMenuZeigen');
    }
	
	//Arrow Down
	if (mp.keys.isDown(40) === true) 
	{
        mp.events.callRemote('ScoreboardDown');
    } 
	//Arrow UP
	if (mp.keys.isDown(38) === true) 
	{
        mp.events.callRemote('ScoreboardUp');
    } 
	
});



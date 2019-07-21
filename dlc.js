mp.events.add("checkDLC", () => {
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("srp_maps")) == 0) { mp.events.callRemote("noDLC"); }
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("passat")) == 0) { mp.events.callRemote("noDLC"); }
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("e46")) == 0) { mp.events.callRemote("noDLC"); }
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("a6avant")) == 0) { mp.events.callRemote("noDLC"); }
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("mers63c")) == 0) { mp.events.callRemote("noDLC"); }
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("mk7")) == 0) { mp.events.callRemote("noDLC"); }
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("policegt350r")) == 0) { mp.events.callRemote("noDLC"); }
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("rs4avant")) == 0) { mp.events.callRemote("noDLC"); }
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("rs7")) == 0) { mp.events.callRemote("noDLC"); }
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("s8d2")) == 0) { mp.events.callRemote("noDLC"); }
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("mlbrabus")) == 0) { mp.events.callRemote("noDLC"); }
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("s500w222")) == 0) { mp.events.callRemote("noDLC"); }
	if(mp.game.dlc2.isDlcPresent(mp.game.joaat("bmwm4")) == 0) { mp.events.callRemote("noDLC"); }

});
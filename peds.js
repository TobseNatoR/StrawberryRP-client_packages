//Feste Bots
let Stadthalle = mp.peds.new(mp.game.joaat('ig_mrs_thornhill'), new mp.Vector3(329.862, -1571.43, 30.3066), 319.494, (streamPed) => { streamPed.setAlpha(255); }, 0);
let Arbeitsamt = mp.peds.new(mp.game.joaat('cs_nigel'), new mp.Vector3(245.231, -1605.58, 25.5576), 317.164, (streamPed) => { streamPed.setAlpha(255); }, 0);
let Einreise = mp.peds.new(mp.game.joaat('a_m_m_business_01'), new mp.Vector3(815.822, -3001.06, 6.02094), 181.778, (streamPed) => { streamPed.setAlpha(255); }, 0);
let Helmut = mp.peds.new(mp.game.joaat('ig_drfriedlander'), new mp.Vector3(793.214, -3021.96, 6.02094), 315.372, (streamPed) => { streamPed.setAlpha(255); }, 0);

//Dynamische Bots
mp.events.add('boterstellen', (Name, posX, posY, posZ, RotZ) =>
{
    mp.peds.new(mp.game.joaat(Name), new mp.Vector3(posX, posY, posZ), RotZ, (streamPed) => { streamPed.setAlpha(255); }, 0);
});
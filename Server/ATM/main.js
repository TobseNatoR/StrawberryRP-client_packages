var ATM;

mp.events.add('ATMzeigen', (UserNAME, UserMONEY) => {
    ATM = mp.browsers.new('package://Server/ATM/index.html');
    ATM.execute(`document.getElementById('UserNAME').innerHTML = '&nbsp &nbsp ${UserNAME}';`);
    ATM.execute(`document.getElementById('UserMONEY').innerHTML = '&nbsp &nbsp ${UserMONEY}';`);
});

mp.events.add('ATMschliessen', () => {
    ATM.destroy();
    mp.events.callRemote('ATMSchliessen');
});
const cup10 = {
  teori: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Charyôt', norsk: 'Giv akt stilling'},
    {koreansk: 'Baro / Goman', norsk: 'Stopp'},
    {koreansk: 'Kyôngnye', norsk: 'Hilse'},
    {koreansk: 'Gihap (Ki-ap)', norsk: 'Skrik (Ki = Energi, Ap = Samle)'},
    {koreansk: 'Junbi', norsk: 'Start stilling'},
    {koreansk: 'Dwirodora', norsk: 'Snu'},
  ],
  spark: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Ap chagi', norsk: 'Frontspark med vrist'},
    {koreansk: 'Dollyo chagi',norsk: 'Rundspark'},
    {koreansk: 'Yop chagi',norsk: 'Sidespark'},
  ],
  monster: [
    {koreansk: ''},
    {koreansk: 'Taegeuk Il-jang'},
  ],
  oneStep: [
    {'': '', angrep: '', forsvar: ''},
    {'': '1.', angrep: '<p>Dwit kobi area makki.</p><p>Ap kobi area jireugi</p><p>-</p>', forsvar: '<p>-</p><p>Dwit kobi area makki.</p><p>Ap kobi momtong jireugi.</p>'},
    {'': '2.', angrep: '<p>Dwit kobi area makki.<p/><p>Ap kobi momtong jireugi.</p><p>-</p>', forsvar: '<p>-</p>Dwit kobi geodoreo makki.</p><p>Ap kobi momtong jireugi.</p>'},
    {'': '3.', angrep: '<p>Dwit kobi oesantul makki.<p/><p>Ap kobi mejumeok olgul naeryo chigi.</p><p>-</p>', forsvar: '<p>-</p>Dwit kobi olgul makki.<p>Ap kobi olgul jireugi.</p>'},
  ],
  selvforsvar: [
    {teknikk: ''},
    {teknikk: 'Fallteknikker og rull'},
  ],
};
const cup8 = {
  teori: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Dojang', norsk: 'Treningssal'},
    {koreansk: 'Dobok', norsk: 'Taekwondo drakt'},
    {koreansk: 'Sabõm-nim', norsk: 'Master'},
    {koreansk: 'Gyosa-nim', norsk: 'Instruktør'},
    {koreansk: 'Chigi', norsk: 'Slag/støt (der armen går i en sirkelbevegelse)'},
    {koreansk: 'Jireugi', norsk: 'Slag (der armen går i en strak linje)'},
    {koreansk: 'Kobi', norsk: 'Felles betegnelse for lange stillinger'},
    {koreansk: 'Seogi', norsk: 'Felles betegnelse for korte stillinger'},
    {koreansk: 'Makki', norsk: 'Blokk'},
  ],
  spark: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Apchok ap chagi', norsk: 'Frontspark med tåball'},
    {koreansk: 'An chagi',norsk: 'Innadgående spark'},
    {koreansk: 'Bakkat chagi',norsk: 'Utadgående spark'},
  ],
  monster: [
    {koreansk: ''},
    {koreansk: 'Taegeuk I-jang'},
    {koreansk: 'Taegeuk Il-jang'},
  ],
  oneStep: [
    {'': '', angrep: '', forsvar: ''},
    {'': '1.', angrep: 'Dwit kobi area makki.<br/>Ap kobi area jireugi.<br/>', forsvar: '<br/>Dwit kobi area makki.<br/>Ap kobi momtong jireugi.'},
    {'': '2.', angrep: 'Dwit kobi area makki.<br/>Ap kobi momtong jireugi.<br/>', forsvar: '<br/>Dwit kobi geodoreo makki.<br/>Ap kobi momtong jireugi.'},
    {'': '3.', angrep: 'Dwit kobi oesantul makki.<br/>Ap kobi mejumeok olgul naeryo chigi.<br/>', forsvar: '<br/>Dwit kobi olgul makki.<br/>Ap kobi olgul jireugi.'},
  ],
  selvforsvar: [
    {teknikk: ''},
    {teknikk: 'Forsvar mot håndleddsgrep'},
  ],
};
const cup7 = {
  teori: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Olgul', norsk: 'Fra kravebenet og opp'},
    {koreansk: 'Momtong', norsk: 'Fra kravebenet ned til hoftebeinet '},
    {koreansk: 'Area', norsk: 'Fra hoftebeinet og ned'},
  ],
  spark: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Mit chagi', norsk: 'Skrått spark (ca. 45°)'},
    {koreansk: 'Mira chagi', norsk: 'Dyttespark'},
  ],
  monster: [
    {koreansk: ''},
    {koreansk: 'Taegeuk Sam-jang'},
    {koreansk: 'Taegeuk I-jang'},
  ],
  oneStep: [
    {'': '', angrep: '', forsvar: ''},
    {'': '1.', angrep: 'Dwit kobi area makki.<br/>Ap kobi area jireugi.<br/>', forsvar: '<br/>Dwit kobi area makki.<br/>Ap kobi momtong jireugi.'},
    {'': '2.', angrep: 'Dwit kobi area makki.<br/>Ap kobi momtong jireugi.<br/>', forsvar: '<br/>Dwit kobi geodoreo makki.<br/>Ap kobi momtong jireugi.'},
    {'': '3.', angrep: 'Dwit kobi oesantul makki.<br/>Ap kobi mejumeok olgul naeryo chigi.<br/>', forsvar: '<br/>Dwit kobi olgul makki.<br/>Ap kobi olgul jireugi.'},
    {'': '4', angrep: 'Dwit kobi area makki.<br/>Ap kobi momtong jireugi.</br><br/>', forsvar: '<br/>Dwit kobi sonnal geodoreo makki.<br/>Ap chagi (høyre fot).<br/>Juchum seogi dubon jireugi.'},
    {'': '5', angrep: 'Dwit kobi area makki.<br/>Ap kobi momtong jireugi.</br><br/>', forsvar: '<br/>Dwit kobi sonnal geodoreo makki.<br/>Dollyo chagi (høyre fot).<br/>Ap kobi olgul geodoreo ap chigi.'},
    {'': '6', angrep: 'Dwit kobi area makki.<br/>Ap kobi momtong jireugi.</br><br/>', forsvar: '<br/>Dwit kobi sonnal geodoreo makki.<br/>Yop chagi (høyre fot).<br/>Dwit kobi sonnal bakkat chigi.'},
  ],
  selvforsvar: [
    {teknikk: ''},
    {teknikk: 'Forsvar mot kveletak'},
  ],
};
const cup6 = {
  teori: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Mori', norsk: 'Hode'},
    {koreansk: 'Mok', norsk: 'Hals'},
    {koreansk: 'Mom', norsk: 'Kroppen'},
    {koreansk: 'Jumeok', norsk: 'Knytteneve'},
    {koreansk: 'Deongjumeok', norsk: 'Håndbak'},
    {koreansk: 'NKF', norsk: 'Norsk kampsport forbund'},
    {koreansk: 'WTF', norsk: 'World Taekwondo Federation'},
    {koreansk: 'Kukkiwon', norsk: 'WTFs hovedkvarter i Seoul, Sør-Korea'},
  ],
  spark: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Bandae yop chagi', norsk: 'Baklengs sidespark (med rotasjon)'},
    {koreansk: 'Naeryo chagi', norsk: 'Frontspark med kraft nedover'},
  ],
  monster: [
    {koreansk: ''},
    {koreansk: 'Taegeuk Sah-jang'},
    {koreansk: 'Taegeuk Sam-jang'},
  ],
  oneStep: [
    {'': '', angrep: '', forsvar: ''},
    {'': '1.', angrep: 'Dwit kobi area makki.<br/>Ap kobi area jireugi.<br/>', forsvar: '<br/>Dwit kobi area makki.<br/>Ap kobi momtong jireugi.'},
    {'': '2.', angrep: 'Dwit kobi area makki.<br/>Ap kobi momtong jireugi.<br/>', forsvar: '<br/>Dwit kobi geodoreo makki.<br/>Ap kobi momtong jireugi.'},
    {'': '3.', angrep: 'Dwit kobi oesantul makki.<br/>Ap kobi mejumeok olgul naeryo chigi.<br/>', forsvar: '<br/>Dwit kobi olgul makki.<br/>Ap kobi olgul jireugi.'},
    {'': '4', angrep: 'Dwit kobi area makki.<br/>Ap kobi momtong jireugi.</br><br/>', forsvar: '<br/>Dwit kobi sonnal geodoreo makki.<br/>Ap chagi (høyre fot).<br/>Juchum seogi dubon jireugi.'},
    {'': '5', angrep: 'Dwit kobi area makki.<br/>Ap kobi momtong jireugi.</br><br/>', forsvar: '<br/>Dwit kobi sonnal geodoreo makki.<br/>Dollyo chagi (høyre fot).<br/>Ap kobi olgul geodoreo ap chigi.'},
    {'': '6', angrep: 'Dwit kobi area makki.<br/>Ap kobi momtong jireugi.</br><br/>', forsvar: '<br/>Dwit kobi sonnal geodoreo makki.<br/>Yop chagi (høyre fot).<br/>Dwit kobi sonnal bakkat chigi.'},
  ],
  selvforsvar: [
    {teknikk: ''},
    {teknikk: 'Forsvar mot holde fast i genser, jakke, kjole, osv.'},
  ],
};
const cup5 = {
  teori: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Kyoregi', norsk: 'Frikamp'},
    {koreansk: 'Hana', norsk: '1'},
    {koreansk: 'Dul', norsk: '2'},
    {koreansk: 'Set', norsk: '3'},
    {koreansk: 'Net', norsk: '4'},
    {koreansk: 'Daseot', norsk: '5'},
    {koreansk: 'Yaseot', norsk: '6'},
    {koreansk: 'Ilgop', norsk: '7'},
    {koreansk: 'Yadul', norsk: '8'},
    {koreansk: 'Ahop', norsk: '9'},
    {koreansk: 'Yeol', norsk: '10'},
  ],
  spark: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Dwit chagi', norsk: '“Hestespark”, hælen mot taket'},
    {koreansk: 'Apchok dolyo chagi', norsk: 'Rundspark med tåball'},
  ],
  monster: [
    {koreansk: ''},
    {koreansk: 'Taegeuk Oh-jang'},
    {koreansk: 'Taegeuk Sah-jang'},
    {koreansk: 'Taegeuk Sam-jang'},
  ],
  oneStep: [ //Ilpoterian 1-3
    {'': '', angrep: ' ap kobi area makki (tilbake), ap kobi momtong jireugi', forsvar: ''},
  ],
  selvforsvar: [
    {teknikk: ''},
    {teknikk: 'Forsvar mot hookslag'},
  ],
};
const cup4 = {
  teori: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Pal', norsk: 'Arm (fra skulder til håndledd)'},
    {koreansk: 'Dari', norsk: 'Ben (fra hofteben til ankel)'},
    {koreansk: 'Batangson', norsk: 'Nederste del av håndflate'},
    {koreansk: 'Son', norsk: 'Hånd (fra håndleddet og ut) '},
    {koreansk: 'Bal', norsk: 'Fot (fra ankelen og ned) '},
  ],
  spark: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Bandae dollyo chagi ', norsk: 'Hookspark'},
    {koreansk: 'Twio ap chagi', norsk: 'Hoppende frontspark'},
  ],
  monster: [
    {koreansk: ''},
    {koreansk: 'Taegeuk Yuk-jang'},
    {koreansk: 'Taegeuk Oh-jang'},
    {koreansk: 'Taegeuk Sah-jang'},
  ],
  oneStep: [ //Ilpoterian 1-6
    {'': '', angrep: ' ap kobi area makki (tilbake), ap kobi momtong jireugi', forsvar: ''},
  ],
  selvforsvar: [
    {teknikk: ''},
    {teknikk: 'Forsvar mot rundspark'},
  ],
  brekking: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Yop chagi ', norsk: 'Sidespark'},
    {koreansk: 'Naeryo chagi', norsk: 'Nedoverrettet spark'},
    {koreansk: 'Palkup dollyo chigi', norsk: 'Albueslag'},
  ],
};
const cup3 = {
  teori: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Gyokpa', norsk: 'Brekking'},
    {koreansk: 'Chong', norsk: 'Blå'},
    {koreansk: 'Hong', norsk: 'Rød'},
    {koreansk: 'Palkup', norsk: 'Albue'},
    {koreansk: 'Palmok', norsk: 'Håndledd'},
    {koreansk: 'Sonnal', norsk: 'Lillefingeresiden av en åpen hånd (knivhånd)'},
    {koreansk: 'Deongsonnal', norsk: 'Tommelfingersiden av en åpen hånd'},
    {koreansk: 'Jabki', norsk: 'Grep'},
    {koreansk: 'Mureup', norsk: 'Kne'},
  ],
  spark: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Momdollyo chagi', norsk: 'Roterende frontspark (spinnkick)'},
    {koreansk: 'Twio yop chagi', norsk: 'Hoppende sidespark (flykick)'},
  ],
  monster: [
    {koreansk: ''},
    {koreansk: 'Taegeuk Chil-jang'},
    {koreansk: 'Taegeuk Yuk-jang'},
    {koreansk: 'Taegeuk Oh-jang'},
  ],
  oneStep: [ //Ilpoterian 1-6
    {'': '', angrep: ' ap kobi area makki (tilbake), ap kobi momtong jireugi', forsvar: ''},
  ],
  selvforsvar: [
    {teknikk: ''},
    {teknikk: 'Forsvar mot rundspark'},
  ],
  brekking: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Dwit chagi ', norsk: 'Bakspark'},
    {koreansk: 'Dolyo chagi', norsk: 'Rundspark'},
    {koreansk: 'Momtong jireugi', norsk: 'Rett slag'},
  ],
};
const cup2 = {
  teori: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Kukki', norsk: 'Flagg'},
    {koreansk: 'Tae', norsk: 'Fot'},
    {koreansk: 'Kwon', norsk: 'Hånd'},
    {koreansk: 'Do', norsk: 'Kunst/vei'},
    {koreansk: 'Teok', norsk: 'Kjeve'},
    {koreansk: 'Tae Kyon', norsk: 'Opphavet til dagens taekwondo'},
    {koreansk: 'Il', norsk: 'Første'},
    {koreansk: 'I', norsk: 'Andre'},
    {koreansk: 'Sam', norsk: 'Tredje'},
    {koreansk: 'Sah', norsk: 'Fjerde'},
    {koreansk: 'Oh', norsk: 'Femte'},
    {koreansk: 'Yuk', norsk: 'Sjette'},
    {koreansk: 'Chil', norsk: 'Syvende'},
    {koreansk: 'Pal', norsk: 'Åttende'},
    {koreansk: 'Ko', norsk: 'Niende'},
    {koreansk: 'Sip', norsk: 'Tiende'},
  ],
  spark: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Dwidola bandae dollyo chagi', norsk: 'Roterende hookspark'},
    {koreansk: 'Twio dollyo chagi', norsk: 'Hoppende rundspark'},
  ],
  monster: [
    {koreansk: ''},
    {koreansk: 'Taegeuk Pal-jang'},
    {koreansk: 'Taegeuk Chil-jang'},
    {koreansk: 'Taegeuk Yuk-jang'},
  ],
  oneStep: [ //Ilpoterian 1-9
    {'': '', angrep: ' ap kobi area makki (tilbake), ap kobi momtong jireugi', forsvar: ''},
  ],
  selvforsvar: [
    {teknikk: ''},
    {teknikk: 'Forsvar mot sittende overskrids på bakken'},
  ],
  brekking: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Dwidola bansdae dollyo chagi', norsk: 'Roterende hookspark'},
    {koreansk: 'Twio yop chagi', norsk: 'Hoppende sidespark'},
    {koreansk: 'Sonnal bakkat chigi', norsk: 'Knivhåndslag utover'},
  ],
};
const cup1 = {
  teori: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Hosinsul', norsk: 'Selvforsvar'},
    {koreansk: 'Apchuk', norsk: 'Tåball'},
    {koreansk: 'Dwitchuk', norsk: 'Hæl'},
    {koreansk: 'Dwikkumchi', norsk: ' Baksiden av hælen'},
    {koreansk: 'Baldeung', norsk: 'Vrist'},
    {koreansk: 'Balnal', norsk: 'Knivseggen på foten'},
    {koreansk: 'Wen', norsk: 'Venstre'},
    {koreansk: 'Oreun', norsk: 'Høyre'},
    {koreansk: 'Taegukki', norsk: 'Navnet på det koreanske flagget'},
  ],
  spark: [
    {koreansk: '', norsk: ''},
    {koreansk: 'Bitureo chagi', norsk: 'Omvendt mit chagi utover'},
    {koreansk: 'Mureup chagi', norsk: 'Knespark'},
  ],
  sparkKombi: [
    {koreansk: 'Yop chagi + dwit chagi', norsk: 'Sparkes med høyre, deretter venstre'},
    {koreansk: 'Dollyo chagi + momdollyo chagi', norsk: 'Sparkes med samme fot '},
    {koreansk: 'Ap chagi + twio ap chagi', norsk: 'Sparkes med samme fot'},
    {koreansk: 'Naeryo chagi + twio naeryo chagi ', norsk: 'Sparkes med samme fot'},
    {koreansk: 'Dollyo chagi + dwidola bandae dollyo chagi ', norsk: 'Sparkes med høyre, deretter venstre'},
  ],
  monster: [
    {koreansk: ''},
    {koreansk: 'Poomsae Koryo'},
    {koreansk: 'Taegeuk Pal-jang'},
    {koreansk: 'Taegeuk Chil-jang'},
    {koreansk: 'Taegeuk Yuk-jang'},
    {koreansk: 'Taegeuk Oh-jang'},
    {koreansk: 'Taegeuk Sah-jang'},
    {koreansk: 'Taegeuk Sam-jang'},
    {koreansk: 'Taegeuk I-jang'},
    {koreansk: 'Taegeuk Il-jang'},
  ],
  oneStep: [ //Ilpoterian 1-9 - Gibondongjak 1-6
    {'': '', angrep: ' ap kobi area makki (tilbake), ap kobi momtong jireugi', forsvar: ''},
  ],
  selvforsvar: [
    {teknikk: ''},
    {teknikk: 'Forsvar mot rundspark'},
  ],
  brekking: [
    {koreansk: '', norsk: ''},
  ],
};

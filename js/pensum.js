const cup10 = {
  teori: [
    {romanization: '', norsk: ''},
    {romanization: 'Charyôt', norsk: 'Giv akt stilling'},
    {romanization: 'Baro / Goman', norsk: 'Stopp'},
    {romanization: 'Kyôngnye', norsk: 'Hilse'},
    {romanization: 'Gihap (Ki-ap)', norsk: 'Skrik (Ki = Energi, Ap = Samle)'},
    {romanization: 'Junbi', norsk: 'Start stilling'},
    {romanization: 'Dwirodora', norsk: 'Snu'},
  ],
  spark: [
    {romanization: '', norsk: ''},
    {romanization: 'Ap chagi', norsk: 'Frontspark med vrist'},
    {romanization: 'Dollyo chagi',norsk: 'Rundspark'},
    {romanization: 'Yop chagi',norsk: 'Sidespark'},
  ],
  monster: [
    {romanization: ''},
    {romanization: 'Taegeuk Il-jang'},
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
    {romanization: '', norsk: ''},
    {romanization: 'Dojang', norsk: 'Treningssal'},
    {romanization: 'Dobok', norsk: 'Taekwondo drakt'},
    {romanization: 'Sabõm-nim', norsk: 'Master'},
    {romanization: 'Gyosa-nim', norsk: 'Instruktør'},
    {romanization: 'Chigi', norsk: 'Slag/støt (der armen går i en sirkelbevegelse)'},
    {romanization: 'Jireugi', norsk: 'Slag (der armen går i en strak linje)'},
    {romanization: 'Kobi', norsk: 'Felles betegnelse for lange stillinger'},
    {romanization: 'Seogi', norsk: 'Felles betegnelse for korte stillinger'},
    {romanization: 'Makki', norsk: 'Blokk'},
  ],
  spark: [
    {romanization: '', norsk: ''},
    {romanization: 'Apchok ap chagi', norsk: 'Frontspark med tåball'},
    {romanization: 'An chagi',norsk: 'Innadgående spark'},
    {romanization: 'Bakkat chagi',norsk: 'Utadgående spark'},
  ],
  monster: [
    {romanization: ''},
    {romanization: 'Taegeuk I-jang'},
    {romanization: 'Taegeuk Il-jang'},
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
    {romanization: '', norsk: ''},
    {romanization: 'Olgul', norsk: 'Fra kravebenet og opp'},
    {romanization: 'Momtong', norsk: 'Fra kravebenet ned til hoftebeinet '},
    {romanization: 'Area', norsk: 'Fra hoftebeinet og ned'},
  ],
  spark: [
    {romanization: '', norsk: ''},
    {romanization: 'Mit chagi', norsk: 'Skrått spark (ca. 45°)'},
    {romanization: 'Mira chagi', norsk: 'Dyttespark'},
  ],
  monster: [
    {romanization: ''},
    {romanization: 'Taegeuk Sam-jang'},
    {romanization: 'Taegeuk I-jang'},
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
    {romanization: '', norsk: ''},
    {romanization: 'Mori', norsk: 'Hode'},
    {romanization: 'Mok', norsk: 'Hals'},
    {romanization: 'Mom', norsk: 'Kroppen'},
    {romanization: 'Jumeok', norsk: 'Knytteneve'},
    {romanization: 'Deongjumeok', norsk: 'Håndbak'},
    {romanization: 'NKF', norsk: 'Norsk kampsport forbund'},
    {romanization: 'WTF', norsk: 'World Taekwondo Federation'},
    {romanization: 'Kukkiwon', norsk: 'WTFs hovedkvarter i Seoul, Sør-Korea'},
  ],
  spark: [
    {romanization: '', norsk: ''},
    {romanization: 'Bandae yop chagi', norsk: 'Baklengs sidespark (med rotasjon)'},
    {romanization: 'Naeryo chagi', norsk: 'Frontspark med kraft nedover'},
  ],
  monster: [
    {romanization: ''},
    {romanization: 'Taegeuk Sah-jang'},
    {romanization: 'Taegeuk Sam-jang'},
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
    {romanization: '', norsk: ''},
    {romanization: 'Kyoregi', norsk: 'Frikamp'},
    {romanization: 'Hana', norsk: '1'},
    {romanization: 'Dul', norsk: '2'},
    {romanization: 'Set', norsk: '3'},
    {romanization: 'Net', norsk: '4'},
    {romanization: 'Daseot', norsk: '5'},
    {romanization: 'Yaseot', norsk: '6'},
    {romanization: 'Ilgop', norsk: '7'},
    {romanization: 'Yadul', norsk: '8'},
    {romanization: 'Ahop', norsk: '9'},
    {romanization: 'Yeol', norsk: '10'},
  ],
  spark: [
    {romanization: '', norsk: ''},
    {romanization: 'Dwit chagi', norsk: '“Hestespark”, hælen mot taket'},
    {romanization: 'Apchok dolyo chagi', norsk: 'Rundspark med tåball'},
  ],
  monster: [
    {romanization: ''},
    {romanization: 'Taegeuk Oh-jang'},
    {romanization: 'Taegeuk Sah-jang'},
    {romanization: 'Taegeuk Sam-jang'},
  ],
  oneStep: [
    {'': '', angrep: '', forsvar: ''},
  ],
  selvforsvar: [
    {teknikk: '', video: ''},
    {teknikk: 'Forsvar mot hookslag'},
  ],
};

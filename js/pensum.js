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
    {romanization: '', norsk: '', video: ''},
    {romanization: 'Ap chagi', norsk: 'Frontspark med vrist', video: 'yo'},
    {romanization: 'Dollyo chagi',norsk: 'Rundspark', video: 'yo'},
    {romanization: 'Yop chagi',norsk: 'Sidespark', video: 'yo'},
  ],
  monster: [
    {romanization: '', video: ''},
    {romanization: 'Taegeuk Il-jang', video: 'yo'},
  ],
  oneStep: [
    {'': '', angrep: '', forsvar: ''},
    {'': '1.', angrep: 'Dwit kobi area makki.<br/>Ap kobi area jireugi.<br/>', forsvar: '<br/>Dwit kobi area makki.<br/>Ap kobi momtong jireugi.'},
    {'': '2.', angrep: 'Dwit kobi area makki.<br/>Ap kobi momtong jireugi.<br/>', forsvar: '<br/>Dwit kobi geodoreo makki.<br/>Ap kobi momtong jireugi.'},
    {'': '3.', angrep: 'Dwit kobi oesantul makki.<br/>Ap kobi mejumeok olgul naeryo chigi.<br/>', forsvar: '<br/>Dwit kobi olgul makki.<br/>Ap kobi olgul jireugi.'},
  ],
  selvforsvar: [
    {teknikk: '', video: ''},
    {teknikk: 'Fallteknikker og rull', video: 'yo'},
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
    {romanization: '', norsk: '', video: ''},
    {romanization: 'Apchok ap chagi', norsk: 'Frontspark med tåball', video: 'yo'},
    {romanization: 'An chagi',norsk: 'Innadgående spark', video: 'yo'},
    {romanization: 'Bakkat chagi',norsk: 'Utadgående spark', video: 'yo'},
  ],
  monster: [
    {romanization: '', video: ''},
    {romanization: 'Taegeuk I-jang', video: 'yo'},
    {romanization: 'Taegeuk Il-jang', video: 'yo'},
  ],
  oneStep: [
    {'': '', angrep: '', forsvar: ''},
    {'': '1.', angrep: 'Dwit kobi area makki.<br/>Ap kobi area jireugi.<br/>', forsvar: '<br/>Dwit kobi area makki.<br/>Ap kobi momtong jireugi.'},
    {'': '2.', angrep: 'Dwit kobi area makki.<br/>Ap kobi momtong jireugi.<br/>', forsvar: '<br/>Dwit kobi geodoreo makki.<br/>Ap kobi momtong jireugi.'},
    {'': '3.', angrep: 'Dwit kobi oesantul makki.<br/>Ap kobi mejumeok olgul naeryo chigi.<br/>', forsvar: '<br/>Dwit kobi olgul makki.<br/>Ap kobi olgul jireugi.'},
  ],
  selvforsvar: [
    {teknikk: '', video: ''},
    {teknikk: 'Forsvar mot håndleddsgrep', video: 'yo'},
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
    {romanization: '', norsk: '', video: ''},
    {romanization: 'Mit chagi', norsk: 'Skrått spark (ca. 45°)', video: 'yo'},
    {romanization: 'Mira chagi', norsk: 'Dyttespark', video: 'yo'},
  ],
  monster: [
    {romanization: '', video: ''},
    {romanization: 'Taegeuk Sam-jang', video: 'yo'},
    {romanization: 'Taegeuk I-jang', video: 'yo'},
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
    {teknikk: '', video: ''},
    {teknikk: 'Forsvar mot kveletak', video: 'yo'},
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
    {romanization: '', norsk: '', video: ''},
    {romanization: 'Bandae yop chagi', norsk: 'Baklengs sidespark (med rotasjon)', video: 'yo'},
    {romanization: 'Naeryo chagi', norsk: 'Frontspark med kraft nedover', video: 'yo'},
  ],
  monster: [
    {romanization: '', video: ''},
    {romanization: 'Taegeuk Sah-jang', video: 'yo'},
    {romanization: 'Taegeuk Sam-jang', video: 'yo'},
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
    {teknikk: '', video: ''},
    {teknikk: 'Forsvar mot holde fast i genser, jakke, kjole, osv.', video: 'yo'},
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
    {romanization: '', norsk: '', video: ''},
    {romanization: 'Dwit chagi', norsk: '“Hestespark”, hælen mot taket', video: 'yo'},
    {romanization: 'Apchok dolyo chagi', norsk: 'Rundspark med tåball', video: 'yo'},
  ],
  monster: [
    {romanization: '', video: ''},
    {romanization: 'Taegeuk Oh-jang', video: 'yo'},
    {romanization: 'Taegeuk Sah-jang', video: 'yo'},
    {romanization: 'Taegeuk Sam-jang', video: 'yo'},
  ],
  oneStep: [
    {'': '', angrep: '', forsvar: ''},
  ],
  selvforsvar: [
    {teknikk: '', video: ''},
    {teknikk: 'Forsvar mot hookslag', video: 'yo'},
  ],
};

// Per vraag gekozen: toon de context of het genoemde onderwerp, niet de oplossing.
// Getallen verwijzen naar bestaande woordenschatprenten; namen naar contextbeelden.
const QUESTION_IMAGES={
2:['rondtrekken','kampvuur','boerendorp','boerendorp','boerendorp',2,34],
3:['rivierlandschap','egypte-dagelijks','rivierlandschap',7,7,'egypte-dagelijks','soldaten','egypte-dagelijks'],
4:['rivierlandschap',33,'rivierlandschap','rivierlandschap','boerendorp',18],
5:['boerendorp','boerendorp',27,'rivierlandschap',30],
6:['boerendorp',22,36,'boerendorp',36,36,'rivierlandschap'],
7:['boerendorp',29,28,26,35,'boerendorp'],
8:[5,35,[5,35],[5,35],5],
9:[['egypte-dagelijks','boerendorp'],[7,26],'piramide','boerendorp','rivierlandschap']
};
for(const lesson of LESSONS){
  if(QUESTION_IMAGES[lesson.n].length!==lesson.questions.length)throw new Error('Er ontbreekt een vraagprent bij les '+lesson.n);
  lesson.questionImages=QUESTION_IMAGES[lesson.n];
}

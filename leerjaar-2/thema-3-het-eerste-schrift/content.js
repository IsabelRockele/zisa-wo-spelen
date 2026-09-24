// Eigen oefenvragen op basis van de lesinhoud van Wereldkanjers 2, thema 3.
const LESSONS = [
{n:2,title:'De eerste mensen',icon:'🔥',image:34,questions:[
['Waarom trokken de eerste mensen rond?','Ze zochten voedsel','Ze zochten winkels','Ze bezorgden brieven'],
['Wat konden mensen dankzij vuur?','Voedsel garen en zich verwarmen','Graan laten groeien zonder water','Werktuigen van papier maken'],
['Wat hoort bij akkerbouw?','Graan zaaien en oogsten','Schapen verzorgen','Vissen vangen'],
['Wat hoort bij veeteelt?','Dieren houden en verzorgen','Graan zaaien','Stenen bewerken'],
['Waarom bleven de eerste boeren op één plek wonen?','Ze verbouwden gewassen en hielden dieren','Ze hadden geen voedsel nodig','Ze konden al brieven schrijven'],
['Wat is een materiële bron?','Een oude vuistbijl','Een geschreven wet','Een tekst op papyrus'],
['Wat leren oude werktuigen ons?','Hoe mensen vroeger werkten','Wat morgen gebeurt','Hoe onze computers werken']
]},
{n:3,title:'Het oude Egypte',icon:'☀️',image:7,questions:[
['Welke rivier was belangrijk in het oude Egypte?','De Nijl','De Tigris','De Eufraat'],
['Wie was de leider van het oude Egypte?','De farao','Een boer','Een handelaar'],
['Waarom woonden mensen graag langs de Nijl?','Er was water en vruchtbare grond','Er was nergens water','Er groeiden geen planten'],
['Hoe heet het schrift van het oude Egypte?','Hiërogliefen','Spijkerschrift','Ons alfabet'],
['Waarop schreven Egyptische schrijvers vaak?','Papyrus','Plastic','Glas'],
['Wat deden de meeste mensen in het oude Egypte?','Ze werkten als boer','Ze waren farao','Ze schreven boeken'],
['Wat deden soldaten?','Het land beschermen','Alleen potten bakken','Wetten opschrijven'],
['Wat deed een handelaar?','Goederen kopen, verkopen en ruilen','Het hele rijk besturen','Alleen bidden']
]},
{n:4,title:'Mesopotamië',icon:'💧',image:9,questions:[
['Tussen welke rivieren lag Mesopotamië?','De Tigris en de Eufraat','De Nijl en de Schelde','De Maas en de Nijl'],
['Waarom was vruchtbare grond belangrijk?','Gewassen konden er goed groeien','Er groeide nooit iets','Er was geen water nodig'],
['Wat bouwden mensen om water tegen te houden?','Dijken','Paleizen','Potten'],
['Wat groeven mensen om water naar de akkers te leiden?','Kanalen','Stadsmuren','Tempels'],
['Waarom moesten mensen samenwerken?','Om dijken en kanalen te maken','Om alle oogsten weg te gooien','Om geen voedsel meer te verbouwen'],
['Waarom bewaarden mensen een deel van het voedsel?','Als voorraad voor een slechte oogst','Omdat niemand at','Om de rivieren te vullen']
]},
{n:5,title:'Van dorp naar stadstaat',icon:'🏘️',image:27,questions:[
['Wat is een stadstaat?','Een stad met dorpen en land eromheen','Een losse boerderij','Een rivier zonder dorpen'],
['Waarom konden er nieuwe beroepen ontstaan?','Er was genoeg voedsel en niet iedereen moest boer zijn','Er was nergens voedsel','Niemand wilde samenwerken'],
['Waarvoor diende de stadsmuur?','Om de stad te beschermen','Om de akkers water te geven','Om graan te malen'],
['Wat kan er zonder goede kanalen met de oogst gebeuren?','De oogst kan mislukken','De planten krijgen altijd precies genoeg water','De planten hebben geen water meer nodig'],
['Welk beroep hoort bij het maken van potten?','Een ambachtsman of ambachtsvrouw','Een soldaat','Een koning']
]},
{n:6,title:'Samenleven in een stadstaat',icon:'🏛️',image:36,questions:[
['Wie bestuurde een stadstaat?','Een koning','Elke boer om de beurt','Alleen de soldaten'],
['Wat deed een schriftgeleerde?','Lezen, schrijven en wetten opschrijven','Alleen vee verzorgen','Alleen brood bakken'],
['Wat deden priesters?','Bidden, offers begeleiden en de koning raad geven','Alleen akkers ploegen','Alleen oorlog voeren'],
['Wat betekent onvrij zijn?','Niet zelf over je leven mogen beslissen','Altijd koning zijn','Elk beroep vrij mogen kiezen'],
['Wat was een ziggurat?','Een hoge tempeltoren','Een graf voor elke boer','Een kanaal'],
['Waarom bouwden mensen de ziggurat zo hoog?','Ze geloofden dat ze dichter bij de goden kwamen','Om er graan op te zaaien','Om er schepen aan vast te maken'],
['Wat betekent natuurgodsdienst?','Geloven in goden van de natuur','Alleen geloven in letters','Een soort landbouw']
]},
{n:7,title:'Het ontstaan van het schrift',icon:'📜',image:26,questions:[
['Waarom werd schrijven nodig?','Er waren te veel afspraken en hoeveelheden om te onthouden','Mensen wilden geen handel meer drijven','Er waren geen beroepen meer'],
['Waarvoor gebruikten mensen telstenen?','Om aantallen bij te houden','Om brood te bakken','Om kanalen te graven'],
['Wat doe je bij beeldschrift?','Tekenen wat je bedoelt','Alleen zingen','Letters uit ons alfabet typen'],
['Hoe maakten mensen spijkerschrift in zachte klei?','Met een rietje','Met een toetsenbord','Met een verfroller'],
['Waarom werden belangrijke wetten in steen geschreven?','Ze moesten lang bewaard blijven','Steen was eetbaar','Niemand mocht ze ooit zien'],
['Wat konden boeren dankzij het schrift laten noteren?','Hoeveel graan ze hadden afgegeven','Het weer van volgend jaar','Hoe een computer werkt']
]},
{n:8,title:'Oude geschreven bronnen',icon:'🔎',image:5,questions:[
['Wat is het epos van Gilgamesj?','Een oud verhaal over een held en goden','Een lijst met boodschappen van vandaag','Een soort kanaal'],
['Wat bevat de codex van Hammurabi?','Regels en wetten','Alleen recepten','Een kaart van België'],
['Waar komen deze twee oude bronnen vandaan?','Mesopotamië','België','Het oude Rome'],
['Waarom zijn geschreven bronnen nuttig?','Ze vertellen ons over het leven van vroeger','Ze voorspellen alles wat nog komt','Ze maken oude voorwerpen overbodig'],
['Wat lijkt vandaag op een oud epos?','Een verhaal over een held','Een drinkfles','Een stadsmuur']
]},
{n:9,title:'Egypte en Mesopotamië',icon:'⚖️',image:30,questions:[
['Wat hadden Egypte en Mesopotamië gemeen?','Rivieren waren belangrijk voor landbouw','Iedereen kon schrijven','Er waren geen boeren'],
['Welke combinatie klopt?','Egypte: hiërogliefen — Mesopotamië: spijkerschrift','Egypte: spijkerschrift — Mesopotamië: hiërogliefen','Beide: ons alfabet'],
['Wat was een piramide in het oude Egypte?','Een graf voor een farao','Een markt voor dieren','Een kanaal'],
['Welke oude uitvinding gebruiken we nog steeds?','Het wiel','De smartphone','De televisie'],
['Wat is irrigatie?','Water naar de gewassen brengen','Een verhaal opschrijven','Een stadsmuur bouwen']
]}
];
const SEQUENCES=[
{title:'Van eenvoudige naar betere werktuigen',image:34,steps:['Gewone stenen','Een stenen vuistbijl','Pijlpunten en speerpunten van steen of been','Werktuigen van brons en ijzer']},
{title:'Van waterproblemen naar nieuwe beroepen',image:27,steps:['Te veel water of te veel droogte','Samen dijken en kanalen bouwen','Genoeg water en een goede oogst','Meer voedsel dan nodig','Niet iedereen hoeft boer te zijn']},
{title:'Het schrift groeit',image:26,steps:['Telstenen: aantallen bijhouden','Beeldschrift: tekenen wat je bedoelt','Spijkerschrift: tekens in klei of steen']}
];

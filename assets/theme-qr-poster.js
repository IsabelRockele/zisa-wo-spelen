function renderThemeQrPoster(output, theme, fillQr) {
  const [, grade, number] = location.pathname.match(/\/leerjaar-([12])\/thema-([1-4])-/);
  const designs = {
    '1-1': ["bibi-klas","Bibi verkent haar school met een boek en kleurpotloden","#18477a","#e6f2ff"],
    '1-2': ["bibi-bos","Bibi geeft een eikel aan een eekhoorn","#24552f","#e7f3df"],
    '1-3': ["bibi-tijd","Bibi vergelijkt een oude telefoon met een smartphone","#673889","#f1e8fc"],
    '1-4': ["bibi-kracht","Bibi laat een speelgoedauto van een helling rollen en schijnt met een zaklamp","#834312","#fff0d6"],
    '2-1': ["zebra-bornem","Het zebraatje verkent Bornem met een plattegrond","#205376","#e2f3fa"],
    '2-2': ["zebra-bos","Het zebraatje ontdekt paddenstoelen met een vergrootglas","#305724","#edf4dd"],
    '2-3': ["zebra-schrift","Het zebraatje schrijft met een rietstift op een kleitablet","#774325","#f9ead6"],
    '2-4': ["zebra-kracht","Het zebraatje onderzoekt een magneet en een zaklamp","#4d3b90","#ede9ff"]
  };
  const [scene, description, ink, tint] = designs[grade + '-' + number];
  const year = grade === '1' ? '1ste leerjaar' : '2de leerjaar';

  output.innerHTML = '<article class="theme-qr-poster" style="--poster-ink:' + ink + ';--poster-tint:' + tint + '">' +
    '<p class="theme-qr-brand">Zisa WO Spelen</p>' +
    '<p class="theme-qr-label">Thema ' + number + ' · ' + year + '</p><h1></h1>' +
    '<img class="theme-qr-scene" src="../../assets/qr-' + scene + '.png" alt="">' +
    '<div class="theme-qr-code"></div><p class="theme-qr-instruction">Scan en speel mee!</p></article>';
  output.querySelector('h1').textContent = theme.split(' · ')[0];
  output.querySelector('.theme-qr-scene').alt = description;
  fillQr(output.querySelector('.theme-qr-code'));
}

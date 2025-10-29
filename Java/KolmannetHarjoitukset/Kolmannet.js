function naytaParillisetAlaspain() {
    const syote = document.getElementById("eka").value;
    const luku = parseInt(syote, 10);
    let tulos = "";
  
    if (isNaN(luku) || luku % 2 !== 0 || luku <= 0) {  //kertoo parittomat luvut annetusta luvusta alaspäin
      tulos = "Anna positiivinen parillinen luku!";
    } else {
      for (let i = luku; i > 0; i--) {
        if (i % 2 === 0) {
          tulos += i + " ";
        }
      }
    }
  
    document.getElementById("toky").textContent = tulos.trim();
  }



  function lisaaÖJokaToisenJalkeen() {
    const syote = document.getElementById("toka").value;
    let salasana = "";
  
    for (let i = 0; i < syote.length; i++) {
      salasana += syote[i] + "Ö";
    }
  
    document.getElementById("tulos").textContent = salasana;
  }

  function tarkastaaOnkoÖ() {
    // Haetaan syötekentän arvo
    const syote = document.getElementById("koo").value;

    // Haetaan vastauspaikka
    const vastaus = document.getElementById("tarkasta");

    // Tarkastetaan, sisältääkö sana ö- tai Ö-kirjaimen
    if (syote.includes("ö") || syote.includes("Ö")) {
        vastaus.textContent = "Odotas mietin, ööÖööÖÖööÖööö. Aivan kyllä ö kirjain löytyy";
    } else {
        vastaus.textContent = "Ei ole, kokeile seuraavaksi sanaa jossa on ö";
    }
}


function laskeKertoma() {
    const syote = document.getElementById("kertomaLuku").value;
    const luku = parseInt(syote, 10);
    const tulos = document.getElementById("kertomaTulos");

    if (isNaN(luku) || luku < 0) {
        tulos.textContent = "Anna ei-negatiivinen kokonaisluku!";
        return;
    }

    let kertoma = 1;
    for (let i = 2; i <= luku; i++) {
        kertoma *= i;
    }

    tulos.textContent = `${luku}! = ${kertoma}`;
}

function tulostaHipHeijaa() {
  // Haetaan elementti, johon tulos kirjoitetaan
  const tulostus = document.getElementById("tulostus");

  // Luodaan tyhjä merkkijono tulosta varten
  let tulos = "";

  // Käydään luvut 1–100 läpi
  for (let i = 1; i <= 100; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
      tulos += "hipheijaa ";
    } else if (i % 3 === 0) {
      tulos += "hip ";
    } else if (i % 5 === 0) {
      tulos += "heijaa ";
    } else {
      tulos += i + " ";
    }
      if (i % 20 === 0) {
      tulos += "\n";
    }
  }

  // Näytetään tulos HTML-elementissä
  tulostus.textContent = tulos.trim(); // trim poistaa viimeisen ylimääräisen välilyönnin
}


function tulostaNumerot() {
  // Haetaan elementti, johon tulos kirjoitetaan
  const tulostus = document.getElementById("ykä");

  // Luodaan tyhjä merkkijono tulosta varten
  let tulos = "";

  // Käydään luvut 1–10 läpi
  for (let i = 1; i <= 10; i++) {
    tulos += i + " "; // Lisätään luku ja välilyönti
  }

  // Näytetään tulos HTML-elementissä
  tulostus.textContent = tulos.trim(); // Poistetaan viimeinen ylimääräinen välilyönti
}


function laskeSumma() {
  // Haetaan tulostusalue
  const tulostus = document.getElementById("tulostus7");

  // Alustetaan summa
  let summa = 0;

  // Lasketaan luvut 1–10 yhteen
  for (let i = 1; i <= 10; i++) {
    summa += i;
  }

  // Näytetään tulos
  tulostus.textContent = "Summa on: " + summa;
}


function laskePotenssi() {
  // Haetaan käyttäjän syöttämät luvut
  const luku1 = parseFloat(document.getElementById("luku1").value);
  const luku2 = parseFloat(document.getElementById("luku2").value);

  // Haetaan tulostusalue
  const tulostus = document.getElementById("tulostus8");

  // Lasketaan potenssi
  const tulos = Math.pow(luku1, luku2);

  // Näytetään tulos
  tulostus.textContent = `${luku1}^${luku2} = ${tulos}`;
}


function etsiSuurinJaPienin() {
  const kentat = ["luku1", "luku2", "luku3", "luku4", "luku5"];
  const luvut = [];

  for (let id of kentat) {
    const kenttä = document.getElementById(id);
    const arvo = kenttä.value;

    // Tarkistetaan että kenttä ei ole tyhjä
    if (arvo === "") {
      document.getElementById("tulostus9").textContent = "Täytä kaikki kentät!";
      return;
    }

    const numero = Number(arvo);

    // Varmistetaan että arvo on oikea numero
    if (isNaN(numero)) {
      document.getElementById("tulostus9").textContent = `Virheellinen arvo kentässä ${id}`;
      return;
    }

    luvut.push(numero);
  }

  const suurin = Math.max(...luvut);
  const pienin = Math.min(...luvut);

  document.getElementById("tulostus9").textContent =
    `Suurin arvo: ${suurin}\nPienin arvo: ${pienin}`;
}


function muunnaSalasana() {
  const syöte = document.getElementById("salasana").value;
  const tulostus = document.getElementById("tulostus10");

  // Tarkistetaan että salasana ei ole tyhjä
  if (syöte.length === 0) {
    tulostus.textContent = "Anna salasana!";
    return;
  }

  // Arvotaan satunnainen indeksi salasanasta
  const indeksi = Math.floor(Math.random() * syöte.length);

  // Korvataan kyseinen merkki kirjaimella Ö
  const muokattu = syöte.substring(0, indeksi) + "Ö" + syöte.substring(indeksi + 1);

  // Tulostetaan muokattu salasana
  tulostus.textContent = `Muokattu salasana: ${muokattu}`;
}


function tulostaParillisetJaParittomat() {
  const pienempi = Number(document.getElementById("pienempi").value);
  const isompi = Number(document.getElementById("isompi").value);
  const tulostus = document.getElementById("tulostus11");

  // Tarkistetaan että isompi on oikeasti isompi
  if (isompi <= pienempi) {
    tulostus.textContent = "Virhe: isomman luvun tulee olla suurempi kuin pienemmän!";
    return;
  }

  let parilliset = [];
  let parittomat = [];
  let summaParilliset = 0;
  let summaParittomat = 0;

  for (let i = pienempi; i <= isompi; i++) {
    if (i % 2 === 0) {
      parilliset.push(i);
      summaParilliset += i;
    } else {
      parittomat.push(i);
      summaParittomat += i;
    }
  }

  // Tulostetaan kaikki
  tulostus.textContent =
    `Parilliset luvut: ${parilliset.join(", ")}\n` +
    `Parittomat luvut: ${parittomat.join(", ")}\n\n` +
    `Parillisten summa: ${summaParilliset}\n` +
    `Parittomien summa: ${summaParittomat}`;
}
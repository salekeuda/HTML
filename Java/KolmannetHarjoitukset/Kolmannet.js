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




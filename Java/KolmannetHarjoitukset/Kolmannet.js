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



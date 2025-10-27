function jarjesta() {       // järjestää numerot pienimmästä suurimpaan
    let taulu=[]
    let luku1 = document.getElementById("luku1").value;
    let luku2 = document.getElementById("luku2").value;
    let luku3 = document.getElementById("luku3").value;
    let vastaus = document.getElementById("vastaus"); // tämä estää sivua päivittymästä
    let teksti = "";
    taulu.push(luku1, luku2, luku3)
teksti = `annoit luvut ${luku1}, ${luku2}, ${luku3} `;
let uusitaulu = taulu.sort ((a,b) => (a-b));
teksti+= ` luvut ovat järjestyksessä ${uusitaulu}`;
vastaus.innerHTML = teksti; // tämä estää sivua päivittymästä
}

function etsiSuurin() {
   
    let eka = document.getElementById("eka").value;
    let toka = document.getElementById("toka").value;
    let kolmas = document.getElementById("kolmas").value;
    let neljas = document.getElementById("neljas").value;
    let viides = document.getElementById("viides").value;
    let taulu=[];
    taulu.push(eka, toka, kolmas, neljas, viides);
    let vastaus = document.getElementById("toki"); // tämä estää sivua päivittymästä
    vastaus.innerHTML = `Suurin numero on ${Math.max(...taulu)}`
}

function parillinenPariton() {
    let ekas = parseInt(document.getElementById("ekas").value);
  
    if (isNaN(ekas)) {
      document.getElementById("toky").innerHTML = "Syötä kelvollinen numero.";
      return;
    }
  
    let tulos = (ekas % 2 === 0) ? "parillinen" : "pariton";
    document.getElementById("toky").innerHTML = `Luku ${ekas} on ${tulos}.`;
  }
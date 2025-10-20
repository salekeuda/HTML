function tarkasta () {
    ktunnus = document.getElementById("ktunnus").value;
    salasana = document.getElementById("salasana").value;
    
    if (ktunnus == "sami.leppanen@edu.keuda.fi" && salasana == "salasana") {
        alert("Onnea osasit kirjoittaa oikein");
    } 
    else {
        alert("Tietosi on päin vittua");
    }
}


function mainSuit1() {
     jalankanSuit(["batu", "gunting", "kertas"], "Batu Gunting Kertas");
}

function mainSuit2() {
     jalankanSuit(["gajah", "orang", "semut"], "Gajah Orang Semut");
}


function mainSuit3() {
    jalankanSuit(["jempol", "telunjuk", "kelingking"], "Suit Jari");
}

function jalankanSuit(opsiArray, namaMode) {
    var pilihanUser = prompt("Masukkan pilihan (" + opsiArray.join(" / ") + "):");
  
  if (pilihanUser == null) return;
  pilihanUser = pilihanUser.toLowerCase();

  
  var pilihanComp = opsiArray[Math.floor(Math.random() * opsiArray.length)];
  var hasil = "";

    if (pilihanUser == pilihanComp) {
     hasil = "Seri!";
  } 
    else if (
    (pilihanUser == opsiArray[0] && pilihanComp == opsiArray[1]) ||
    (pilihanUser == opsiArray[1] && pilihanComp == opsiArray[2]) ||
    (pilihanUser == opsiArray[2] && pilihanComp == opsiArray[0])
     )
  {
    hasil = "Kamu Menang!";
  } else if (opsiArray.includes(pilihanUser)) {
     hasil = "Komputer Menang!";
  } else {
    hasil = "Pilihan tidak valid!";
  }

  document.getElementById("info-game").innerHTML = 
    "<b>Mode:</b> " + namaMode + "<br>" +
    "<b>Kamu:</b> " + pilihanUser + " | <b>Komputer:</b> " + pilihanComp + "<br><br>" +
    "<b>Hasil:</b> " + hasil;
}
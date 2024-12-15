window.onload = function() {
    setTimeout(function() {
      document.getElementById("terminalLoader").style.display = "none"; // Cache l'animation après 3 secondes
      document.getElementById("cardContainer").style.opacity = "1"; // Fait apparaître la carte après 3 secondes
    }, 3000); // 3000ms = 3 secondes
  };
  

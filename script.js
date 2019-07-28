document.getElementById("button").addEventListener("click", function() {

  var age = document.getElementById("age").value;
  var secondesDansUneMinute = 60;
  var minutesDansUneHeure = 60
  var heuresDansUnJour = 24;
  var joursDansUneAnnee = 365;
  var secondesDansUneHeure = secondesDansUneMinute * minutesDansUneHeure;
  var secondesDansUnJour = secondesDansUneHeure * heuresDansUnJour;
  var secondesDansUneAnnées = secondesDansUnJour * joursDansUneAnnee;
  var minutesDansUnJour = minutesDansUneHeure * heuresDansUnJour;
  var minutesDansUneAnnées = minutesDansUnJour * joursDansUneAnnee;
  var heuresDansUneAnnées = heuresDansUnJour * joursDansUneAnnee;
  var result = document.getElementById("result");
  var valeur;

  if (document.getElementById('inputSecondes').checked) {
   valeur = document.getElementById('inputSecondes').value;
   var ageEnSecondes = age * secondesDansUneAnnées;
   result.innerHTML = new Intl.NumberFormat().format(ageEnSecondes) + " secondes";
  }
  else if (document.getElementById('inputMinutes').checked) {
   valeur = document.getElementById('inputMinutes').value;
   var ageEnMinutes = age * minutesDansUneAnnées;
   result.innerHTML = new Intl.NumberFormat().format(ageEnMinutes) + " minutes";
  }
  else if (document.getElementById('inputHeures').checked) {
   valeur = document.getElementById('inputHeures').value;
   var ageEnHeures = age * heuresDansUneAnnées;
   result.innerHTML = result.innerHTML = new Intl.NumberFormat().format(ageEnHeures) + " heures";
  }
  else {
   valeur = document.getElementById('inputJours').value;
   var ageEnJours = age * joursDansUneAnnee;
   result.innerHTML = result.innerHTML = new Intl.NumberFormat().format(ageEnJours) + " jours";
  }

});

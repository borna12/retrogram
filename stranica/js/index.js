let vol1 = "https://borna12.github.io/retrogram/stranica/podatci.csv";

let results;
let filesData = []

const csvData = Papa.parse(vol1, {
  dynamicTyping: true,
  download: true,
  header: true,
  comments: "*=",
  complete: function (data) {
    results = data.data
  }
});

var podatci
var natuknice = []
let resultList = document.querySelector('#search-results');
let checker = (arr, target) => target.every(v => arr.includes(v));

setTimeout(() => {
  podatci = results
  for (var i = 0; i < podatci.length - 1; i++) {
    natuknice.push(podatci[i].Orth)
  }
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
}, 1500);

atributi = []
function myFunction(e) {
  $(".select").prop('selectedIndex',0);
  $("[class*='select-']").hide();
  if (e.value == "#imenica") {
    $(".select-imenica").show()
  }
  else if (e.value == "#zamjenica") { $(".select-zamijenica").show() }
  else { $("div[class*='select-']").hide(); }
}
function trazilica() {
  resultList.innerHTML = ""
  atributi = []
  var options = $('select');
  var values = $.map(options, function (option) {
    if (option.value != "")
      atributi.push(option.value);
  });
  for (let i = 0; i < podatci.length; i++) {
    var obj = podatci[i];
    lista_svega = [obj.Orth, obj.Pos, obj.VerbType, obj.Participle, obj.Gender, obj.PronounType, obj.Number, obj.Case, obj.inflectionType, obj.animacy, obj.person, obj.adjectiveType, obj.numeralType, obj.tenseType, obj.voice, obj.nounType, obj.Fajl]
    lista_svega = lista_svega.filter(function (e) { return e === 0 || e });
    if (checker(lista_svega, atributi)) {
      resultList.innerHTML += "<li>" + obj.Orth + "</li>"
    }
  }
}

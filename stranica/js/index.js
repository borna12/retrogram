let vol1 = "podatci.csv";

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
function pop_up(e){

  Swal.fire({
    title: $(e).parent().attr("data-Orth"),
    html:
    "<p class='pos podebljaj'>Vrsta riječi: <span class='vrijednost'>"+$(e).parent().attr("data-Pos")+"</span></p>"+
    "<p class='VerbType podebljaj'>Vrsta glagola: <span class='vrijednost'>"+$(e).parent().attr("data-VerbType")+"</span></p>"+
    "<p class='adjectiveType podebljaj'>Vrsta pridjeva: <span class='vrijednost'>"+$(e).parent().attr("data-adjectiveType")+"</span></p>"+
    "<p class='numeralType podebljaj'>Vrsta brojeva: <span class='vrijednost'>"+$(e).parent().attr("data-numeralType")+"</span></p>"+
    "<p class='PronounType podebljaj'>Vrsta zamjenice: <span class='vrijednost'>"+$(e).parent().attr("data-PronounType")+"</span></p>"+
    "<p class='nounType podebljaj'>Vrsta imenice: <span class='vrijednost'>"+$(e).parent().attr("data-nounType")+"</span></p>"+
    "<p class='Participle podebljaj'>Participle: <span class='vrijednost'>"+$(e).parent().attr("data-Participle")+"</span></p>"+
    "<p class='Gender podebljaj'>Spol: <span class='vrijednost'>"+$(e).parent().attr("data-Gender")+"</span></p>"+
    "<p class='Number podebljaj'>Broj: <span class='vrijednost'>"+$(e).parent().attr("data-Number")+"</span></p>"+
    "<p class='Case podebljaj'>Padež: <span class='vrijednost'>"+$(e).parent().attr("data-Case")+"</span></p>"+
    "<p class='inflectionType podebljaj'>Sklonidba: <span class='vrijednost'>"+$(e).parent().attr("data-inflectionType")+"</span></p>"+
    "<p class='animacy podebljaj'>Živost: <span class='vrijednost'>"+$(e).parent().attr("data-animacy")+"</span></p>"+
    "<p class='person podebljaj'>Lice: <span class='vrijednost'>"+$(e).parent().attr("data-person")+"</span></p>"+
    "<p class='tense podebljaj'>Vrijeme: <span class='vrijednost'>"+$(e).parent().attr("data-tense")+"</span></p>"+
    "<p class='tenseType podebljaj'>Glagolsko vrijeme: <span class='vrijednost'>"+$(e).parent().attr("data-tenseType")+"</span></p>"+
    "<p class='mood podebljaj'>Glagolski način: <span class='vrijednost'>"+$(e).parent().attr("data-mood")+"</span></p>"+
    "<p class='infinitive podebljaj'>Infinitiv: <span class='vrijednost'>"+$(e).parent().attr("data-infinitive")+"</span></p>"+
    "<p class='verbialAdverb podebljaj'>Glagolski prilog: <span class='vrijednost'>"+$(e).parent().attr("data-verbialAdverb")+"</span></p>"+
    "<p class='voice podebljaj'>Glagolsko stanje: <span class='vrijednost'>"+$(e).parent().attr("data-voice")+"</span></p>"+
    "<p class='Fajl podebljaj'>Gramatika: <span class='vrijednost'>"+$(e).parent().attr("data-Fajl")+"</span></p>",
    showCloseButton: true,
    focusConfirm: false,
    confirmButtonText: 'zatvori',
  })
  $('.vrijednost').each(function(){
    if($(this).text()=="null" || $(this).text()=="undefined"){
      $(this).parent().hide()
    }
    else if($(this).text().charAt(0)=="#"){
      $(this).text($(this).text().substring(1)) 
    }
 });

}
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
  else if (e.value == "#pridjev") { $(".select-pridjev").show() }
  else if (e.value == "#brojevi") { $(".select-brojevi").show() }
  else if (e.value == "#glagol") { $(".select-glagol").show() }
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
    lista_svega = [obj.Orth, obj.Pos, obj.VerbType, obj.Participle, obj.Gender, obj.PronounType, obj.Number, obj.Case, obj.inflectionType, obj.animacy, obj.tense,obj.person, obj.adjectiveType, obj.numeralType, obj.tenseType, obj.voice, obj.nounType, obj.mood, obj.infinitive, obj.verbialAdverb, obj.Fajl]
    lista_svega = lista_svega.filter(function (e) { return e === 0 || e });
   
    if (checker(lista_svega, atributi)) {
      resultList.innerHTML += "<li data-Orth='"+obj.Orth+"' data-Pos='"+obj.Pos+"' data-VerbType='"+obj.VerbType+"' data-Participle='"+obj.Participle+"' data-Gender='"+obj.Gender+"' data-PronounType='"+obj.PronounType+"' data-Number='"+obj.Number+"' data-Case='"+obj.Case+"' data-tense='"+obj.tense+"' data-inflectionType='"+obj.inflectionType+"' data-animacy='"+obj.animacy+"' data-tense='"+obj.tense+"' data-person='"+obj.person+"' data-adjectiveType='"+obj.adjectiveType+"' data-numeralType='"+obj.numeralType+"' data-tenseType='"+obj.tenseType+"' data-voice='"+obj.voice+"' data-nounType='"+obj.nounType+"' data-mood='"+obj.mood+"' data-infinitive='"+obj.infinitive+"' data-verbialAdverb='"+obj.verbialAdverb+"' data-Fajl='"+obj.Fajl+"'>" + obj.Orth + "<button class='button is-link has-tooltip-multiline' data-tooltip='"+obj.Fajl.replace(/<em>/g, "").replace(/<\/em>/g, "")+"' onclick='pop_up(this)'><i class='fa fa-info'></i></button></li>"
    }
   
  }
  if(resultList.innerHTML==""){resultList.innerHTML="Nema rezultata za zadanja polja pretraživanja."}
}

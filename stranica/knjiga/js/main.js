let vol1;
adresa=window.location.href;
adresa=adresa.split("/")
function myFunction(e){
  //let ind = podatci.map(item => item.Stranica).indexOf(e.value);
  $("#sadrzaj").html(podatci[parseInt(e.value)-1].Tekst)
  broj=parseInt(e.value)
  document.getElementById('pdf').src = "viewer.html?file=stranice/"+adresa.at(-1).replace(".html","")+"/"+broj+".pdf";
}

function promijeni(e){
  //let ind = podatci.map(item => item.Stranica).indexOf(e.value);
  window.open(e.value+".html");
}

if(adresa.at(-1)=="gram1.html"){
  vol1 = "podatci.csv";
}
else if(adresa.at(-1)=="gram2.html"){
  vol1 = "podatci2.csv";
}



let results;
let filesData = []
var podatci;
const csvData = Papa.parse(vol1, {
  dynamicTyping: true,
  download: true,
  header: true,
  comments: "*=",
  complete: addPoints,
});



function addPoints(data) {
  podatci = data.data;
  for (var i = 0; i < podatci.length; i++) {
    //alert(podatci[i].Stranica)
    broj=parseInt(i)+1
   $("#stranice").append(" <option value='"+broj+"' data-name='"+podatci[i].Tekst.toLowerCase()+"' style='width:250px!important;'>"+podatci[i].Stranica+"</option>")
  }
  document.getElementById("loader").style.display = "none";
  document.getElementById("myDiv").style.display = "block";
  $("#sadrzaj").html(podatci[0].Tekst)
}


function format(item, state) {
  if (!item.id) {
    return item.text;
  }
  var countryUrl = "stranice/"+adresa.at(-1).replace(".html","")+"/";
  var url = state ? stateUrl : countryUrl;
  var img = $("<img>", {
    class: "img-flag",
    width: 26,
    src: url + item.element.value.toLowerCase() + ".jpg"
  });
  var span = $("<span>", {
    text: " " + item.text
  });
  span.prepend(img);
  return span;
}



function format2(item, state) {
  if (!item.id) {
    return item.text;
  }
  var countryUrl = "stranice/gramatike/";
  var url = state ? stateUrl : countryUrl;
  var img = $("<img>", {
    class: "img-flag",
    width: 26,
    src: url + item.element.value.toLowerCase() + ".jpg"
  });
  var span = $("<span>", {
    text: " " + item.text
  });
  span.prepend(img);
  return span;
}

function customMatcher(params, data) {
  // Always return the object if there is nothing to compare
  if ($.trim(params.term) === '') {
      return data;
  }
  
  // Check if the data occurs
  if ($(data.element).data('name').toString().toLowerCase().indexOf(params.term) > -1) {
      return data;
  }
  // If it doesn't contain the term, don't return anything
  return null;
}
$(document).ready(function() {
  $("#stranice").select2({
    templateResult: function(item) {
      return format(item, false);
    },matcher: customMatcher,
    language: {
      "noResults": function(){
          return "Nema rezultata za pretraživanje.";
      }
  },
   escapeMarkup: function (markup) {
       return markup;
   }
  });
  $("#gramatika").select2({
    templateResult: function(item) {
      return format2(item, false);
    }
  })



  $(document).on('keyup', '.select2-search__field', function(e){
    e.target.value = e.target.value.toLowerCase()
});

});

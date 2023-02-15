function myFunction(e){
  //let ind = podatci.map(item => item.Stranica).indexOf(e.value);
  $("#sadrzaj").html(podatci[parseInt(e.value)-1].Tekst)
  broj=parseInt(e.value)
  document.getElementById('pdf').src = "viewer.html?file=stranice/"+broj+".pdf";
}
let vol1 = "podatci.csv";

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
  var countryUrl = "stranice/";
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
      return format(item, false);
    }
  })

});

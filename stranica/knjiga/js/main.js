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
   $("#countries").append(" <option value='"+broj+"' data-name='"+podatci[i].Stranica+"' style='width:250px!important;'>"+podatci[i].Stranica+"</option>")
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
function matchCustom(params, data) {
  // If there are no search terms, return all of the data
  if ($.trim(params.term) === '') {
    return data;
  }

  // Do not display the item if there is no 'text' property
  if (typeof data.text === 'undefined') {
    return null;
  }

  // `params.term` should be the term that is used for searching
  // `data.text` is the text that is displayed for the data object
  if (data.text.indexOf(params.term) > -1) {
    var modifiedData = $.extend({}, data, true);
    modifiedData.text += ' (matched)';

    // You can return modified objects from here
    // This includes matching the `children` how you want in nested data sets
    return modifiedData;
  }

  // Return `null` if the term should not be displayed
  return null;
}
$(document).ready(function() {
  $("#countries").select2({
    templateResult: function(item) {
      return format(item, false);
    }
  });
});

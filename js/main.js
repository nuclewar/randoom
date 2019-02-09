/*
git add -A // To track all files

git commit -am "message" // To commit changes

git push origin master // Push your local changes to github
*/

var randomMission = ["Intercept", "Escort", "Fighter Sweep", "Recon", "Ground Attack", "A2_AD", "CAP", "CAS", "Civilian", "CSAR", "SEAD", "ESCAPE"];
var rmLen = randomMission.length;
rmLen = rmLen - 1;

//get json data
function getJsondata() {


  $.getJSON("js/test.js", function(data) {

    setSelect(data);
    selectChanged(data);

  });
}


// set select content
function setSelect(k) {
  $.each(k.days, function(key, val) {

    var x = val.Date.split('.')[0];
    var y = val.Date.split('.')[1];
    var z = x + "." + y;

    $('#formYear').append($('<option>', {
      id: key,
      value: z,
      text: val.Date
    }));

  });

  getThisDay(k);

}


//on select change
function selectChanged(xx) {


  $("#formYear").change(function() {

    var ixx = $(this).find("option:selected").attr("id");

    $('#sunrise').html(xx.days[ixx].Sunrise);
    $('#sunset').html(xx.days[ixx].Sunset);

  });
}


function getThisDay(xx) {

  var monthNames = ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sept", "oct", "nov", "dec"];

  var d = new Date();
  var mmonth = monthNames[d.getMonth()];
  var dday = d.getDate();


  var formattedDay = ("0" + dday).slice(-2);


  $("#formYear").val(formattedDay + "." + mmonth);

  var ixx = $('#formYear').find(":selected").attr('id');


  $('#sunrise').html(xx.days[ixx].Sunrise);
  $('#sunset').html(xx.days[ixx].Sunset);

}


function randomNumberFromRange(min, max) {
  return min + Math.floor(Math.random() * max);
}


function randomWheater() {
  $("#generate").click(function() {

    //missionHour
    var randomHour = randomNumberFromRange(0, 24);
    $('#missionHour').html(randomHour);


    //mission type
    var randomType = randomNumberFromRange(0, rmLen);
    $('#missionType').html(randomMission[randomType]);

    //cloudBase
    var randomCloudBase = randomNumberFromRange(15, 30);
    var rcb = randomCloudBase * 100;
    $('#cloudBase').html(rcb);


    //thickness
    var thickness = randomNumberFromRange(5, 16);
    //        $('#thickness').html(thickness * 100);

    //density
    var density = randomNumberFromRange(0, 11);
    $('#density').html(density);


    if (density > 8) {
      $('#thickness').html(thickness * 100);
    } else if (density < 9) {
      $('#thickness').html(0);
    }


    //fog_visibility 0-6000
    var fog_visibility = randomNumberFromRange(0, 6000);

    //fog_thickness 0 - 1000 limitele de altitudine (0 e la nivelul marii)
    var fog_thickness = randomNumberFromRange(0, 1000);


    if (density == 0 || density == 8) {
      $('#fog_visibility').html(fog_visibility);
      $('#fog_thickness').html(fog_thickness);
    } else {
      $('#fog_visibility').html(0);
      $('#fog_thickness').html(0);
    }


    //precipitations None, Rain, Thunderstorm, Snow, and Snowstorm.
    var precipitations = randomNumberFromRange(0, 2);

    if (density == 10 && precipitations == 0) {
      $('#precipitations').html('none');
    } else if (density == 10 && precipitations == 1) {
      $('#precipitations').html('Rain/Snow');
    } else if (density == 10 && precipitations == 2) {
      $('#precipitations').html('Thunderstorm/Snowstorm');
    } else {
      $('#precipitations').html('none');
    }
    
    
   
    
    var turbulence = randomNumberFromRange(0, 20);
    $('#turbulence').html(turbulence);
    
    var wind;
    
    if(turbulence < 5){
      $('#wind').html(0);
    }else if(turbulence >= 5 && turbulence < 10){
      wind = randomNumberFromRange(1, 3);
      $('#wind').html(wind);
    }else if(turbulence >= 10 && turbulence < 15){
      wind = randomNumberFromRange(3, 6);
      $('#wind').html(wind);
    }else if(turbulence >= 15 && turbulence < 20){
      wind = randomNumberFromRange(6, 8);
      $('#wind').html(wind);
    }else if(turbulence >= 20){
      wind = randomNumberFromRange(8, 12);
      $('#wind').html(wind);
    }
    

  });
}


function setSelected() {

  var url = window.location.href;
  var filename = url.split('/').pop().split('#')[0].split('?')[0];

  var links = $('.headerBlock .mainMenu ul li  a');

  $.each(links, function(key, val) {

    var fnm = $(val).attr('href');

    if (fnm == filename) {
      $(val).addClass('selectedItem');
    }
  });

}

// google map api key AIzaSyBSLqEqieVlbqi5zhsJkJbLn_U7ekSC7r8


function fromMap() {
  url = window.location.href;
  newurl = url.split("?")[1];

  if (newurl != "undefined" && newurl != null) {
    paramvalue = newurl.split("=")[1];



    getdata = $('.charts .collapsed');

    $.each(getdata, function(ix, el) {
      aa = $(el).attr('href');



      xx = aa.slice(-2);

      if (xx == paramvalue) {

        $('html, body').animate({
          scrollTop: $(el).offset().top
        }, 1000);


        $(el).click();
      }


    });

  }



}


function zoom() {
  wheelzoom(document.querySelector('img.zoom'));
}





//on load functions
$(document).ready(function() {
  setSelected();
  if ($("#randoom").length) {
    getJsondata();
    randomWheater();
  }

  if ($("#charts").length) {
    fromMap();
  }

  if ($("#mapp").length) {
    zoom();
  }



});
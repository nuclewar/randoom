/*
git add -A // To track all files

git commit -am "message" // To commit changes

git push origin master // Push your local changes to github
*/

var randomMission = ["Intercept", "Escort", "Fighter Sweep", "Recon", "Ground Attack", "Pinpoint Strike", "CAP", "CAS", "Air Policing", "CSAR", "SEAD", "Transport", "Anti-Ship"];
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

    if (turbulence < 5) {
      $('#wind').html(0);
    } else if (turbulence >= 5 && turbulence < 10) {
      wind = randomNumberFromRange(1, 3);
      $('#wind').html(wind);
    } else if (turbulence >= 10 && turbulence < 15) {
      wind = randomNumberFromRange(3, 6);
      $('#wind').html(wind);
    } else if (turbulence >= 15 && turbulence < 20) {
      wind = randomNumberFromRange(6, 8);
      $('#wind').html(wind);
    } else if (turbulence >= 20) {
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



function zoom() {
  wheelzoom(document.querySelector('img.zoom'));
}


var obj = {
  coallitions: [{
      fighters: ["Su-27", "Su-33", "Su-30", "Mig-29"],
      attackFighters: ["Su25-T", "Su-17M", "Su-34", "Su-24"],
      bombers: ["Tu-160", "Tu-95"],
      heli: ["Hind Mi24V", "KA-50", "Mi-26", "Mi-8"],
      sam: ["SA-2", "SA-3", "KUB", "BUK", "S-300"],
      aaa: ["Tor", "Osa", "Tunguska", "Manpad", "Shilka", "Strela", "Zu-23"],
      tanks: [
        "T-90",
        "T-80",
        "T-72",
        "T-55",
        "BTR-80",
        "BMP-3",
        "BRDM-2",
        "Truck",
        "Mortar",
        "SAU-Msta",
        "SAU-Akatsia",
        "Grad",
        "Smerch",
        "Uragan",
        "SCUD",
        "SSN-2"
      ],
      navy: [
        "destroyer",
        "cruiser",
        "frigate",
        "corvette",
        "speedboat",
        "cargo",
        "carrier"
      ]
    },
    {
      fighters: ["F-4", "F-5", "M-2000", "Mirage", "F-86", "F16-Bl.52"],
      attackFighters: ["A10-C", "Tornado", "Harrier", "Viggen"],
      bombers: ["B-52", "B-1B"],
      heli: ["AH-64D", "UH-1H", "Gazelle", "Chinook"],
      sam: ["Rapier", "Hawk", "Patriot"],
      aaa: ["Gepard", "Roland", "Avenger", "Vulcan", "Manpad"],
      tanks: [
        "M1",
        "Merkava",
        "Patton",
        "Challenger",
        "Leclerc",
        "TPZ",
        "Leopard-2",
        "Cobra",
        "M1134 Stryker",
        "MLRS",
        "Dana",
        "M-109",
        "Mortar"
      ],
      navy: ["cruiser", "frigate", "speedboat", "cargo", "carrier"]
    }
  ]
};

//randomize
function randomNumberFromRange(min, max) {
  return min + Math.floor(Math.random() * max);
}

//add click
var firstclick = 0;

function clickToGenerateTroops() {
  $(".generator").click(function() {
    var idd = $(this).attr("id");
    var idx = idd.split("_")[1];
    dynamicGenerator(idx);
    awacsEwr(idx);
    firstclick += 1;
  });
}

//generate troops
function dynamicGenerator(idk) {
  let idkk = idk - 1;

  var colors = ["RED", "BLUE"];
  $("#generate_" + idk + "").html("Add " + colors[idkk] + " reinforcements");

  var items = obj.coallitions[idkk];
  $("#troops_" + idk + "").html("");

  Object.entries(items).forEach(entry => {
    let key = entry[0];
    let value = entry[1];

    let unit = value[randomNumberFromRange(0, value.length)];
    let quant;

    if (firstclick < 2) {
      quant = randomNumberFromRange(0, 10);
    } else {
      quant = randomNumberFromRange(0, 5);
    }

    if (key === "tanks") {
      $("#troops_" + idk + "").append(
        "<p>" + unit + " x " + quant + " regiments</p>"
      );
    } else if (key === "navy") {
      $("#troops_" + idk + "").append(
        "<p>" + unit + " x " + quant + " ships</p>"
      );
    } else {
      $("#troops_" + idk + "").append(
        "<p>" + unit + " x " + quant + " units</p>"
      );
    }
  });
}

//awacs, ewr and farp
function awacsEwr(k) {
  let quant = randomNumberFromRange(0, 5);

  if (quant == 0) {
    $("#awacs_" + k + " span").html("yes");
    $("#attck_1 span").html("attacking");
    $("#attck_2 span").html("deffending");
  } else if (quant == 1) {
    $("#awacs_" + k + " span").html("no");
    $("#attck_1 span").html("deffending");
    $("#attck_2 span").html("attacking");
  } else if (quant == 2) {
    $("#ewr_" + k + " span").html("yes");
    $("#attck_1 span").html("attacking");
    $("#attck_2 span").html("deffending");
  } else if (quant == 3) {
    $("#ewr_" + k + " span").html("no");
    $("#attck_1 span").html("deffending");
    $("#attck_2 span").html("attacking");
  } else if (quant == 4) {
    $("#farp_" + k + " span").html("yes");
    $("#attck_1 span").html("attacking");
    $("#attck_2 span").html("deffending");
  } else if (quant == 5) {
    $("#farp_" + k + " span").html("no");
    $("#attck_1 span").html("deffending");
    $("#attck_2 span").html("attacking");
  }
}

//zone of conflict
function randZone() {
  //TO DO - drop down select map - zones for each (from object)
  var zones = ["West Zone", "East Zone", "South Zone", "Center Zone"];
  var zone = zones[randomNumberFromRange(0, 3)];
  $("#zone").html(zone);
}


function setVersion() {
  $('#version').html('v1.4.6');
}

//on load functions
$(document).ready(function() {
  setSelected();
  setVersion();
  if ($("#randoom").length) {
    getJsondata();
    randomWheater();
    randZone();
    clickToGenerateTroops();
  }

  /*  if ($("#charts").length) {
     fromMap();
   } */

  if ($("#mapp").length) {
    zoom();
  }



});
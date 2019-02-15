
var obj = {
  coallitions: [
    {
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

//on load
$(document).ready(function() {
  randZone();
  clickToGenerateTroops();
});

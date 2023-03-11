var cloudsPreset = ["Light-Scatered-1", "Light-Scatered-2", "High-Scatered-1", "High-Scatered-2", "High-Scatered-3", "Scatered-1", "Scatered-2", "Scatered-3", "Scatered-4", "Scatered-5", "Scatered-6", "Scatered-7", "Broken-1", "Broken-2", "Broken-3", "Broken-4", "Broken-5", "Broken-6", "Broken-7", "Broken-8", "Overcast-1", "Overcast-2", "Overcast-3", "Overcast-4", "Overcast-5", "Overcast-6", "Overcast-7", "Overcast-Rain-1", "Overcast-Rain-2", "Overcast-Rain-3"];

//funtions

function randomNumberFromRange(min, max) {
  return min + Math.floor(Math.random() * max);
}

function getRandomArbitrary(min, max) {
  return Math.floor(Math.random() * (max - min) + min);
}


function setVersion() {
  $('#version').html('v0.1.6');
}

function loadCommons() {
  var includes = $('[data-include]')
  $.each(includes, function () {
    var file = 'common/' + $(this).data('include') + '.html'
    $(this).load(file)
  })
}


//get json data
function getJsondata() {
  $.getJSON("js/test.js", function(data) {
    setSelect(data);
    selectChanged(data);
  });
}

//get current day
function getThisDay(xx) {
  var monthNames = ["ian", "feb", "mar", "apr", "mai", "iun", "iul", "aug", "sept", "oct", "nov", "dec"];
  var d = new Date();
  var mmonth = monthNames[d.getMonth()];
  var dday = d.getDate();
  var formattedDay = ("0" + dday).slice(-2);
  $("#formYear").val(formattedDay + "." + mmonth);
  var ixx = $('#formYear').find(":selected").attr('id');

  var snr = xx.days[ixx].Sunrise.split(':');
  var snrx = snr.slice(0, snr.length - 1).join(":");

  var sns = xx.days[ixx].Sunset.split(':');
  var snsx = sns.slice(0, sns.length - 1).join(":");

  $('#sunrise').html(snrx);
  $('#sunset').html(snsx);
}


//on select change
function selectChanged(xx) {
  $("#formYear").change(function() {
    var ixx = $(this).find("option:selected").attr("id");
    $('#sunrise').html(xx.days[ixx].Sunrise);
    $('#sunset').html(xx.days[ixx].Sunset);
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

//generate random stuff
function randomStuff() {
  randoomTriggered();
  $("#generate").click(function() {
    randoomTriggered()
  });
}


function randoomTriggered(){
  //missionHour
  var randomHour = getRandomArbitrary(3, 22);
  $('#missionHour').html(randomHour);
    //cloud preset cloudsPreset cloudType
    var randomCloudPreset = getRandomArbitrary(1, 30);
    $(cloudType).html(cloudsPreset[randomCloudPreset]);
  }



//-------------------------------on load functions---------------------------------------------
$(document).ready(function() {
  loadCommons();

  setTimeout(function(){
    setVersion();
    getJsondata();
    randomStuff();
  },300);

  
});
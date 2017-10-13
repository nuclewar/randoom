//get json data
function getJsondata() {


    $.getJSON("../js/test.js", function (data) {

        setSelect(data);
        selectChanged(data);

    });
}


//set select content
function setSelect(k) {
    $.each(k.days, function (key, val) {

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


    $("#formYear").change(function () {

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
    $("#generate").click(function () {

        //missionHour
        var randomHour = randomNumberFromRange(0, 24);
        $('#missionHour').html(randomHour);

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


        if (density == 0) {
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


    });
}


function setSelected() {

    var url = window.location.href;
    var filename = url.split('/').pop().split('#')[0].split('?')[0];

    var links = $('.headerBlock .mainMenu ul li  a');

    $.each(links, function (key, val) {

        var fnm = $(val).attr('href');

        if (fnm == filename) {
            $(val).addClass('selectedItem');
        }
    });

}


//on load functions
$(document).ready(function () {
    setSelected();
    if ($("#randoom").length) {
        getJsondata();
        randomWheater();
    }


});
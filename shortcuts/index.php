<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Map | DCS RanDoom</title>

    <?php include '../includes/libraries.php'; ?>

</head>

<body>


<div class="container-fluid">
    <?php include '../includes/header.php'; ?>
    <!--CONTENT-->
    <div class="row mainContent">
        <div class="clearfix mb-4">
            <h2 class="f24 boldFont"><i class="fa fa-share textLightBlue f22 pr-2" aria-hidden="true"></i> Most used shortcuts</h2>
        </div>
        <div class="panel-group" id="accordion">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse1" class="collapsed">Su-27</a>
                    </h4>
                </div>
                <div id="collapse1" class="panel-collapse collapse">

                    <div class="shtPanel">
                        <h3 class="f20 mb-3 boldFont"><i class="fa fa-fighter-jet pr-2" aria-hidden="true"></i> START UP, TAXI and TAKEOFF</h3>
                        <ol>
                            <li>Electric system on</li>
                            <li>[request ground crew - power unit on]</li>
                            <li>[request ground crew - refuel]</li>
                            <li>[request ground crew - rearm]</li>
                            <li>ATC request start-up</li>
                            <li>Start left engine</li>
                            <li>Start right engine</li>
                            <li>[request ground crew - power unit off]</li>
                            <li>Unlock front wheel - <span class="shortkut">[LAlt+Q]</span></li>
                            <li>Cockpit lights - <span class="shortkut">[L]</span></li>
                            <li>Navigation lights - <span class="shortkut">[RCtrl+L]</span></li>
                            <li>Taxi lights - <span class="shortkut">[RAlt+L]</span></li>
                            <li>Set kneeboard</li>
                            <li>Flaps down</li>
                            <li>Close canopy</li>
                            <li>ATC request taxi</li>
                            <li>Taxi to runway</li>
                            <li>Flaps down for takeoff</li>
                            <li>ATC request take-off</li>
                            <li>Lock front-wheel - <span class="shortkut">[LAlt+Q]</span></li>
                            <li>Full afterburner - take off</li>
                            <li>Gear up</li>
                            <li>Stop navigation lights</li>
                            <li>Stop afterburners</li>
                            <li>Engage autopilot</li>
                        </ol>
                    </div>

                    <div class="shtPanel">
                        <h3 class="f20 mb-3 boldFont"><i class="fa fa-fighter-jet pr-2" aria-hidden="true"></i> LANDING, TAXI and SHUT DOWN</h3>
                        <ol>
                            <li>Engage autopilot</li>
                            <li>Cycle autopilot modes until RTB</li>
                            <li>ATC request inbound</li>
                            <li># autopilot autoselect LNDG</li>
                            <li>Navigation lights - <span class="shortkut">[RCtrl+L]</span></li>
                            <li># ATC pass to tower</li>
                            <li>ATC request landing to tower</li>
                            <li>Flaps down</li>
                            <li>Gear down</li>
                            <li>Uunlock front wheel - <span class="shortkut">[LAlt+Q]</span></li>
                            <li># landing</li>
                            <li>Airbrakes up</li>
                            <li>Drop chute</li>
                            <li>Airbrakes down</li>
                            <li>Flaps up</li>
                            <li>Release chute</li>
                            <li>Engage wheel brakes</li>
                            <li># ATC tower ask you to taxi to parking area</li>
                            <li># taxi</li>
                            <li>Shut-down left engine</li>
                            <li>Shut-down right engine</li>
                            <li>RCtrl+L - navigation lights off</li>
                            <li>RAlt+L - taxi lights off</li>
                            <li>L - cockpit lights off</li>
                            <li>Canopy open</li>
                            <li>Electrical system off</li>
                        </ol>
                    </div>


                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse2" class="collapsed">Mig-21</a>
                    </h4>
                </div>
                <div id="collapse2" class="panel-collapse collapse">
                    <div class="panel-body">
                        <div class="shtPanel">
                            <h3 class="f20 mb-3 boldFont"><i class="fa fa-fighter-jet pr-2" aria-hidden="true"></i> Mig-21 shortcuts</h3>
                            <ol>
                                <li>Flaps down: <span class="shortkut">[F]</span></li>
                                <li>Gears Handle Lock released: <span class="shortkut">[RShift+G]</span></li>
                                <li>Gears Handle Lock engaged: <span class="shortkut">[RCtrl+G]</span></li>
                                <li>Flaps up: <span class="shortkut">[LShift+F]</span></li>
                                <li>Gear up: <span class="shortkut">[G]</span></li>
                                <li>Gear Neutral: <span class="shortkut">[LCtrl+G]</span></li>
                                <li>Gear down: <span class="shortkut">[LShift+G]</span></li>
                                <li>Airbrakes ON: <span class="shortkut">[C]</span></li>
                                <li>Chute: <span class="shortkut">[P]</span></li>
                                <li>Release chute: <span class="shortkut">[RCtrl+RShift+D]</span></li>
                                <li>Rearming and Refueling <span class="shortkut">[Win + .]</span></li>
                                <li>Autopilot: <span class="shortkut">[A]</span></li>
                                <li>Disengage autopilot: <span class="shortkut">[LCtrl+LAlt+A]</span></li>
                                <li>Kneeboard: <span class="shortkut">[RCtrl+Up]</span> and <span class="shortkut">[RCtrl+Right]</span></li>
                                <li>Kneeboard marker: <span class="shortkut">[RCtrl+Down]</span></li>
                                <li>ASO Chaffs - <span class="shortkut">[LCtrl+Space]</span></li>
                                <li>ASO/SPRD Chafs flares - <span class="shortkut">[LShift+Space]</span></li>
                                <li>Cover me - <span class="shortkut">[LWin+X]</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>


            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse3" class="collapsed">Su-33</a>
                    </h4>
                </div>
                <div id="collapse3" class="panel-collapse collapse">
                    <div class="panel-body">
                        <div class="shtPanel">
                            <h3 class="f20 mb-3 boldFont"><i class="fa fa-fighter-jet pr-2" aria-hidden="true"></i> Take-off from carrier</h3>
                            <ol>
                                <li>Carrier should be at maximum speed (50-59 km/h), heading into wind.</li>
                                <li>Wind speed should be higher than 5m/s, (10m/s or higher is ideal).</li>
                                <li>Maximum take-off weight should be under 30,000kg, you can go heavier if head wind is higher than 10 m/s.</li>
                                <li>Start engines</li>
                                <li>Fold wings up - <span class="shortkut">[RCtrl + P]</span></li>
                                <li>Go to position 3 on the Kuznetsov</li>
                                <li>Fold wings down - <span class="shortkut">[RCtrl+P]</span></li>
                                <li>Flaps down - <span class="shortkut">[F]</span></li>
                                <li>Air intake anti-FOD shields OFF - <span class="shortkut">[LAlt+I]</span></li>
                                <li>Press wheel brakes - <span class="shortkut">[LShift+W]</span></li>
                                <li>Full afterburner</li>
                                <li>When green lights up activate Special engine thrust mode - <span class="shortkut">[LShift-E]</span></li>
                                <li>Release wheel brakes -<span class="shortkut">[LShift+W]</span></li>
                                <li>Pull stick full back</li>
                                <li>Gear up - <span class="shortkut">[G]</span></li>
                                <li>Gain speed, over 300km/h</li>
                                <li>Flaps up - <span class="shortkut">[F]</span></li>
                                <li>Hook - <span class="shortkut">[LAlt+G]</span></li>
                            </ol>
                        </div>
                        <div class="shtPanel">
                            <h3 class="f20 mb-3 boldFont"><i class="fa fa-fighter-jet pr-2" aria-hidden="true"></i> Air Refuel</h3>
                            <ol>
                                <li>Barometric hold - <span class="shortkut">[H]</span></li>
                                <li>Autothrust - <span class="shortkut">[J]</span></li>
                                <li>Extend probe - <span class="shortkut">[Ctrl+R]</span></li>
                                <li>Autothrust increase - <span class="shortkut">[LShift+J]</span></li>
                                <li>Autothrust decrease - <span class="shortkut">[LAlt+J]</span></li>
                                <li>Override the refuel autopilot - <span class="shortkut">[LShift+A]</span></li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapse4" class="collapsed">Su-25T</a>
                    </h4>
                </div>
                <div id="collapse4" class="panel-collapse collapse">
                    <div class="panel-body">
                        <div class="shtPanel">
                            <h3 class="f20 mb-3 boldFont"><i class="fa fa-fighter-jet pr-2" aria-hidden="true"></i> SEAD</h3>
                            <ol>
                                <li>Select the air to ground attack mode by pressing the <span class="shortkut">[7]</span></li>
                                <li>Cycle through available weapons using the <span class="shortkut">[D]</span></li>
                                <li>Activate the L-081 "Fantasmagoria" Emitter pod by pressing the <span class="shortkut">[I]</span></li>
                                <li>Slew the target gate over the desired target and lock the target using the <span class="shortkut">[ENTER]</span>" key</li>
                                <li>L-081 - pylon 6</li>
                                <li>Kh-25MPU - pylons 3,4 / 8,9 -- 25km</li>
                                <li>Kh-58U - pylons 5 / 7 -- 70 km</li>
                            </ol>
                        </div>
                        <div class="shtPanel">
                            <h3 class="f20 mb-3 boldFont"><i class="fa fa-fighter-jet pr-2" aria-hidden="true"></i> CAS with 9A4172 Vikhr</h3>
                            <ol>
                                <li>Select the air to ground attack mode by pressing the <span class="shortkut">[7]</span></li>
                                <li>Activate Shkval optical unit - <span class="shortkut">[O]</span></li>
                                <li>Stabilize the Shkval camera by pressing <span class="shortkut">[ENTER]</span> and slew the seeker around using <span class="shortkut">[,]</span>, <span class="shortkut">[.]</span>, <span class="shortkut">[/]</span>, <span class="shortkut">[;]</span></li>
                                <li>Engage the laser - <span class="shortkut">[RShift+O]</span></li>
                                <li>Remember to TURN off the laser after using it!</li>
                                <li>Fire</li>
                            </ol>
                        </div>
                    </div>
                </div>
            </div>


        </div>


    </div>
    <?php
    include '../includes/footer.php';
    ?>
</div>


</body>

</html>
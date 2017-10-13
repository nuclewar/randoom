<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="utf-8"/>
    <meta http-equiv="X-UA-Compatible" content="IE=Edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Randoom | DCS RanDoom</title>

    <?php include '../includes/libraries.php'; ?>

</head>

<body>


<div class="container-fluid" id="randoom">
    <?php include '../includes/header.php'; ?>
    <!--CONTENT-->
    <div class="row mainContent">
        <div class="clearfix mb-4">
            <h2 class="f24 boldFont"><i class="fa fa-cogs textLightBlue f22 pr-2" aria-hidden="true"></i> Tools</h2>
        </div>
        <div class="panel-group" id="accordion">

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseTwo" class="collapsed">Random data generator</a>
                    </h4>
                </div>
                <div id="collapseTwo" class="panel-collapse collapse">
                    <div class="panel-body">
                        <div class="infoBlock">
                            <div>
                                <div class="randomBlock">

                                    <div class="clearfix">
                                        <div class="float-left">
                                            <span class="fontBold textBlue">Mission Hour:</span>
                                        </div>
                                        <div class="float-right text-right">
                                            <span id="missionHour">00</span>.00
                                        </div>
                                    </div>

                                    <div class="clearfix">
                                        <div class="float-left">
                                            <span class="fontBold textBlue">Cloud base:</span>
                                        </div>
                                        <div class="float-right text-right">
                                            <span id="cloudBase">5000</span> meters
                                        </div>
                                    </div>


                                    <div class="clearfix">
                                        <div class="float-left">
                                            <span class="fontBold textBlue">Cloud thickness:</span>
                                        </div>
                                        <div class="float-right text-right">
                                            <span id="thickness">0</span> meters
                                        </div>
                                    </div>


                                    <div class="clearfix">
                                        <div class="float-left">
                                            <span class="fontBold textBlue">Cloud density:</span>
                                        </div>
                                        <div class="float-right text-right">
                                            <span id="density">0</span>
                                        </div>
                                    </div>

                                    <div class="clearfix">
                                        <div class="float-left">
                                            <span class="fontBold textBlue">Precipitations:</span>
                                        </div>
                                        <div class="float-right text-right">
                                            <span id="precipitations">none</span>
                                        </div>
                                    </div>

                                    <div class="clearfix">
                                        <div class="float-left">
                                            <span class="fontBold textBlue">Fog visibility:</span>
                                        </div>
                                        <div class="float-right text-right">
                                            <span id="fog_visibility">0</span>
                                        </div>

                                    </div>

                                    <div class="clearfix mb-5">
                                        <div class="float-left">
                                            <span class="fontBold textBlue">Fog thickness:</span>
                                        </div>
                                        <div class="float-right text-right">
                                            <span id="fog_thickness">0</span>
                                        </div>
                                    </div>

                                    <div>

                                        <button id="generate" class="btn btn-primary">Generate wheater</button>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="panel panel-default">
                <div class="panel-heading">
                    <h4 class="panel-title">
                        <a data-toggle="collapse" data-parent="#accordion" href="#collapseOne">Sunrise/sunset</a>
                    </h4>
                </div>
                <div id="collapseOne" class="panel-collapse collapse in">
                    <div class="panel-body">
                        <div class="infoBlock">
                            <div class="dropRow">
                                <label class="textBlueDark">Choose date</label>
                                <select id="formYear">
                                    <option value="--">please select</option>
                                </select>
                            </div>
                            <div class="dropRow">
                                <span class="fontBold textBlue">Sunrise:</span> <span id="sunrise"></span>
                            </div>
                            <div class="dropRow">
                                <span class="fontBold textBlue">Sunset:</span>
                                <span id="sunset"></span></div>
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

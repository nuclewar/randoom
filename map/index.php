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
            <h2 class="f24 boldFont"><i class="fa fa-map textLightBlue f22 pr-2" aria-hidden="true"></i> Map</h2>
        </div>
        <div class="mapMask">
            <div class="mapHolder" draggable="true">&nbsp;</div>
        </div>
    </div>
    <?php
    include '../includes/footer.php';
    ?>
</div>









</body>

</html>

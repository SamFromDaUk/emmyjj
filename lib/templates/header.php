<?php
    $tree = \EmmyJJ::getTree();
?>

<!doctype html>
    <head>
        <title>Emmy JJ</title>
        <link rel="stylesheet" type="text/css" href="public/lib/bootstrap-3.2.0/css/bootstrap.css" />
        <link rel="stylesheet" type="text/css" href="public/css/core.css" />
        <link href='http://fonts.googleapis.com/css?family=Anton' rel='stylesheet' type='text/css'>

        <script src="https://code.jquery.com/jquery-1.11.1.min.js" ></script>
        <script src="public/script/init.js" ></script>
        <script src="public/lib/jssor-slider/js/jssor.js" ></script>
        <script src="public/lib/jssor-slider/js/jssor.slider.js" ></script>
    </head>
    <body class="<?php echo $tree[0] ?>">
        <div class="container">
            <div class="row header">
                <div class="col-sm-10 col-sm-offset-2">
                    <div class="col-sm-2"><a href="../">Home/</a></div>
                    <div class="col-sm-2"><a href="about">About/</a></div>
                    <div class="col-sm-2"><a href="recordings">Recordings/</a></div>
                    <div class="col-sm-2"><a href="gallery">Gallery/</a></div>
                    <div class="col-sm-2"><a href="contact">Contact/</a></div>
                </div>
            </div>
        </div>

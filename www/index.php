<?php
    require '../lib/bootstrap.php';

    if (isset($_POST['request-id'])) {
        $response = \EmmyJJ::handleContactRequest();

        header("HTTP/1.1 " . $response['status']);
        echo json_encode($response);
        die;
    }

    \EmmyJJ::getTemplate('header');

    $tree = \EmmyJJ::getTree();
    \EmmyJJ::getTemplate($tree[0]);

    \EmmyJJ::getTemplate('footer');

    \EmmyJJ::flush();
?>

<?php
$url = '';
if (isset($_POST['url'])) {
    $url = $_POST['url'];
}
if ($url) {
    echo file_get_contents($url);
} else {
    echo false;
}


?>

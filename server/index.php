<?php

$jsondata = file_get_contents("php://input");
$data = json_decode($jsondata);
$url = $data->url; 

if ($url) {
    echo file_get_contents($url);
} else {
    echo false;
}


/*
if (isset($_POST['url'])) {
    $url = $_POST['url'];
}
echo 'url: '.$url;


*/
// echo file_get_contents('https://www.cigalsace.org/geonetwork/srv/fre/csw-geocatalogue?request=GetRecordById&service=CSW&version=2.0.2&elementsetname=full&postencoding=XML&resulttype=results&outputschema=http://www.isotc211.org/2005/gmd&typenames=gmd:MD_Metadata&id=FR-236700019-BdOCS20112012-CIGAL-V2&xml_dir=undefined&');
?>

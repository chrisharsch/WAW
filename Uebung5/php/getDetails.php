<?php
header("Content-Type : application/json");
$string = file_get_contents("../json/detail.json");
$json_a=json_decode($string,true);
$x=json_encode($json_a);
echo  $x;
?>

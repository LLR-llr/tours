<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/30
 * Time: 14:55
 */

require '../lib/db.php';
$id=$_GET['id'];
$sql="select * from nav where id=$id;";
$result=$mysql->query($sql)->fetch_assoc();
$tpl=$result['ntpl'];
$nname=$result['nname'];

$is=file_exists("../view/index/$tpl");
if($is){
    require 'header.php';
    require "../view/index/$tpl";
    require 'footer.php';
}else{
    require '../view/index/_404.html';
}
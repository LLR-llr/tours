<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/30
 * Time: 15:50
 */

require '../lib/db.php';

$sql="select * from nav order by nsort";
$rel=$mysql->query($sql)->fetch_all(MYSQLI_ASSOC);

require '../view/index/header.html';

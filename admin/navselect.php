<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/25
 * Time: 18:19
 */

require '../lib/db.php';

$sql='select * from nav order by nsort';
$result=$mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
//var_dump($result);
require '../view/admin/navselect.html';



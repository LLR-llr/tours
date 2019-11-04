<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/27
 * Time: 11:22
 */
//  展示商品添加页面  插入数据
require '../lib/db.php';
$sql='select * from news ';
$result=$mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
//var_dump($result);

require '../view/admin/newsselect.html';
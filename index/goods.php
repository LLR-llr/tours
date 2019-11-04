<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/10/8
 * Time: 19:20
 */

require '../lib/db.php';
$gid=$_GET['gid'];
$sql="select * from goods where gid=$gid";
$rel=$mysql->query($sql)->fetch_assoc();
$str=$rel['banner'];
$name=$rel['name'];
$mprice=$rel['mprice'];
$sale=$rel['sale'];
$stock=$rel['stock'];
$detail=$rel['detail'];

require "header.php";
require '../view/index/xiangqing.html';
require 'footer.php';
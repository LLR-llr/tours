<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/26
 * Time: 15:44
 */





$mysql=new mysqli('localhost','root','','tour','3306');
if($mysql->connect_errno){
    echo '连接失败'.$mysql->connect_error;
    exit();
}
$mysql->query('set names utf8');
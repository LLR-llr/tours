<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/25
 * Time: 18:19
 */
$method=$_SERVER['REQUEST_METHOD'];
if($method==='GET'){
    require '../view/admin/navinsert.html';
}else{
    $arr=$_POST;
    require '../lib/tostring.php';
    $mysql=new mysqli('localhost','root','','tour','3306');
    if($mysql->connect_errno){
        echo '连接失败'.$mysql->connect_error;
        exit();
    }
    $mysql->query('set names utf8');
    $keys=joinKeys($arr);
    $values=joinValues($arr);
    $sql="insert into nav ($keys) values ($values)";
    $mysql->query($sql);
    $num=$mysql->affected_rows;
    if($mysql->affected_rows>0){
        echo json_encode([
            'code'=>200,
            'msg'=>'插入成功'
        ]);
//        echo $num;
    }else{
        echo json_encode([
            'code'=>404,
            'msg'=>'插入失败'
        ]);
    }
}

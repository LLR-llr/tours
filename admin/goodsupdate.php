<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/29
 * Time: 17:56
 */
require '../lib/db.php';
require '../lib/tostring.php';
$method=$_SERVER['REQUEST_METHOD'];
if($method==='GET'){
    $gid=$_GET['gid'];
    $sql="select * from goods where gid='$gid'";
    $result=$mysql->query($sql)->fetch_assoc();
    $sql2="select * from category";
    $cate=$mysql->query($sql2)->fetch_all(MYSQLI_ASSOC);
    require '../view/admin/goodsupdate.html';
}else{
    $data=$_POST;
//    var_dump($data);
//    exit();
    $gid=$data['gid'];
    unset($data['gid']);
    $r=joinKeysValues($data);
    $sql="update goods set $r where gid=$gid";
    $mysql->query($sql);
    if($mysql->affected_rows>0){
        echo json_encode([
            'code'=>200,
            'msg'=>'修改成功'
        ]);
    }else{
        echo json_encode([
            'code'=>404,
            'msg'=>'修改失败'
        ]);
    }

}
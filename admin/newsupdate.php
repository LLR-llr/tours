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
    $id=$_GET['id'];
    $sql="select * from news where id='$id'";
    $result=$mysql->query($sql)->fetch_assoc();
    require '../view/admin/newsupdate.html';
}else{
    $data=$_POST;
//    var_dump($data);
//    exit();
    $id=$data['id'];
    unset($data['id']);
    $r=joinKeysValues($data);
    $sql="update news set $r where id=$gid";
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
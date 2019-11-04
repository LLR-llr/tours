<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/30
 * Time: 15:14
 */
require '../lib/db.php';
$method=$_SERVER['REQUEST_METHOD'];
if($method==='GET'){
    require '../view/admin/cateinsert.html';
}else{
    $data=$_POST['name'];
    $sql="insert into category (cname) values ('$data')";
    $mysql->query($sql);
    if($mysql->affected_rows>0){
        echo json_encode([
            'code'=>200,
            'msg'=>'插入成功'
        ]);

    }else{
        echo json_encode([
            'code'=>404,
            'msg'=>'插入失败'
        ]);
    }
}
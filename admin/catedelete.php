<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/29
 * Time: 17:16
 */
$id=$_POST['$id'];
require '../lib/db.php';
$sql="delete from category where cid='$id'";

$mysql->query($sql);
if($mysql->affected_rows>0){
    echo json_encode([
        'code'=>200,
        'msg'=>'删除成功'
    ]);
}else{
    echo json_encode([
        'code'=>404,
        'msg'=>'删除失败'
    ]);
}
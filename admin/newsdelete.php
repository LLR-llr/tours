<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/30
 * Time: 14:14
 */

require '../lib/db.php';
$id=$_POST['$id'];
$sql="delete from news where id='$id'";
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
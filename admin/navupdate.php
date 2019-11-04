<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/27
 * Time: 9:33
 */
$id=$_POST['id'];
$name=$_POST['name'];
$value=$_POST['value'];

require '../lib/db.php';
$sql="update nav set $name='$value' where id='$id'";

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
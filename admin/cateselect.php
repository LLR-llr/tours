<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/27
 * Time: 10:38
 */

require '../lib/db.php';

$sql="select * from category";
$result=$mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
require '../view/admin/cateselect.html';

//if($mysql->affected_rows>){
//    echo json_encode([
//        'code'=>200,
//        'data'=>$result
//    ]);
//}else{
//    echo json_encode([
//        'code'=>404,
//        'msg'=>'查询失败'
//    ]);
//}
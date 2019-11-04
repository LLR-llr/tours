<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/27
 * Time: 11:22
 */

    require '../lib/tostring.php';
    $data=$_POST;

    require '../lib/db.php';
    $keys=joinKeys($data);
    $values=joinValues($data);
    $sql="insert into online ($keys) values ($values)";

    $mysql->query($sql);
    if($mysql->affected_rows>0){
        echo json_encode([
            'code'=>200,
            'msg'=>'预约成功'
        ]);
    }else{
        echo json_encode([
            'code'=>404,
            'msg'=>'预约失败'
        ]);


}

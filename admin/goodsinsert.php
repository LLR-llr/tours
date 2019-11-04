<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/27
 * Time: 11:22
 */
$method=$_SERVER['REQUEST_METHOD'];
if($method==='GET'){
    require '../lib/db.php';
    $sql="select * from category";
    $result=$mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
    require '../view/admin/goodsinsert.html';
}else{
    require '../lib/tostring.php';
    $data=$_POST;
    date_default_timezone_set('PRC');
    $data['create_time']=date('Y-m-d H:i:s');

    require '../lib/db.php';
    $keys=joinKeys($data);
    $values=joinValues($data);
    $sql="insert into goods ($keys) values ($values)";
    $mysql->query($sql);
    if($mysql->affected_rows>0){
        echo json_encode([
            'code'=>200,
            'msg'=>'插入数据成功'
        ]);
    }else{
        echo json_encode([
            'code'=>404,
            'msg'=>'插入数据失败'
        ]);
    }

}

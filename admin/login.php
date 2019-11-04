<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/25
 * Time: 14:53
 */


//展示登录界面  验证
//请求方式   GET   POST

$req=$_SERVER['REQUEST_METHOD'];
if($req==='GET'){
    require '../view/admin/login.html';
}else{
    $arr=$_POST;
//    var_dump($arr);
    $username=$arr['username'];
    $password=$arr['password'];

 $pas=crypt($password,md5('123'));
// var_dump($pas);

 $mysql=new mysqli('localhost','root','','tour','3306');
 if($mysql->connect_errno){
     echo '连接失败'.$mysql->connect_error;
     exit();
 }
$mysql->query('set names utf8');
 $sql="select * from manager where username='$username'";
 $result=$mysql->query($sql)->fetch_all(MYSQLI_ASSOC);
 $count=count($result);
 if($count>0){
     for($i=0;$i<$count;$i++){
         if($result[$i]['password']==$pas){
             echo json_encode([
                 'code'=>200,
                 'msg'=>'登录成功'
             ]);
         }else{
             echo json_encode([
                 'code'=>404,
                 'msg'=>'用户名和密码不匹配'
             ]);
         }
     }
 }else{
     echo json_encode([
         'code'=>404,
         'msg'=>'用户不存在'
     ]);
 }




}

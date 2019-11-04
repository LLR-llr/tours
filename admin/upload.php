<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/27
 * Time: 17:56
 */

$file=$_FILES['file'];

//name=>'logo.png' 上传文件名字
//error=>0  状态码
//tmp_name=>''临时路径
//
//tmp_name->

if(!is_dir('../uploads')){
    mkdir('../uploads');
}
$date=date('Ymd');
if(!is_dir("../uploads/$date")){
    mkdir("../uploads/$date");
};
$imgname=time().mt_rand(0,10000);
$ext=substr($file['type'],6);
//$ex=explode('/',$file['type']);
//$ext=array_pop($ex);
//var_dump($file['type'],$ex);
//$str="hello/nihao/wo/men/shi/hao";
//var_dump(explode('/',$str));
//exit();
$imgnames="../uploads/$date/$imgname.$ext";
$webrote="/tours/uploads/$date/$imgname.$ext";
//var_dump($date,$imgnames,$webrote);

$result=move_uploaded_file($file['tmp_name'],$imgnames);
if($result){
    echo json_encode([
        'code'=>200,
        'msg'=>'图片插入成功',
        'src'=>$webrote
    ]);
}else{
    echo json_encode([
        'code'=>404,
        'msg'=>'图片插入失败'
    ]);
}


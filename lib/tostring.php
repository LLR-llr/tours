<?php
/**
 * Created by PhpStorm.
 * User: asus
 * Date: 2019/9/26
 * Time: 13:54
 */
function  joinKeys($arr){
    $str='';
    foreach ($arr as $key => $value){
        $str .=$key.',';
    }
    $str=substr($str,0,-1);
    return $str;

}
function  joinValues($arr){
    $str='';
    foreach ($arr as $key => $value){
        $str .="'$value',";
    }
    $str=substr($str,0,-1);
    return $str;

}

function joinKeysValues($arr){
    $str='';
    foreach($arr as $key=>$value){
        $str .="$key='$value',";
    }
    $str=substr($str,0,-1);
    return $str;
}
## 项目背景
tour旅游企业站   目的...功能：关于我们，景点分类，景点，新闻资讯，预约，服务

## 关于我们
功能：介绍企业，包含企业名称，企业图片，文化、理念、愿景、介绍。



## 开发环境
### 环境
* apache >2.4
* mysql  5.7
* php  7.2

## 技术
基于B/S架构实现的旅游类的企业站，基于过程化的开发模式实现

## 项目目录结构

---- admin  处理关于后台业务逻辑相关文件
---- index  处理关于前台业务逻辑相关文件
---- static 静态资源
|--------  img
|--------  css
|--------  js
---- view   静态页面
|--------  admin  后台相关的模板
|--------  index  前台相关的模板
---- index.php  前台入口文件
---- admin.php  后台入口文件

## 后台整体框架
1.布局：flex、定位
2.iframe
3.a标签的属性（targrt）

## 管理员登录
功能：登录后台，管理企业站数据
流程：前台手机数据（用户名、密码）-》提示信息
1.展示登录页面
2.验证登录
> 利用请求方式实现一个login.php处理两个功能
> $_SERVER['REQUEST_METHOD']:
> GET(1)  POST(2)
> 

### 注意
1.HTML、PHP混排注意PHP边界符
2.包含文件：require  include
3.静态文件的路径：基于PHP
4.

### 导航管理----添加 navinsert
1.收集导航信息form->表单控件(input,select,option,textarea,button)
2.提交插入

### 导航管理----查看 navselect
1.查看页面
2.查询数据->返回
3.渲染

### ajax实现
1.先展示页面
2.前台发送请求
3.后台接收请求，返回数据
4.前台渲染页面

### HTML、PHP混排
1.展示页面
2.获取数据
3.渲染页面

### 导航管理----删除
ajax实现：事件委派
HTML、PHP混排：事件委派、按钮点击

### 图片上传
1.前台选择图片
2.后台将上传的文件移动到指定的位置
3.将路径返回
4.伴随表单提交插入到数据库

| 上传文件必须是POST方式提交
|  contentType:multipart/form-data

## 前台
首页导航->展示不同页面，处理不同数据

    1.分散
      php导航：一对一
    2.集中
      php导航：一对多
      明确哪个导航
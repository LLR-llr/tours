let year = document.querySelector(".dat-year");
let mouth = document.querySelector(".dat-mouth");
let data = document.querySelector(".dat-data");

//输入为空提示
let formname = document.querySelector('.uese-name1');
let formsex1 = document.querySelector('#sex-nan');
let formsex2 = document.querySelector('#sex-nv');
let formtishi = document.querySelector('.font-buchong');
let formyanzhen = document.querySelector('.yanzhen-font');
let formphone = document.querySelector('.uese-phone');
let tishiDate = document.querySelector('.data-font-tishi');
let tishiName = document.querySelector('.name-font-tishi');
let tishiSex = document.querySelector('.sex-font-tishi');
let tishiBuchong = document.querySelector('.buchong-font-tishi');
let tishiYanzhen = document.querySelector('.yanzhen-font-tishi');
let tishiPhone = document.querySelector('.name-font-phone')
let tishi = document.querySelector('.tishi');
let sexnull = 0;
//获取提交按钮
let btn = document.querySelector('.user-submit');

formsex1.onclick = function() {

    sexnull = 1;
}
formsex2.onclick = function() {
    sexnull = 1;
}
btn.onclick = function() {
    //判断日期是否为空
    if (year.value == "" || mouth.value == "" || data.value == "") {
        tishiDate.style.display = "inline-block";
        tishi.style.display = "block";
    }
    //判断姓名是否为空
    if (formname.value == "") {
        tishiName.style.display = "inline-block";
        tishi.style.display = "block";
    }
    //判断性别是否为空
    if (sexnull == 0) {
        tishiSex.style.display = "inline-block";
        tishi.style.display = "block";
    }
    //判断补充是否为空
    if (String(formtishi.value.length) == 37) {
        tishiBuchong.style.display = "inline-block";
        tishi.style.display = "block";
    }
    //判断电话是否为空
    if (formphone.value == "") {
        tishiPhone.style.display = "inline-block";
        tishi.style.display = "block";
    }
    //判断验证码是否为空
    if (formyanzhen.value == "") {
        tishiYanzhen.style.display = "inline-block";
        tishi.style.display = "block";
    }
}


//生成日期
for (let i = 2030; i >= 1900; i--) {
    let option = document.createElement("option");
    year.appendChild(option);
    option.innerHTML = i;
}
for (let i = 1; i <= 12; i++) {
    let option = document.createElement("option");
    mouth.appendChild(option);
    option.innerHTML = i;
}
for (let i = 1; i <= 31; i++) {
    let option = document.createElement("option");
    data.appendChild(option);
    option.innerHTML = i;
}
let dateImg = document.querySelector('#data-img')
dateImg.onblur = function() {
        year.value = dateImg.value.substr(0, 4);
        // mouth.value = dateImg.value.substr(5, 2);
        mouth.value = 9;
        data.value = dateImg.value.substr(8, 2);
    }
    //验证码刷新开始

let show_num = [];
draw(show_num);

function dj() {
    draw(show_num);
}

function draw(show_num) {
    var canvas_width = document.querySelector(".form-user-code").clientWidth;
    var canvas_height = document.querySelector(".form-user-code").clientHeight;
    var canvas = document.querySelector(".form-user-code"); //获取到canvas的对象，演员
    var context = canvas.getContext("2d"); //获取到canvas画图的环境，演员表演的舞台
    canvas.width = canvas_width;
    canvas.height = canvas_height;
    var sCode = "A,B,C,E,F,G,H,J,K,L,M,N,P,Q,R,S,T,W,X,Y,Z,1,2,3,4,5,6,7,8,9,0,q,w,e,r,t,y,u,i,o,p,a,s,d,f,g,h,j,k,l,z,x,c,v,b,n,m";
    var aCode = sCode.split(",");
    var aLength = aCode.length; //获取到数组的长度

    for (var i = 0; i <= 3; i++) {
        var j = Math.floor(Math.random() * aLength); //获取到随机的索引值
        var deg = Math.random() * 30 * Math.PI / 180; //产生0~30之间的随机弧度
        var txt = aCode[j]; //得到随机的一个内容
        show_num[i] = txt;
        var x = 10 + i * 20; //文字在canvas上的x坐标
        var y = 20 + Math.random() * 8; //文字在canvas上的y坐标
        context.font = "bold 23px 微软雅黑";

        context.translate(x, y);
        context.rotate(deg);

        context.fillStyle = randomColor();
        context.fillText(txt, 0, 0);

        context.rotate(-deg);
        context.translate(-x, -y);
    }
}

function randomColor() { //得到随机的颜色值
    var r = Math.floor(Math.random() * 256);
    var g = Math.floor(Math.random() * 256);
    var b = Math.floor(Math.random() * 256);
    return "rgb(" + r + "," + g + "," + b + ")";
}
//验证码刷新结束
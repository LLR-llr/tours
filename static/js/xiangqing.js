var box = document.querySelector('.img-box');
var imgUl = box.children[0];
var imgLi = imgUl.children;
var dots = document.querySelectorAll('.diandian');
imgUl.appendChild(imgLi[0].cloneNode(true));
var btnLeft = document.querySelector('.btn-left');
var btnRight = document.querySelector('.btn-right');
var index = 0;
var timer = null;
var anmitionTimer = null;
var width = imgLi[0].offsetWidth;
//自动轮播
timer = setInterval(move, 2000);
dots[0].classList.add("select");

for (let i = 0; i < dots.length; i++) {
    dots[i].onclick = () => {
        console.log(i);
        if (i > index) {
            index = i - 1;
            move();
        } else {
            clearInterval(timer);
            index = i + 1;
            moveLeft();
        }
    }
}

box.onmouseover = () => {
    clearInterval(timer);
}
box.onmouseout = () => {
    timer = setInterval(move, 2000);
}
btnRight.onclick = () => {
    clearInterval(timer);
    move();
}
btnLeft.onclick = () => {
    // console.log(imgUl.offsetLeft);
    moveLeft();

}

function moveLeft() {
    clearInterval(timer);
    if (index == 0) {
        index = imgLi.length - 1;
        imgUl.style.left = -index * width + "px";
    }
    index--;
    animate(imgUl, -index * width);
    for (let i = 0; i < imgLi.length - 1; i++) {
        dots[i].classList.remove('select');
    }
    if (index == 0 || index == imgLi.length - 1) {
        dots[0].classList.add("select");
    } else {
        dots[index].classList.add("select");
    }
}

function move() {
    if (index == imgLi.length - 1) {
        index = 0;
        imgUl.style.left = 0;
    }
    index++;
    animate(imgUl, -index * width);
    for (let i = 0; i < imgLi.length - 1; i++) {
        dots[i].classList.remove('select');
    }
    if (index == 0 || index == imgLi.length - 1) {
        dots[0].classList.add("select");
    } else {
        dots[index].classList.add("select");
    }
}

function animate(ul, distance) {
    clearInterval(anmitionTimer);
    anmitionTimer = setInterval(() => {
        var lef = ul.offsetLeft;
        var wid = ul.offsetWidth;
        let speed = 10;
        speed = lef > distance ? -10 : 10;
        if (Math.abs(lef - distance) > 5) {
            ul.style.left = lef + speed + "px";
        } else {
            clearInterval(anmitionTimer);
            ul.style.left = distance + "px";
        }
    }, 10)
}
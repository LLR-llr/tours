window.onload = function() {
    let nav = document.querySelector(".xiala-nav");
    let navList = document.querySelector(".nav-list");
    let xialak = document.querySelector(".xialakuang");
    let shouy = document.querySelector(".shouy");
    let zdJiantou = document.querySelector(".zhiding");
    var imgBigBox = document.querySelector(".banner");
    var imgBox = document.querySelector(".banner_img_list");
    var imgList = imgBox.children;
    var dotBox = document.querySelector(".banner_dot_box");
    var dotList = dotBox.children;
    var btnLeft = document.querySelector(".button_left");
    var btnRight = document.querySelector(".button_right");
    var leftTop = document.querySelector(".left_top");
    var leftBottom = document.querySelector(".left_bottom");
    var rightTop = document.querySelector(".right_top");
    var rightBottom = document.querySelector(".right_bottom");
    var box = document.querySelector('.content_middle_title_box');
    var img_2 = document.querySelector(".cosmetology_right");
    var img_1 = document.querySelector(".companyprofile_left");
    var content = document.querySelectorAll(".content_main");
    var row = document.querySelectorAll(".cosmetology_row");
    var col1 = document.querySelectorAll(".cosmetology_row_span1");
    var col2 = document.querySelectorAll(".cosmetology_row_span2");
    var lis = document.querySelectorAll(".navr>li");
    var timer = null;
    var index = 0;
    var imgWidth = 1536;
    //页面跳转
    for (let i = 0; i < row.length; i++) {
        row[i].onmousemove = function() {
            col1[i].style.color = "red";
            col2[i].style.color = "red";
        }
        row[i].onmouseout = function() {
            col1[i].style.color = "#808080";
            col2[i].style.color = "#c9c9c9";
        }
    }

    for (let i = 0; i < content.length; i++) {
        content[i].addEventListener("mouseover", function() {
            content[i].classList.add("pulse");
            content[i].style.boxShadow = "0px 0px 12px 0.5px rgba(0,0,0,0.2)";
        }, false)
        content[i].addEventListener("mouseout", function() {
            content[i].classList.remove("pulse");
            content[i].style.boxShadow = "none";
        }, false)
    }
    window.onscroll = function() {
        var scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop >= 100) {
            nav.style.top = 0;
        } else {
            nav.style.top = -58 + "px";
        }
        if (scrollTop >= 600) {
            zdJiantou.style.display = "block"
        } else {
            zdJiantou.style.display = "none"
        }
        for (let i = 0; i < content.length; i++) {
            content[i].style.animationDelay = i / 10 + "s";
            if (scrollTop > imgBox.offsetHeight / 2) {
                content[i].classList.add("fadeInUp");
            }
        }
        if (scrollTop > box.offsetTop - 200) {
            img_1.style.animation = "bounceIn 2s"
            img_1.classList.add("bounceIn");
        }
        if (scrollTop > box.offsetTop) {
            img_2.style.animation = "bounceIn 2s"
            img_2.classList.add("bounceIn");
        }
    }


    navList.onclick = function() {
        xialak.style.display = xialak.style.display == "none" ? "block" : "none";
        shouy.innerHTML = xialak.style.display == "none" ? "首页" : "关闭";
    }



    // zdJiantou.onclick = function() {
    //         let jttop = document.documentElement || document.body;
    //         jttop.scrollTop = 0;
    //     }


    /*轮播图制作开始*/
    /*轮播图的制作       获取元素*/
    //    获取所需的元素

    /*轮播图的制作         轮播点的制作*/
    //实现动态的轮播点增加与删除    轮播点切图
    for (let i = 0; i < imgList.length; i++) {
        var dotLt = document.createElement("li");
        dotLt.className = "banner_dot"
        dotLt.setAttribute("index", i);
        dotBox.appendChild(dotLt);
        dotLt.addEventListener("mousemove", function() {
            clear();
        });
        dotLt.addEventListener("click", function() {
            for (let j = 0; j < dotBox.children.length; j++) {
                dotBox.children[j].classList.remove("active");
            }
            index = this.getAttribute("index");
            this.classList.add("active");
            animate(imgBox, -index * imgWidth);
        }, false);
        dotLt.addEventListener("mouseout", function() {
            startAuto();
        });
    }
    var dotBoxLeft = (window.innerWidth - dotBox.offsetWidth) / 2;
    dotBox.style.left = dotBoxLeft + "px";
    window.onresize = function(ev) {
        var dotBoxLeft = (window.innerWidth - dotBox.offsetWidth) / 2;
        dotBox.style.left = dotBoxLeft + "px";
        imgWidth = window.innerWidth;
        for (let i = 0; i < imgList.length; i++) {
            imgList[i].style.width = imgWidth + "px";
        }
    }

    /*轮播图的制作         初始化状态*/
    //初始状态
    dotList[0].classList.add("active");
    var imgListKelong = imgList[0].cloneNode(true);
    imgBox.appendChild(imgListKelong);
    /*轮播图的制作          实现自动轮播*/

    //实现图片的自动轮播
    function clear() {
        clearInterval(timer);
    }

    function startAuto() {
        timer = setInterval(move, 3000);
    }

    startAuto();

    function move() {
        if (index == imgList.length - 1) {
            index = 0;
            imgBox.style.left = 0 + "px";
        }
        index++;
        animate(imgBox, -index * imgWidth);
        if (index == imgList.length - 1) {
            dotList[0].classList.add("active");
            dotList[dotList.length - 1].classList.remove("active");
        } else {
            for (let i = 0; i < dotList.length; i++) {
                dotList[i].classList.remove("active");
            }
            dotList[index].classList.add("active");
        }
    }

    function animate(element, target) {
        clearInterval(element.timer);
        element.timer = setInterval(function() {
            var current = element.offsetLeft;
            var speed = 20;
            speed = current > target ? -speed : speed;
            current += speed;
            if (Math.abs(current - target) > Math.abs(speed)) {
                element.style.left = current + "px";
            } else {
                clearInterval(element.timer);
                element.style.left = target + "px";
            }
        }, 5);
    }

    /*轮播图的制作                   左右按钮的制作*/
    imgBox.onmousemove = function() {}
    imgBox.onmouseout = function() {}
    btnLeft.onmouseover = function() {
        leftTop.style.top = "-40px";
        leftBottom.style.top = "0";
        clear();
    }
    btnLeft.addEventListener("click", function(evt) {
        if (index == 0) {
            index = imgList.length - 1;
            imgBox.style.left = -index * imgWidth + "px";
        }
        index--;
        animate(imgBox, -index * imgWidth);
        for (let i = 0; i < dotBox.children.length; i++) {
            dotBox.children[i].classList.remove("active");
        }
        dotBox.children[index].classList.add("active");
    }, false);
    btnLeft.onmouseout = function() {
        leftTop.style.top = "0";
        leftBottom.style.top = "40px";
        startAuto();
    }
    btnRight.onmouseover = function() {
        clear();
        rightTop.style.top = "-40px";
        rightBottom.style.top = "0";
    }
    btnRight.addEventListener("click", function() {
        if (index == imgBox.children.length - 1) {
            imgBox.style.left = 0 + "px";
            index = 0;
        }
        index++;
        animate(imgBox, -index * imgWidth);
        if (index == imgList.length - 1) {
            dotBox.children[0].classList.add("active");
            dotBox.children[dotBox.children.length - 1].classList.remove("active");
        } else {
            for (var i = 0; i < dotBox.children.length; i++) {
                dotBox.children[i].classList.remove("active");
            }
            dotBox.children[index].classList.add("active");
        }
    }, false);
    btnRight.onmouseout = function() {
        rightTop.style.top = "0";
        rightBottom.style.top = "40px";
        startAuto();
    }
}


/*轮播图效果制作结束*/
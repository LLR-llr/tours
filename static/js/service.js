var listBox = document.querySelectorAll(".list-box");
var bannerBox = document.querySelector(".banner-box");
window.onscroll = function() {

    var scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
    for (let i = 0; i < listBox.length; i++) {
        listBox[i].style.animationDelay = i / 10 + "s";
        // if(scrollTop>bannerBox.offsetHeight/2){
        listBox[i].classList.add("fadeInUp");
        // }
    }


    let nav = document.querySelector(".xiala-nav");
    let navList = document.querySelector(".nav-list")
    let xialak = document.querySelector(".xialakuang")
    let shouy = document.querySelector(".shouy")
    let zdJiantou = document.querySelector(".zhiding")

    window.onscroll = function() {
        let scrollTop = document.documentElement.scrollTop || document.body.scrollTop
        if (scrollTop >= 100) {
            nav.style.top = 0;
        } else {
            nav.style.top = -58 + "px";
        }
        if (scrollTop >= 200) {
            zdJiantou.style.display = "block"
        } else {
            zdJiantou.style.display = "none"
        }
    }


    navList.onclick = function() {
        xialak.style.display = xialak.style.display == "none" ? "block" : "none";
        shouy.innerHTML = xialak.style.display == "none" ? "首页" : "关闭";
    }


}
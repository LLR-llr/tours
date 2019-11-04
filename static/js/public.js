    let nav = document.querySelector(".xiala-nav");
    let navList = document.querySelector(".nav-list")
    let xialak = document.querySelector(".xialakuang")
    let shouy = document.querySelector(".shouy")
    let zdJiantou = document.querySelector(".zhiding")
    let navr = document.querySelector('.navr1')
    let navr1 = document.querySelector('.navr2')


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


    zdJiantou.onclick = function() {
        GoTop()
    }

    var currentPosition, timer;

    function GoTop() {
        timer = setInterval(() => { runToTop() }, 1);
    }

    function runToTop() {
        currentPosition = document.documentElement.scrollTop || document.body.scrollTop;
        currentPosition -= 10;
        if (currentPosition > 0) {
            window.scrollTo(0, currentPosition);
        } else {
            window.scrollTo(0, 0);
            clearInterval(timer);
        }
    }
    // window.scrollTo(0, document.body.scrollHeight);



    window.addEventListener("resize", () => {
        var ww = window.innerWidth
        if (ww > 992) {
            xialak.style.display = "none";
            navList.style.display = "none";
        }
    })


    navList.onclick = function() {
        xialak.style.display = xialak.style.display == "none" ? "block" : "none";
        shouy.innerHTML = xialak.style.display == "none" ? "首页" : "关闭";

    }

    // zdJiantou.onclick = function() {
    //     let jttop = document.documentElement || document.body;
    //     jttop.scrollTop = 0;
    // }
    xialak.addEventListener('click', dianji0, false);
    navr.addEventListener('click', dianji, false);
    navr1.addEventListener('click', dianji1, false);

    function dianji1(e) {
        let ev = e || event;

        if (ev.target.id == 'index1') {
            location.href = 'index.html';
        }
        if (ev.target.id == 'aboutus1') {
            location.href = 'aboutsus.html';
        }
        if (ev.target.id == 'center1') {
            location.href = 'list.html';
        }
        if (ev.target.id == 'news1') {
            location.href = 'news.html';
        }
        if (ev.target.id == 'service1') {
            location.href = 'service.html';
        }
        if (ev.target.id == 'online1') {
            location.href = 'onlinePppointment.html'
        }
    }

    function dianji0(e) {
        let ev = e || event;


        if (ev.target.id == 'index0') {
            location.href = 'index.html';
        }
        if (ev.target.id == 'aboutus0') {
            location.href = 'aboutsus.html';
        }
        if (ev.target.id == 'center0') {
            location.href = 'list.html';
        }
        if (ev.target.id == 'news0') {
            location.href = 'news.html';
        }
        if (ev.target.id == 'service0') {
            location.href = 'service.html';
        }
        if (ev.target.id == 'online0') {
            location.href = 'onlinePppointment.html'
        }
    }

    function dianji(e) {
        let ev = e || event;


        if (ev.target.id == 'index') {
            location.href = 'index.html';
        }
        if (ev.target.id == 'aboutus') {
            location.href = 'aboutsus.html';
        }
        if (ev.target.id == 'center') {
            location.href = 'list.html';
        }
        if (ev.target.id == 'news') {
            location.href = 'news.html';
        }
        if (ev.target.id == 'service') {
            location.href = 'service.html';
        }
        if (ev.target.id == 'online') {
            location.href = 'onlinePppointment.html'
        }
    }
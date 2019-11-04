window.addEventListener('load',function () {
    var smbox = document.querySelectorAll(".guide-smbox");

    var contant = document.querySelectorAll(".contant");

    for (let i = 0; i < smbox.length; i++) {
        smbox[i].onmouseover = function() {
            for (j = 0; j < smbox.length; j++) {
                contant[j].style.display = "none";
            }
            contant[i].style.display = "block";

        }
    }
});

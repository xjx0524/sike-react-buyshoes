window.onload = function () {
    console.log("page loaded");
    makeCartScrollNicely();

    var $toggle = document.querySelector(".site__right-sidebar-toggle");
    $toggle.addEventListener("click", function () {
        document.body.classList.toggle("js-show-right-sidebar");
        document.querySelector(".site__right-sidebar").classList.toggle("max-width-600-hide");
    });
};

function makeCartScrollNicely() {
    var cart = document.querySelector(".cart");
    var main = document.querySelector(".site__main");
    Ps.initialize(cart);
    Ps.initialize(main);
}

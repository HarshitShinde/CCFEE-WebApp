{
    $('#collapseBtn').click(function () {
        // $('#sidebarContainer').animate({width: ["toggle", "linear"]});
        $('#collapseBtn').toggleClass('fa-angle-double-left fa-angle-double-right');
        $('#sidebarContainer').toggleClass('d-none');
    });
    var toggler = document.getElementsByClassName("fa-plus-square");
    var i;

    for (i = 0; i < toggler.length; i++) {
        toggler[i].addEventListener("click", function () {
            this.parentElement.querySelector(".nested").classList.toggle("active");
            this.classList.toggle("fa-plus-square");
            this.classList.toggle("fa-minus-square");
        });
    }
}
// Smooth Scrolling
$("#navbar a, .btn").on("click", function (event) {
    if (this.hash !== "") {
        event.preventDefault();

        const hash = this.hash;

        $("html, body").animate(
            {
                scrollTop: $(hash).offset().top - 100
            },
            800
        );
    }
});

// Sticky menu background
window.addEventListener("scroll", function () {
    if (window.scrollY > 150) {
        document.querySelector("#navbar").style.opacity = 0.9;
    } else {
        document.querySelector("#navbar").style.opacity = 1;
    }
});

//navbar
function openNav(){
    document.getElementById("myNav").style.width = '50%';
    document.getElementById("F-nav").style.display = 'none';
    document.getElementById("F-h2").style.display = 'none';
}

function closeNav(){
    document.getElementById("myNav").style.width = '0%';
    document.getElementById("F-nav").style.display = 'block';
    document.getElementById("F-h2").style.display = 'block';
}


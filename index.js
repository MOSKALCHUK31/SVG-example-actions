let bg = document.querySelector("#wheelOne");
let bg2 = document.querySelector("#wheelTwo");

function chengeWH1() {
  bg.style.fill = "#4848d0";
}

function chengeWH2() {
  bg2.style.fill = "#4848d0";
}

var goHome = false;

$(".picture").on("click", function() {
  if(goHome) return;
   goHome = true;

    $(".img").animate({
        "left": "+=500"
    }, 2000);
});


$(".picture").on("dblclick", function() {
  if(!goHome) return;
   goHome = false;

    $(".img").animate({
        "left": "-=500"
    }, 2000);
});

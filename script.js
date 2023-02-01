let cupcake = document.querySelector('#cupcake-img');
let DrinkMe_btn = document.querySelector('#btn-drinkMe');
let Rainbow_btn = document.querySelector('#btn-rainbowCake');
let Ninja_btn = document.querySelector('#btn-ninjaCake');
let Surprise_btn = document.querySelector('#btn-surpriseCake');
let Reset_btn = document.querySelector('#btn-resetCake');
let btn_left = document.querySelector('#btn-goToleft');
let btn_right = document.querySelector('#btn-goToright');

cupcake.style.left = '0px';

DrinkMe_btn.addEventListener("click", DrinkMe);

function DrinkMe () {
cupcake.style.height = '500px';
cupcake.style.width = 'auto';
}

Rainbow_btn.addEventListener("click", RainbowCake);

function RainbowCake () {
    cupcake.src = "/cupcake_pink.png"
    }

Ninja_btn.addEventListener("click", NinjaCake);

function NinjaCake () {
    cupcake.style.display = 'none';
    }

    Surprise_btn.addEventListener("click", SurpriseCake);

function SurpriseCake () {
    cupcake.style.display = 'flex';
    }

    Reset_btn.addEventListener("click", ResetCake);

    function ResetCake () {
        cupcake.style.width = '25%';
        cupcake.style.height = 'auto';
        cupcake.src = "/cupcake.png";
        cupcake.style.display = 'flex';
        cupcake.style.left = '0px';
        }


window.addEventListener('keydown', (e) => {
    if (e.code === "ArrowLeft") {
        btn_left.style.opacity = "1";
        btn_left.style.transform = "scale(0.9)";
    }
    console.log(e);
});

window.addEventListener('keyup', (e) => {
    if (e.code === "ArrowLeft") {
        btn_left.style.opacity = "0.5";
        btn_left.style.transform = "scale(1)";
    }
});

window.addEventListener('keydown', (e) => {
    if (e.code === "ArrowRight") {
        btn_right.style.opacity = "1";
        btn_right.style.transform = "scale(0.9)";
    }
    console.log(e);
});

window.addEventListener('keyup', (e) => {
    if (e.code === "ArrowRight") {
        btn_right.style.opacity = "0.5";
        btn_right.style.transform = "scale(1)";
    }
});
    
    
    function move(e) {
        translate_img = parseInt(cupcake.style.left);
        if (e.keyCode == 37) {
        newLeft = translate_img - 20;
        cupcake.style.left = newLeft + "px";
        console.log(translate_img);
        console.log(cupcake.style.left);
  

        }
        if (e.keyCode == 39) {
        newRight = translate_img + 20;
        cupcake.style.left = newRight + "px";
           
    }

    if (translate_img == 540) {
        if (e.keyCode == 39) {
            cupcake.style.left = "540px"; 
    } else {
        newLeft = translate_img - 20;
        cupcake.style.left = newLeft + "px";
    }
}

    if (translate_img == -560) {
        if (e.keyCode == 37) {
            cupcake.style.left = "-560px"; 
    } else {
        newRight = translate_img + 20;
        cupcake.style.left = newRight + "px";
    }
    
    console.log(translate_img);
}

}


document.onkeydown = move;









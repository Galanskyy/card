const content = document.querySelector(".content");
const desc = document.querySelector(".description");

content.addEventListener('mouseenter', function(){
    desc.style.display = "block";
    desc.style.animation = "scale-up-bottom 0.4s cubic-bezier(0.390, 0.575, 0.565, 1.000) both";
} );
content.addEventListener('mouseleave', function(){
    desc.style.display = "none";
} );


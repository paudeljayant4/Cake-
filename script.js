const scene = document.getElementById("cakeScene");
const flame = document.getElementById("flame");
const btn = document.getElementById("startBtn");
const letter = document.getElementById("letter");
const typed = document.getElementById("typed");
const music = document.getElementById("music");

const message = `I couldn't bake you a red velvet cake today...

But if I ever do,
it would be layered with the softness of your heart,
frosted with your kindness,
and glowing like the way you light up my world.

You are sweeter than any dessert.
And I am the luckiest person alive because of you. ❤️`;

let i = 0;
let typingStarted = false;

/* 3D Tilt Effect */
scene.addEventListener("mousemove", e => {
const rect = scene.getBoundingClientRect();
const x = e.clientX - rect.left;
const y = e.clientY - rect.top;
const rotateY = ((x / rect.width) - 0.5) * 20;
const rotateX = ((y / rect.height) - 0.5) * -20;
scene.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
});

scene.addEventListener("mouseleave", () => {
scene.style.transform = "rotateX(0deg) rotateY(0deg)";
});

/* Typewriter */
function typeWriter(){
if(i < message.length){
typed.innerHTML += message.charAt(i);
i++;
setTimeout(typeWriter, 35);
}
}

/* Start Surprise */
btn.addEventListener("click", () => {

if(typingStarted) return;
typingStarted = true;

flame.style.opacity = "0";
letter.classList.add("show");
music.play().catch(()=>{});
typeWriter();

});

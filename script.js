const nope = document.getElementById("nope");
const zone = document.getElementById("runZone");
const tease = document.getElementById("tease");
const forgive = document.getElementById("forgive");
const success = document.getElementById("success");
const again = document.getElementById("again");

let escapes = 0;

function escapeButton() {
  const zoneRect = zone.getBoundingClientRect();
  const btnRect = nope.getBoundingClientRect();
  const padding = 4;

  const maxX = Math.max(padding, zoneRect.width - btnRect.width - padding);
  const maxY = Math.max(padding, zoneRect.height - btnRect.height - padding);

  const x = padding + Math.random() * maxX;
  const y = padding + Math.random() * maxY;

  nope.style.left = `${x}px`;
  nope.style.top = `${y}px`;
  nope.style.transform = "none";

  escapes++;
  const messages = [
    "Hehe... nice try 😭",
    "Nope nope nope 😂",
    "You can't reject me that easily 👉👈",
    "Button bhi tumse naraz hai 😭",
    "Please yaar, ek chance 🥺❤️",
    "Bas kar do ab... maan jao na 😭"
  ];
  tease.textContent = messages[Math.min(escapes - 1, messages.length - 1)];
}

["pointerenter","pointerdown","touchstart"].forEach(evt => {
  nope.addEventListener(evt, (e) => {
    e.preventDefault();
    escapeButton();
  }, {passive:false});
});

forgive.addEventListener("click", () => {
  success.classList.remove("hidden");
});

again.addEventListener("click", () => {
  success.classList.add("hidden");
  tease.textContent = "Okay... ab sach mein smile kar do 🥹❤️";
});

function makeHeart(){
  const h = document.createElement("div");
  h.className = "heart";
  h.textContent = Math.random() > .25 ? "❤️" : "♡";
  h.style.left = `${Math.random()*100}vw`;
  h.style.fontSize = `${12 + Math.random()*20}px`;
  h.style.animationDuration = `${6 + Math.random()*7}s`;
  document.querySelector(".hearts").appendChild(h);
  setTimeout(()=>h.remove(),14000);
}
setInterval(makeHeart,650);

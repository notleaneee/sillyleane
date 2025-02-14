let state = false;
let btn = document.querySelector(".btn");
let record = document.querySelector(".record");
let toneArm = document.querySelector(".tone-arm");
let song = document.querySelector(".my-song");
let slider = document.querySelector(".slider");


let letter = document.createElement("div");
letter.classList.add("hidden-letter");
document.body.appendChild(letter);


let letterText = `
Baby ko, you bewitched me from the moment I knew you were the one. 
Ever since then, I’ve felt that a universe without you would be completely dull. 
I’m so blessed to have you, 
and I still find myself wondering what did I even do to deserve someone like you 
Even now, talking to you feels just like day one. 
No matter where you are, 
I’d give anything just to see you.
Happy Valentines my pretty baby!
`;

btn.addEventListener("click", () => {
    if (!state) {
        record.classList.add("on");
        toneArm.classList.add("play");
        setTimeout(() => {
            song.play();
            showTypingEffect();
        }, 1000);
    } else {
        record.classList.remove("on");
        toneArm.classList.remove("play");
        song.pause();
        hideLetter(); 
    }
    state = !state;
});

slider.addEventListener("input", (e) => {
    song.volume = Number(e.target.value);
});


function showTypingEffect() {
    letter.innerHTML = ""; 
    letter.classList.add("show-letter");
    let textIndex = 0;

    let typingInterval = setInterval(() => {
        if (textIndex < letterText.length) {
            letter.innerHTML += letterText.charAt(textIndex);
            textIndex++;
        } else {
            clearInterval(typingInterval);
        }
    }, 80);
}

function hideLetter() {
    letter.classList.remove("show-letter");
    letter.innerHTML = "";
}

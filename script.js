function playSound(soundId) {
    let snd = document.getElementById(soundId);
    snd.volume = 0.2;
    snd.currentTime = 0;
    snd.play();
}

let screen = document.getElementById("screen");
let inputString = "";

function handleInput(value) {
    if (value === "AC") {
        inputString = "";
        screen.textContent = "0";
    } else if (value === "C") {
        inputString = inputString.slice(0, -1);
        screen.textContent = inputString || "0";
    } else if (value === "=") {
        try {
            screen.textContent = eval(inputString) || "0";
            inputString = "";
        } catch {
            screen.textContent = "Error";
            inputString = "";
        }
    } else {
        inputString += value;
        screen.textContent = inputString;
    }
}

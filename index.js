let allEq = document.querySelectorAll(".drum");

document.addEventListener("keydown", (e) => {
  if (
    e.key === "a" ||
    e.key === "d" ||
    e.key === "j" ||
    e.key === "k" ||
    e.key === "l" ||
    e.key === "s" ||
    e.key === "w" ||
    e.key === "A" ||
    e.key === "D" ||
    e.key === "J" ||
    e.key === "K" ||
    e.key === "L" ||
    e.key === "S" ||
    e.key === "W"
  ) {
    let srcend = e.key.toLocaleLowerCase();
    let sound = document.createElement("audio");
    sound.src = `./sounds/audio${srcend}.mp3`;
    sound.type = "audio/mp3";
    sound.autoplay = true;
  }
});

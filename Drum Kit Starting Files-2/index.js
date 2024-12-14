function playSound(key) {
  switch (key) {
    case "w":
      new Audio("sounds/crash.mp3").play();
      break;
    case "a":
      new Audio("sounds/kick-bass.mp3").play();
      break;
    case "s":
      new Audio("sounds/snare.mp3").play();
      break;
    case "d":
      new Audio("sounds/tom-1.mp3").play();
      break;
    case "j":
      new Audio("sounds/tom-2.mp3").play();
      break;
    case "k":
      new Audio("sounds/tom-3.mp3").play();
      break;
    case "l":
      new Audio("sounds/tom-4.mp3").play();
      break;
    default:
      console.log("Invalid key: " + key);
  }
}

function buttonAnimation(key) {
  const activeButton = document.querySelector(`.${key}`);
  if (activeButton) {
    activeButton.classList.add("pressed");
    setTimeout(() => activeButton.classList.remove("pressed"), 100);
  }
}

document.querySelectorAll(".drum").forEach((button) => {
  button.addEventListener("click", function () {
    const buttonKey = this.classList[0]; // Get the class name representing the key
    playSound(buttonKey);
    buttonAnimation(buttonKey);
  });
});

document.addEventListener("keydown", (event) => {
  const key = event.key.toLowerCase(); // Get the pressed key
  playSound(key);
  buttonAnimation(key);
});
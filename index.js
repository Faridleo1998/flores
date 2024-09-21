const button = document.getElementById("button");
const texto = document.getElementById("texto");
const song = document.getElementById("song");

button.addEventListener("click", function () {
  button.classList.add("hidden");

  setTimeout(() => {
    texto.classList.add("show");
    song.play();
  }, "500");
});

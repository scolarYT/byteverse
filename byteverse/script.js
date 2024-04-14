document.addEventListener("mousemove", function (e) {
  var blob = document.getElementById("blob");
  var x = e.clientX - blob.offsetWidth / 2;
  var y = e.clientY - blob.offsetHeight / 2;
  blob.animate(
    {
      left: `${x}px`,
      top: `${y}px`,
    },
    { duration: 3000, fill: "forwards" }
  );
});
document.addEventListener("DOMContentLoaded", function () {
  const toggleButton = document.getElementById("play");
  const gameDiv = document.getElementById("game");
  const navbar = document.querySelector(".navbar");
  const blurDiv = document.getElementById("blur");

  toggleButton.addEventListener("click", function () {
    // Hide the navbar and the blurred background
    navbar.style.display = "none";
    blurDiv.style.display = "none";

    // Show the game div and change the background color
    gameDiv.style.display = "block";
    document.body.style.backgroundColor = "black";
  });
});

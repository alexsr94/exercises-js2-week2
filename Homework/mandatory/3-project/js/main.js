//bluebutton
document
  .querySelectorAll(".btn-primary")[5]
  .addEventListener("click", function (e) {
    e.preventDefault();
    registerCheck();
  });

function blueButton() {
  document.querySelector(".jumbotron").style.backgroundColor = "#588fbd";
  document.querySelector(".btn-primary").style.backgroundColor = "#ffa500";
  document.querySelector(".btn-secondary").style.color = "white";
  document.querySelector(".btn-secondary").style.backgroundColor = "black";
}

function orangeButton() {
  document.querySelector(".jumbotron").style.backgroundColor = "#f0ad4e";
  document.querySelector(".btn-primary").style.backgroundColor = "#5751fd";
  document.querySelector(".btn-secondary").style.color = "#31b0d5";
  document.querySelector(".btn-secondary").style.backgroundColor = "white";
}

function greenButton() {
  document.querySelector(".jumbotron").style.backgroundColor = "#87ca8a";
  document.querySelector(".btn-primary").style.backgroundColor = "black";
  document.querySelector(".btn-secondary").style.backgroundColor = "#8c9c08";
}

function registerCheck() {
  if (
    document.getElementById("exampleInputEmail1").value.length === 0 ||
    !document.getElementById("exampleInputEmail1").value.includes("@")
  ) {
    document.getElementById("exampleInputEmail1").style.backgroundColor = "red";
  }

  if (document.getElementById("example-text-input").value.length === 0) {
    document.getElementById("example-text-input").style.backgroundColor = "red";
  }
  if (document.getElementById("exampleTextarea").value.length === 0) {
    document.getElementById("exampleTextarea").style.backgroundColor = "red";
  }

  if (
    document.getElementById("exampleInputEmail1").value.length > 0 &&
    document.getElementById("example-text-input").value.length > 0 &&
    document.getElementById("exampleTextarea").value.length > 0
  ) {
    document.getElementById("exampleInputEmail1").value = "";
    document.getElementById("example-text-input").value = "";
    document.getElementById("exampleTextarea").value = "";
    window.alert("Thank you!");
  }
}

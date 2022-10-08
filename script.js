const input = document.querySelector('#inp');
const button = document.querySelectorAll('.btn');
const output = document.querySelector('#output');

function onClickHandler(event) {
  var click = event.target.value;


  if (click === "red") {

    output.style.color = "red";
  }
  else if (click === "green") {

    output.style.color = "green";
  }
  else {

    output.style.color = "blue";
  }
}

function onchangeHandler() {
  var text = input.value;
  output.innerText = text;
}
input.addEventListener('input', onchangeHandler);


button.forEach(btn => {
  btn.addEventListener('click', onClickHandler)
})
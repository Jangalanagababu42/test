const input = document.querySelector('#inp');
const button = document.querySelectorAll('.btn');
const output = document.querySelector('#output');

function onClickHandler(event) {
  var click = event.target.value;


  if (click === "h1") {

    output.style.fontSize = `${32}px`;
  }
  else if (click === "h2") {

    output.style.fontSize = `${22}px`
  }
  else {

    output.style.fontSize = `${18}px`
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
const input1 = document.querySelector('#inp');
const button = document.querySelector('#btn');
const output = document.querySelector('#output');
button.disabled = true;
function onClickHandler(event) {
  var inp = input1.value.length;
  console.log(input1.value);
  if (inp > 5) {
    button.disabled = false;
    output.innerText = "password ok"
    output.style.color = "green";
    input1.style.border = "solid green";
    // button.removeAttribute('disabled');
  }
  else {
    button.disabled = true;
    output.innerText = "need lengthy password"
    output.style.color = "red";
    input1.style.border = "solid red";
  }
  // var click = event.target.value;


  // if (click === "red") {

  //   output.style.color = "red";
  // }
  // else if (click === "green") {

  //   output.style.color = "green";
  // }
  // else {

  //   output.style.color = "blue";
  // }
  // output.style.display = "none";
}

// function onchangeHandler() {
//   var text = input.value;
//   output.innerText = text;
// }
// input.addEventListener('input', onchangeHandler);


input1.addEventListener('input', onClickHandler)

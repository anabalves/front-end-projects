const milesInput = document.getElementById("miles"),
  kilometersInput = document.getElementById("kilometers");

const inputs = document.getElementsByClassName("input-velocity");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case "miles":
        kilometersInput.value = parseFloat(value * 1.609).toFixed(2);
        break;
      case "kilometers":
        milesInput.value = parseFloat(value / 1.609).toFixed(2);
        break;
    }
  });
}
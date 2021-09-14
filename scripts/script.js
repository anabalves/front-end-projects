const celciusInput = document.getElementById("celcius"),
  fahrenheitInput = document.getElementById("fahrenheit"),
  kelvinInput = document.getElementById("kelvin");

const inputs = document.getElementsByClassName("input-temperature");

for (let i = 0; i < inputs.length; i++) {
  let input = inputs[i];

  input.addEventListener("input", function (e) {
    let value = parseFloat(e.target.value);

    switch (e.target.name) {
      case "celcius":
        fahrenheitInput.value = parseFloat(value * 1.8 + 32).toFixed(2);
        kelvinInput.value = parseFloat(value + 273.15).toFixed(2);
        break;
      case "fahrenheit":
        celciusInput.value = parseFloat((value - 32) / 1.8).toFixed(2);
        kelvinInput.value = parseFloat((value - 32) / 1.8 + 273.15).toFixed(2);
        break;
      case "kelvin":
        celciusInput.value = parseFloat(value - 273.15).toFixed(2);
        fahrenheitInput.value = parseFloat((value - 273.15) * 1.8 + 32).toFixed(
          2
        );
        break;
    }
  });
}
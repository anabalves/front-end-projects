let outputScreen = document.getElementById("output-screen");

function display(num) {
    outputScreen.value += num;
}

function Calculate() {
    try {
        outputScreen.value = eval(outputScreen.value);
    } catch (error) {
        alert("Invalid");
    }
}

function Clear() {
    outputScreen.value = "";
}

function del() {
    outputScreen.value = outputScreen.value.slice(0, -1);
}

VanillaTilt.init(document.querySelector(".container"), {
    max: 25,
    speed: 400,
    glare: true,
    "max-glare": 0.2,
});
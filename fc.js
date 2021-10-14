
// Fahrenheit to Celsius
function temperatureConverterFC(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputCelsius").innerHTML = (valNum-32) / 1.8;
}

// Celsius to Fahrenheit
function temperatureConverterCF(valNum) {
    valNum = parseFloat(valNum);
    document.getElementById("outputFahrenheit").innerHTML = (valNum*1.8) + 32;
} 
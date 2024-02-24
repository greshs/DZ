var slider = document.getElementById("rangeSlider");
var output = document.getElementById("sliderValue");
output.innerHTML = slider.value + '%';

slider.oninput = function() {
    output.innerHTML = this.value + '%';
}
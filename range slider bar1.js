var slider1 = document.getElementById("myRange1");
var output1 = document.getElementById("demo1");
var outputimg1 = document.getElementById("clothimg1");


myRange1.oninput = function() {
  output1.innerHTML = this.value;
  return x = +this.value;
}

output1.innerHTML = slider1.value;

slider1.oninput = function() {
output1.innerHTML = this.value;
outputimg1.src = 'clot'+this.value+'.svg';
}

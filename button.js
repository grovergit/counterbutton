let count = 0;
let output = document.getElementById('output');

function countClicks()
{
    count=count+1;
    output.innerHTML = count;
}

function reset() {
  count = 0;
  output.innerHTML = "";
}
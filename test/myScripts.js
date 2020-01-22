var i;
for (var i = 0; i < 8; i++) {
  document.write("My Loop: ")
  var answer= Math.random(2, i);
  document.write(answer + "<br />");
}

var ind = 0
while(ind < 8)
  {
    var answer= Math.sqrt(ind);
    document.write(answer + "<br />");
    ind++;
  }


function myLoop(){
var start = document.getElementById("start").value;
var end = document.getElementById("end").value;
for(var i = start; i <= end; i++)
  {
    document.write('<p>' + i + '</p>');
  }
}

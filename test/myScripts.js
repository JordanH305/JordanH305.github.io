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
  var jump = document.getElementById("jump").value;
  
  console.log(typeof start);
  console.log(typeof end);
  console.log(typeof jump);
  
  start = Number(start);
  end = Number(end);
  jump = Number(jump);
  
  console.log(typeof start);
  console.log(typeof end);
  console.log(typeof jump);
  
  
  for(var i = start; i <= end; i+=jump)
  {
    document.write('<p>' + i + '</p>');
  }
}

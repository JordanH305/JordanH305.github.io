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


function myGrades(){
  var g1 = document.getElementById("grade1").value;
   var g2 = document.getElementById("grade2").value;
   var g3 = document.getElementById("grade3").value;
  var g4 = document.getElementById("grade4").value;
  
  g1 = Number(g1);
  g2 = Number(g2);
  g3 = Number(g3);
  g4 = Number(g4);
  
  console.log(g1);
  console.log(g2);
  console.log(g3);
  console.log(g4);
  
  var low = Math.min(g1, g2, g3, g4);
var avg = ( g1+g2+g3+g4-low)/3;
avg = Math.round(avg);
  document.getElementById("lowest").innerHTML = "Your average without your lowest score is " + avg;
}

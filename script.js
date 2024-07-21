var thing = document.getElementById("e")
var thing2 = document.getElementById("r")
var little = document.getElementById("little")

var a = Date.now();
var d = Date.parse("Jun 5 2024 9:55:00 EST");
var b = Date.parse("Aug 21 2024 6:45:00 EST");
var c = 0;
// if(a >= b) {
//   thing.innerHTML = "<iframe id='ytplayer' type='text/html' width='640' height='360' src='https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1&origin=http://example.com' frameborder='0'></iframe>"
// }
// else {
// alert((a - d))
// alert((b - d))
// alert((b - d) / ((b - d) - (d - a)) * 100)
// console.log(b-d);
// console.log(b-a);
// console.log(a-d);
// console.log((a-d)/(b-d) * 100)
setInterval(function () {
  document.title = Math.floor(c / 86400).toString() + "d " + Math.floor(c/3600%24).toString() + "h " + Math.floor(c/60%60).toString() + "m " + Math.floor((c + 0.5)%60).toString() + "s"
  a = Date.now();
  c = (b - a)/1000;
    thing.innerHTML = ""
thing.innerHTML += "<h1 id='p'>" + Math.floor(c / 86400).toString().padStart(2, '0') + " <a style='font-size:40px;'>days</a><br>" +Math.floor(c/3600%24).toString().padStart(2, '0') + " <a style='font-size:39px;'>hours</a><br>" + Math.floor(c/60%60).toString().padStart(2, '0') + " <a style='font-size:35px;'>minutes</a><br>" + Math.floor((c + 0.5)%60).toString().padStart(2, '0') + " <a style='font-size:35px;'>seconds</a></h1>";
  little.innerHTML = ((Date.now()-d)/(b-d) * 100).toFixed(5) + "% there!"
  // console.log("e + " + (b-d)/86400000)

  // thing.innerHTML += "<h1 id='q'>days<br>hours<br>minutes<br>seconds</h1>";
  
  // navigator.clipboard.writeText("Only " + Math.floor(c / 86400) + " days");
  // r.innerHTML = "until school starts<br>(" + ((b - d) / ((b - d) - (d - a)) * 50).toFixed(5) + "% left)"

}, 10);
 function darkmode() {
   document.body.style.background = 'blue'
 }
// }
// var little = document.getElementById("little")
// little.innerHTML = ((Date.now()-d)/(b-d) * 100).toFixed(10) + "% done!"

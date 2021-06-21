var cursor = document.querySelector(".cursor");
var cursor2 = document.querySelector(".cursor2");
document.addEventListener("mousemove",function(e){
  cursor.style.cssText = cursor2.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

var cursor1 = document.querySelector(".cursor1");
var cursor3 = document.querySelector(".cursor3");
document.addEventListener("mousemove",function(e){
  cursor1.style.cssText = cursor3.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

var cursor11 = document.querySelector(".cursor11");
var cursor22 = document.querySelector(".cursor22");
document.addEventListener("mousemove",function(e){
  cursor11.style.cssText = cursor22.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});

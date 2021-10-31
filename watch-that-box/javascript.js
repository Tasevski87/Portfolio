var button1=document.getElementById("button1")
var button2=document.getElementById("button2")
var button3=document.getElementById("button3")
var button4=document.getElementById("button4")
var button5=document.getElementById("button5")
var button6=document.getElementById("button6")
var box=document.getElementById("box")

button1.addEventListener("click", function(){
box.style.height = "250px"});

button2.addEventListener("click", function(){ 
box.style.height = "25px"});

button3.addEventListener("click", function(){ 
box.style.backgroundColor = "Yellow";});

button4.addEventListener("click", function(){
box.style.backgroundColor = "Blue";});

button5.addEventListener("click", function(){
box.style.opacity=0.10;});

button6.addEventListener("click", function(){ 
box.style.height = "150px";
box.style.backgroundColor = "Orange";
box.style.opacity=1;});      


        

        
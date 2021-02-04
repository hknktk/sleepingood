document.addEventListener('DOMContentLoaded',function(){
  const $menuButton = document.getElementById("menuButton");
  const $nav        = document.getElementById("nav");
  const $body       = document.querySelector("body");
  const $html       = document.querySelector("html");
 
  
  document.getElementById("menuButton").addEventListener("click",function(){
    $menuButton.classList.toggle("active");
    $nav.classList.toggle("active");
    $body.classList.toggle("none")
    $html.classList.toggle("none")
    
    
  })
  

  document.getElementById("list").addEventListener("click",function(){
    $menuButton.classList.toggle("active");
    $nav.classList.toggle("active");
    $body.classList.toggle("none")
    $html.classList.toggle("none")
  })


})



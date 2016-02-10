$(document).ready(function(){
  $(".img").on("mouseenter", function(){
    $(this).animate({"width": "98%"});
  });
  $(".img").on("mouseleave", function(){
    $(this).animate({"width": "80%"});
  });
});
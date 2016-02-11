$(document).ready(function(){
  $("#search").on("click", function(event){
    var s = $("#field");
    if(s.hasClass("displayed")){
      if(s.val()==""){
        s.animate({"top": "-20%"});
        s.removeClass("displayed");
      } else {
        window.location = "https://www.google.com/?gws_rd=ssl#q="+s.val();
      };
    } else {
      s.animate({"top": "7%"});
      s.addClass("displayed");
  };
  });
});
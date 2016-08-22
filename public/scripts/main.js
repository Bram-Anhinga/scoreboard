//$(document).ready(function(){

  //var objDiv = document.getElementById("comments-list");
  //objDiv.scrollTop = objDiv.scrollHeight;

//});

document.addEventListener("DOMContentLoaded", function(event) {

  console.log("In file");

  setTimeout(function(){
    var element = document.getElementById("comments__list");
    element.scrollTop = element.scrollHeight;
  },500);

});

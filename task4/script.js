//write jquery plugin - trunc
// if in text have a many haracters - add button
//when click -> make visible text
//readme should have info
// example: $('.breaking-news').trunc(200);

$(document).ready(function() {
  //how many symbols are visible
  var showChar = 100;
  //add ... when > 100
  var moretext = "...";
  //add collapse when all text visible, and can collapse it back
  var lesstext = "collapse";
  //function make moretext
  $('.more').each(function() {
    var content = $(this).html();
    //if length > 100(char) add ...
    if(content.length > showChar) {

      var c = content.substr(0, showChar);
      var h = content.substr(showChar-1, content.length - showChar);

      var html = c + '<span class="morecontent"><span>' + h + '</span><a href="" class="morelink">' + moretext + '</a></span>';

      $(this).html(html);
    }

  });
// collapse
  $(".morelink").click(function(){
    if($(this).hasClass("collapse")) {
      $(this).removeClass("collapse");
      $(this).html(moretext);
    } else {
      $(this).addClass("collapse");
      $(this).html(lesstext);
    }
    $(this).parent().prev().toggle();
    $(this).prev().toggle();
    return false;
  });
});
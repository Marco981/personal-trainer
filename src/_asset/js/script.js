$(window).scroll(function() {
  var scrollTop = $(this).scrollTop();
  $(".banner-1").css("top", -(scrollTop *0.4)+"px");
  if(scrollTop>1200){
    $(".banner-2").css("top",+550 -(scrollTop *0.4)+"px");
  } 
  if (scrollTop>2252) {
      $(".banner-3").css("top",+470 -(scrollTop *0.2)+"px");
  }
  if (scrollTop>2552) {
      $(".banner-4").css("top",+630 -(scrollTop *0.2)+"px");
  } 

  if($(window).width()<500) {
      $(".banner-1,.banner-2,.banner-3,.banner-4").css({top: "-222px"});
  }
});

$(".icon-menu").on("click",function(){
  $(this).toggleClass("horizontal");
  $(".menu-mobile").toggleClass("menu-visible");
})

$(".scroll").on("click",function(){
  $(".menu-mobile").removeClass("menu-visible");
  $(".icon-menu").removeClass("horizontal");
  
})




var scrollLink = $(".scroll");

scrollLink.click(function(e){
  e.preventDefault();
  $("body,html").animate({
    scrollTop: $(this.hash).offset().top
  },1000)
});
var waypoints = $('#about').waypoint({
  handler: function(direction) {
    $(".about-img").addClass("fadeInLeft")
    $(".bio-text").addClass("fadeInRight")
    if(direction==="down" && $(window).width()>500) {
      $("header").addClass("sticky");
    } else {
      $("header").removeClass("sticky");
    }
}
});
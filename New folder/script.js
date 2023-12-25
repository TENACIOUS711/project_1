function init(){
    gsap.registerPlugin(ScrollTrigger);
  
  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true
  });
  locoScroll.on("scroll", ScrollTrigger.update);
  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length ? locoScroll.scrollTo(value, 0, 0) : locoScroll.scroll.instance.scroll.y;
    }, 
    getBoundingClientRect() {
      return {top: 0, left: 0, width: window.innerWidth, height: window.innerHeight};
    },
    pinType: document.querySelector("#main").style.transform ? "transform" : "fixed"
  });
  
  gsap.from(".line-1", {
    scrollTrigger: {
      trigger: ".line-1",
      scroller: "#main",
      scrub: true,
      start: "top bottom",
      end: "top top",
      onUpdate: self => console.log(self.direction)
    },
    scaleX: 0,
    transformOrigin: "left center", 
    ease: "none"
  });
  
  gsap.from(".line-2", {
    scrollTrigger: {
      trigger: ".orange",
      scroller: "#main",
      scrub: true,
      pin: true,
      start: "top top",
      end: "+=100%"
    },
    scaleX: 0, 
    transformOrigin: "left center", 
    ease: "none"
  });
  
  
  var tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".purple",
        scroller: "#main",
        scrub: true,
        pin: true,
        start: "top top",
        end: "+=100%"
      }
    });
  
  tl.from(".purple p", {scale: 0.3, rotation:45, autoAlpha: 0, ease: "power2"})
    .from(".line-3", {scaleX: 0, transformOrigin: "left center", ease: "none"}, 0)
    .to(".purple", {backgroundColor: "#28a92b"}, 0);
  
  
  
  // each time the window updates, we should refresh ScrollTrigger and then update LocomotiveScroll. 
  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  
  // after everything is set up, refresh() ScrollTrigger and update LocomotiveScroll because padding may have been added for pinning, etc.
  ScrollTrigger.refresh();
  
}
init();
var crsr = document.querySelector("#cursor")
var main = document.querySelector("#main")
var video = document.querySelector("video")
document.addEventListener("mousemove",function(dets){
  crsr.style.left = dets.x+5+"px"
  crsr.style.top = dets.y-5+"px"
})
video.addEventListener("mouseenter",function(){
  gsap.to("#cursor",{
    duration : 0.6,
    width: "60px",
    height: "16px",
    borderRadius: "8px",
    backgroundColor : "darkorchid",
    mixBlendMode: "normal"
  })
})
video.addEventListener("mouseleave",function(dets){
  gsap.to("#cursor",{
    duration: 0.6,
    height: "20px",
    width: "20px",
    borderRadius: "50%",
    backgroundColor: "whitesmoke",
    mixBlendMode: "difference"
  })
})

var tl = gsap.timeline({
    scrollTrigger:{
        trigger:"#page1 h1",
        scroller:"#main",
        start:"top 30%",
        end:"top 0",
        scrub: 3
    }
});

tl.to("#page1 h1",{
  duration: 0.6,
    x:-110,
},"anim")
tl.to("#page1 h2",{
  duration: 0.6,
    x: 110,
},"anim")
tl.to("#page1 video",{
    width: "85%",
    height: "50%"
})
var tl2 = gsap.timeline({
  scrollTrigger:{
      trigger:"#page1 h1",
      scroller:"#main",
      start:"top -60%",
      end:"top -130%",
      scrub: 3
  }
});
tl2.to("#main",{
  backgroundColor: "#fff"
})
var tl3 = gsap.timeline({
  scrollTrigger:{
      trigger:"#page1 h1",
      scroller:"#main",
      start:"top -390%",
      end:"top -400%",
      scrub: 3
  }
});
tl3.to("#main",{
  backgroundColor: "#0F0F0F"
})
var box = document.querySelectorAll("#box")
box.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    var img = elem.getAttribute("data-image")
    crsr.style.width =  "150px"
    crsr.style.height = "150px"
    crsr.style.borderRadius = "0"
    crsr.style.mixBlendMode = "normal"
    crsr.style.backgroundImage = `url(${img})`
  })
})
box.forEach(function(elem){
  elem.addEventListener("mouseleave",function(){
    var img = elem.getAttribute("data-image")
    crsr.style.width =  "20px"
    crsr.style.height = "20px"
    crsr.style.borderRadius = "50%"
    crsr.style.mixBlendMode = "difference"
    crsr.style.backgroundImage = `none`
  })
})
var purple = document.querySelector("#purple")
var h4 = document.querySelectorAll("#nav h4")
h4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    purple.style.opacity = "1"
    purple.style.display = "block"
  })
})
h4.forEach(function(elem){
  elem.addEventListener("mouseleave",function(){
    purple.style.opacity = "0"
    purple.style.display = "none"
  })
})
var tl4 = gsap.timeline({
  scrollTrigger:{
    trigger:"#footer",
    scroller:"#body",
    start:"top 30%",
    end:"top 0",
    markers: true,
    scrub: 2
  }
});
tl4.to("#footer",{
  height: "100vh"
})
tl4.to("#footer h1",{
  duration: 0.6,
  y:30
})
tl4.to("#circle2 h6",{
  duration: 0.6,
  y:30
})
tl4.to("#footer2 h5",{
  duration: 0.6,
  y:30
})
h4.forEach(function(elem){
  elem.addEventListener("mouseenter",function(){
    purple.style.opacity = "1"
    purple.style.display = "block"
  })
})
h4.forEach(function(elem){
  elem.addEventListener("mouseleave",function(){
    purple.style.opacity = "0"
    purple.style.display = "none"
  })
})
var home = document.querySelector("nav-part2: nth-child(1)")
var work = document.querySelector("nav-part2: nth-child(2)")
var studio = document.querySelector("nav-part2: nth-child(3)")
var contact = document.querySelector("nav-part2: nth-child(4)")
h4.addEventListener("mouseenter", function() {
  document.querySelector("#purple h2").innerHTML="Home";
})
//  h4.forEach(function(elem){
    //  elem.addEventListener("mouseenter",function(){
    // document.getElementById("purple1").innerHTML="Home";
  //  })
//  })
document.getElementById("purple1").innerHTML = "I have changed!";


var crsr = document.querySelector("#cursor");
var blur = document.querySelector("#cursor-blur")
document.addEventListener("mousemove",function(dets){
    crsr.style.left = dets.x+30  +"px"
    crsr.style.top = dets.y +"px"
    blur.style.left = dets.x -150 +"px"
    blur.style.top = dets.y -150 +"px"


})
var h4all = document.querySelectorAll("#nav h4")
h4all.forEach(function(elm){
elm.addEventListener("mouseenter" , function(){
    crsr.style.scale=3
    crsr.style.border= "1px solid white"
    crsr.style.backgroundColor="transparent"
})
  elm.addEventListener("mouseleave" , function(){
    crsr.style.scale=1
    crsr.style.border= "0px solid #95C11E"
    crsr.style.backgroundColor="#95C11E"
})

})
gsap.to("#nav",{
    backgroundColor:"#000",
    duration:0.7,
    height:"110px",
    scrollTrigger:{
        trigger:"#nav",
        scroller:"body",
        // markers:true,
        start:"top -10%",
        end:"top -11%",
        scrub:1
    }
})

gsap.to("#main" ,{
    backgroundColor:"#000",
    scrollTrigger:{
        trigger:" #main",
        scroller:"body",
        // markers:true,
        start:"top -40%",
        end:"top -80%",
        scrub:1
    }
})

gsap.from("#about-us img, #about-us-in",{
    y:50,
    opacity:0,
    duration:1,
    stagger:0.4,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        // markers:true,
        start:"top 60%",
        end:"top 55%",
        scrub:3
    }
})

gsap.from(".card",{
    scale:0.5,
    opacity:0,
    duration:0.4,
    scrollTrigger:{
        trigger:".card",
        scroller:"body",
        // markers:true,
        start:"top 70%",
        end:"top 65%",
        scrub:2
    }
})

gsap.from("#colon1",{
    y:-40,
    x:-40,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})

gsap.from("#colon2",{
    y:50,
    x:50,
    scrollTrigger:{
        trigger:"#colon1",
        scroller:"body",
        // markers:true,
        start:"top 55%",
        end:"top 45%",
        scrub:3
    }
})
gsap.from("#page4 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 78%",
        end:"top 72%",
        scrub:3
    }

})
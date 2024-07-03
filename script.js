//Top Button
var upside=document.getElementsByClassName("up")[0];

window.addEventListener("scroll", function(){
    var distance=window.scrollY;
    if(distance>300){
        upside.classList.add("show");
    }else{
        upside.classList.remove("show");
    }
});
//Moves to top of page
upside.addEventListener("click", function(){
    window.scrollTo(0,0);
})
//Shows arrow sign with mouse movement
upside.addEventListener("mousemove", function(){
    upside.innerHTML="&#8593;";
}) 
//Dissepears the arrow sign 
upside.addEventListener("mouseout", function(){
    upside.innerHTML="&#129061;";
})

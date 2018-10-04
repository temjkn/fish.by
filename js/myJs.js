var node = document.getElementsByClassName("slider"); //stoping carousel

node.addEventListener('mouseenter', function(evt) {
    evt.currentTarget.style.webkitAnimationPlayState = 'paused';    
});

node.addEventListener('mouseleave', function(evt) {
    evt.target.style.webkitAnimationPlayState = 'running';  
});

var mod= document.getElementById("modal");
mod.hidden=true;

/*function modal_see(){
    var modal= document.getElementsByClassName("modal");
    modal.class.add("modal_block")
};

var basket= document.getElementsByClassName("basket");//running modal
basket.onclick=function(){
    var modal=document.getElementsByClassName("modal");
    modal.className="modal_block";
};*/
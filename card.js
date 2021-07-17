!function($){
var $hearts= $('#hearts'),
heartsCount=$hearts.data('count'); 

setInterval(showHearts,1000);
showHearts()
function showHearts(){
	 for(var i=0; i< heartsCount;i++){
 	!function(){
 var $heart=$('<div class="heart"></div>').appendTo(hearts);
 var left= Math.round(Math.random()*80);
 var top= -Math.round(Math.random()*40);
 $heart.css('left', left+'%');
 $heart.css('top', top+'%'); 

setTimeout(function(){
	$heart.css('top',(top+140)+'%');
},100);
setTimeout(function(){
	$heart.remove();
},10000);
}(i)
}
}
}(jQuery)
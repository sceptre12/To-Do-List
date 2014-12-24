$(window).load(function(){
	if(localStorage.length !== 0){
	  for(a = 1 ; a <= localStorage.length; a++){
	      $($('li')[a-1]).append(localStorage.getItem("item"+a));
		}
	}
});


$(document).ready(function(){

	// function to clear local storage 
	$($('button')[1]).click(function(){
		localStorage.clear();
		resetUl();
	});
	// function to save items into local storage
	$($('button')[0]).click(function(){
		var b = 0;
		for( i = 0; i < $('li').length; i++){
			b++;
			if( $('li')[i].innerHTML != ""){
			   	localStorage.setItem("item"+b, $('li')[i].innerHTML);
			}else{
				b--;
			}
		}
	});
	$(function () {
  		$('[data-toggle="tooltip"]').tooltip()
	});
});
function resetUl(){
	$('ul').empty().wrapInner("<li></li><li></li><li></li><li></li>");
}


$(document).ready(function() {

let c=0;

$('.box').on('click', function() { 
	c++;

if (c%2===0 && $(this).text()!=="O"){
$(this).append('<h1 class="xsos">X</h1>');
	$('.disp').text("O's turn");

} 
else if(c%2!==0 && $(this).text()!=="X"){
$(this).append('<h1 class="xsos">O</h1>');
	$('.disp').text("X's turn");

} else{
	alert('This is already taken');
	c=c-1;

}

});

$('#res').on('click', function(event) {
window.location = window.location;
});

});

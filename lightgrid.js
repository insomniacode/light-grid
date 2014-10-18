
// jQuery stuff starts here
$(document).ready(function () {


// code for resizing this generates the initial of divs (container is table)
	$('#resize').on('click', function() {
	var resizeZombie = prompt('Please enter a number between 1 and 64...', 'Enter a number here between 1 and 64');
		if ( resizeZombie >= 1 && resizeZombie <= 64) {
			$('#info').append('<table>');
			for (var i = 0; i < resizeZombie; i++){
				$('#info').append('<tr>');
					for (var j = 0; j < resizeZombie; j++){
						$('#info').append('<td><div class="start"></div></td>');
						var squareSize = (960 / resizeZombie);
					$('.start').css({"height": squareSize, "width": squareSize,});
					};
				$('</tr>').after('</td>');
			};
			$('</table>').after('</tr>');
		}	else if ( resizeZombie < 1 || resizeZombie > 64) {
			alert('Enter a number in the selected range.');
		} else if (isNaN(resizeZombie) == true) {
			alert('Enter a valid number');
		} else {
		alert('??');
		};

	// mouseover class change code
	$('.start').mouseover(function () {
		$(this).addClass('scratched');
		});		
	});		
	
	
// working code for reset button in Google Chrome
	$('#reset').on('click', function () {
		$('td > div').removeClass('scratched');
		$('td > div').addClass('start');
		$('td > div').fadeTo('fast', 1);
		alert('Grid is reset!');
	});
	
	// code to delete grid
	$("#delete").click(function () {
		$('table').remove();
		$('.start').remove();
		$('.scratched').remove();
		$('td').remove();
		$('tr').remove();
		alert('Grid was deleted');
	});
	
	
	
	// code for opacity fading
	$('#opacity').click(function() {
		$('td > div').mouseover(function() {
			$(this).fadeTo("slow", 0.4);
		});
	});
		
	
	});  // last bracket/parenthesis combo
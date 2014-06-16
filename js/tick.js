$( document ).ready(function() {
	var check_hash = {}
	var current_turn = '0';
	$('#table').delegate('td', 'click', function(e){
		var current = $(e.target);
		var value = current.html();
		console.log(value)
		  if(value === ""){
			current_turn = ((current_turn == 'X') ? '0' : 'X'); 
			current.html(current_turn); 
			
		}
	});
		$('#table').delegate('td', 'click', function(e){
	 		var current = $(e.target).data('position'); 
	 		console.log(current);
	 		var current_value = $(e.target).html();
	 		console.log(current_value);
	 			check_hash[current] = current_value
	 			console.log(Object.keys(check_hash).length)
	 			h3 = $('h3').html();
	 			console.log(h3);
	 		  if(h3 == '-'){
	 			if(Object.keys(check_hash).length > 4){
	 			  if(current_value == 'X'){
					if(check_hash['A1'] == 'X' && check_hash['A2'] == 'X' && check_hash['A3'] == 'X'){
						$('h3').append('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['B1'] == 'X' && check_hash['B2'] == 'X' && check_hash['B3'] == 'X'){
						$('h3').append('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['C1'] == 'X' && check_hash['C2'] == 'X' && check_hash['C3'] == 'X'){
						$('h3').append('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['A1'] == 'X' && check_hash['B2'] == 'X' && check_hash['C3'] == 'X'){
						$('h3').append('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['A1'] == 'X' && check_hash['B1'] == 'X' && check_hash['C1'] == 'X'){
						$('h3').append('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['A2'] == 'X' && check_hash['B2'] == 'X' && check_hash['C2'] == 'X'){
						$('h3').append('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['A3'] == 'X' && check_hash['B3'] == 'X' && check_hash['C3'] == 'X'){
						$('h3').append('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['A3'] == 'X' && check_hash['B2'] == 'X' && check_hash['C1'] == 'X'){
						$('h3').append('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(Object.keys(check_hash).length == 9){
						$('h3').append('<h1>' + 'Cats Game!' + '</h1>');
					}
				  }
				  else if(current_value == '0'){
				  	if(check_hash['A1'] == '0' && check_hash['A2'] == '0' && check_hash['A3'] == '0'){
						$('h3').append('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['B1'] == '0' && check_hash['B2'] == '0' && check_hash['B3'] == '0'){
						$('h3').append('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['C1'] == '0' && check_hash['C2'] == '0' && check_hash['C3'] == '0'){
						$('h3').append('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['A1'] == '0' && check_hash['B2'] == '0' && check_hash['C3'] == '0'){
						$('h3').append('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['A1'] == '0' && check_hash['B1'] == '0' && check_hash['C1'] == '0'){
						$('h3').append('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['A2'] == '0' && check_hash['B2'] == '0' && check_hash['C2'] == '0'){
						$('h3').append('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['A3'] == '0' && check_hash['B3'] == '0' && check_hash['C3'] == '0'){
						$('h3').append('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['A3'] == '0' && check_hash['B2'] == '0' && check_hash['C1'] == '0'){
						$('h3').append('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(Object.keys(check_hash).length == 9){
						$('h3').append('<h1>' + 'Cats Game!' + '</h1>');
					}
				  }
				}
			  }
			  else{
			  	return;
			  }

	 	})
	
	
	$('#button').click(function(){
		location.reload();
	})
});

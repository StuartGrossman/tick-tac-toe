rows = 13
columns = 13
str = ""
str += '<table border="1" cellspacing="1" cellpadding="5">'

for(i = 0; i < rows; i++){
   str += '<tr>'
   for (j = 0; j < columns; j++){
      str += '<td>' +  (i + j) + '</td>'
   }
   str += '</tr>'
}

str += '</table>'
document.write(str)

$( document ).ready(function() { // function to add X or 0 to squares clicked 
	var current_turn = '0'; // starting point for turn
	var check_hash = {}; // hash to check who wins
	var h3 = $('h3'); // var to html winning statment too
	var change = function(turn, tag){
		current_turn = turn;
		tag.html(turn);
	}
	var check_turn = function(input, turn, tag, callback){
			if(input === ""){
				turn = ((turn == 'X') ? '0' : 'X');
				callback(turn, tag)
				// current_turn = turn;
				
			}
		};
	var add_to_hash = function(data, html, hash){
			hash[data] = html
		};
	$('#button').click(function(){
		location.reload();
	})
	$('#table').delegate('td', 'click', function(e){
		check_turn($(e.target).html(), current_turn, $(e.target), change);
	});
	$('#table').delegate('td', 'click', function(e){
	 	add_to_hash($(e.target).data('position'), $(e.target).html(), check_hash);

	 		  if(h3.html().length <= 0 && Object.keys(check_hash).length >= 5){
	 			  if($(e.target).html() == 'X'){ // all solutions for x
					if(check_hash['A1'] == 'X' && check_hash['A2'] == 'X' && check_hash['A3'] == 'X'){
						h3.html('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['B1'] == 'X' && check_hash['B2'] == 'X' && check_hash['B3'] == 'X'){
						h3.html('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['C1'] == 'X' && check_hash['C2'] == 'X' && check_hash['C3'] == 'X'){
						h3.html('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['A1'] == 'X' && check_hash['B2'] == 'X' && check_hash['C3'] == 'X'){
						h3.html('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['A1'] == 'X' && check_hash['B1'] == 'X' && check_hash['C1'] == 'X'){
						h3.html('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['A2'] == 'X' && check_hash['B2'] == 'X' && check_hash['C2'] == 'X'){
						h3.html('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['A3'] == 'X' && check_hash['B3'] == 'X' && check_hash['C3'] == 'X'){
						h3.html('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(check_hash['A3'] == 'X' && check_hash['B2'] == 'X' && check_hash['C1'] == 'X'){
						h3.html('<h1>' + 'Player1 Wins!' + '</h1>');
					}
					else if(Object.keys(check_hash).length == 9){
						h3.html('<h1>' + 'Cats Game!' + '</h1>');
					}
				  }
				  else if($(e.target).html() == '0'){ // all solutions for 0
				  	if(check_hash['A1'] == '0' && check_hash['A2'] == '0' && check_hash['A3'] == '0'){
						h3.html('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['B1'] == '0' && check_hash['B2'] == '0' && check_hash['B3'] == '0'){
						h3.html('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['C1'] == '0' && check_hash['C2'] == '0' && check_hash['C3'] == '0'){
						h3.html('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['A1'] == '0' && check_hash['B2'] == '0' && check_hash['C3'] == '0'){
						h3.html('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['A1'] == '0' && check_hash['B1'] == '0' && check_hash['C1'] == '0'){
						h3.html('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['A2'] == '0' && check_hash['B2'] == '0' && check_hash['C2'] == '0'){
						h3.html('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['A3'] == '0' && check_hash['B3'] == '0' && check_hash['C3'] == '0'){
						h3.html('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(check_hash['A3'] == '0' && check_hash['B2'] == '0' && check_hash['C1'] == '0'){
						h3.html('<h1>' + 'Player2 Wins!' + '</h1>');
					}
					else if(Object.keys(check_hash).length == 9){ // cats game if 9 turns have been played
						h3.html('<h1>' + 'Cats Game!' + '</h1>');
					}
				  }
			  }
			  else{
			  	return;
			  }

	 	})

});

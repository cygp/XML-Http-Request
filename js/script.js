(function() {
	var url = 'http://api.icndb.com/jokes/random';
	var paragraph = document.getElementById('joke');
	var button = document.getElementById('get-joke');
	button.addEventListener('click', function(){
	  getJoke();
	});

})();
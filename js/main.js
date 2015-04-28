var praise = function() {
	document.getElementById('llamaPraise').innerHTML = shouldLlamaBePraised();
}

var shouldLlamaBePraised = function() {
	var randomInt = Math.floor(Math.random() * 101);
	var llamaPraising = 'meh, why not?'
	if (randomInt % 2 == 0) {
		llamaPraising = 'oh hell no!'
	} else if (randomInt % 3 == 0) {
		llamaPraising = 'all praise the mighty llama!'
	} else if (randomInt % 4 == 0) {
		llamaPraising = 'PRAISE OR SUFFER THE WRATH OF LLAMA'
	}
	return llamaPraising;
}
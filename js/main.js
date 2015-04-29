var praise = function() {
	document.getElementById('llamaPraise').innerHTML = shouldLlamaBePraised();
}

var shouldLlamaBePraised = function() {
	var randomInt = Math.floor(Math.random() * 101);
	var llamaPraising = 'meh, why not?'
	if (randomInt % 2 == 0) {
		llamaPraising = 'oh hell no!'
	} else if (randomInt % 3 == 0) {
        llamaPraising = bestowWisdom(randomInt);
	} else if (randomInt % 5 == 0) {
		llamaPraising = 'PRAISE OR SUFFER THE PRAISING OF LLAMA'
	}
	return llamaPraising;
}

var bestowWisdom = function(wisdom) {
	if (wisdom % 2 == 0) {
		return 'all praise the mighty llama!';
	} else {
		return "<div> <img src='llamas/Llama-Doll-icon_orig.png'></img> <span> says \"&#161S&#205! Pero solamente por los justos\"</span> </div>"
	}
}

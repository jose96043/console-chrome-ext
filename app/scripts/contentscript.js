'use strict';

var FLAG = false;
var CONSOLE = false;
var CONSOLE_CLASSNAME = 'portocarrero_console';

function displayConsole() {
	var elemConsole = document.createElement('input');
	elemConsole.className = CONSOLE_CLASSNAME;
	elemConsole.style.cssText = 'z-index:10000000000; float:left; position:fixed; left: 0';
	// elemDiv.style.cssText = 'position:absolute;width:100%;height:100%;opacity:0.3;z-index:100;background:#000;';
	document.body.insertBefore(elemConsole, document.body.firstChild);
}

function removeConsole() {
	var elements = document.getElementsByClassName(CONSOLE_CLASSNAME);
	while (elements.length > 0) {
		elements[0].parentNode.removeChild(elements[0]);
	}
}

function detectkeys(e) {
	var evtobj = window.event ? event : e;
	FLAG = evtobj.ctrlKey ? true : false;
	if (FLAG && evtobj.keyCode === 192) {
		if (!CONSOLE) {
			console.log('SHIT ON');
			displayConsole();
			CONSOLE = true;
		} else {
			removeConsole();
			console.log('SHIT OFF');
			CONSOLE = false;
		}
		FLAG = false;
	}
	// var character = String.fromCharCode(evtobj.which);
}



document.onkeydown = detectkeys;

console.log(document.querySelector('body'));
console.log('\'Allo \'Allo! Content script');
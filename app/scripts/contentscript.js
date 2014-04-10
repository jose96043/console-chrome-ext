'use strict';

var init = (function() {
	var flag = false,
		consoleDisplay = false,
		consoleClassName = 'portocarrero_console',
		cacheInput = null,

		displayConsole = function() {
			var elemConsole = document.createElement('input');
			elemConsole.className = consoleClassName;
			document.body.insertBefore(elemConsole, document.body.firstChild);
			elemConsole.focus();
			consoleEvent();
		},

		removeConsole = function() {
			var elemConsole = cachedElem();
			elemConsole.parentNode.removeChild(elemConsole);
		},

		consoleListener = function(e) {
			//On Enter pressed value would be read from input
			if (e.keyCode === 13) {
				var elemConsole = cachedElem(),
				consoleValue = elemConsole.value;
				handleCommand(consoleValue);
				elemConsole.value = '';
			}
		},

		consoleEvent = function() {
			var el = cachedElem();
			el.addEventListener('keypress', function(e) {
				consoleListener(e);
			});
		},

		handleCommand = function(command) {
			console.log('HI', command);

		},

		cachedElem = function() {
			if (cacheInput === null) {
				cacheInput = document.getElementsByClassName(consoleClassName)[0];
			}
			return cacheInput;
		};

	return {
		detectkeys: function(e) {
			var evtobj = window.event ? event : e;
			flag = evtobj.ctrlKey ? true : false;
			if (flag && evtobj.keyCode === 192) {
				if (!consoleDisplay) {
					displayConsole();
					consoleDisplay = true;
				} else {
					removeConsole();
					consoleDisplay = false;
				}
				flag = false;
			}
		}
	};
})();

document.onkeydown = init.detectkeys;
console.log('\'Allo \'Allo! Content script');
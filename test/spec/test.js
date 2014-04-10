/* global describe, it */



(function() {
	'use strict';



	describe('Give it some context', function() {
		describe('maybe a bit more context here', function() {
			it('should run here few assertions', function() {
			});
		});
	});

	describe('Contentscript', function(s) {
		console.log(s);
		describe('#controlKey()', function() {
			it('should set FLAG to true', function() {
				// detectkeys({"event":{"ctrlKey":{}}});
				// console.log("HELLO")
			});
		});
	});


})();
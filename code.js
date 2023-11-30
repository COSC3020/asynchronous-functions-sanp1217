const async = require("async");

const nums = [1, 2, 2, 2, 1, 2];

function countMatches() {
	let count = 0;
	async.each(
		nums,
		function (num, callback) {
			let compare = 2;

			if (num == compare) {
				count++;
			}
			callback();
		},
		function () {
			//console.log(count);
		}
	);
	return count;
}

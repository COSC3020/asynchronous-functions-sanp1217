const async = require("async");

function countMatches(nums) {
	let count = 0;
	async.each(nums, function (num, callback) {
		let compare = 2;

		if (num == compare) {
			count++;
		}
		callback();
	});
	return count;
}

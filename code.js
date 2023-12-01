const async = require("async");

function countMatches(nums, compare) {
	let count = 0;
	async.each(nums, function (num) {
		if (num == compare) {
			count++;
		}
	});
	return count;
}

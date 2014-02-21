angular.module('mxa055.filters', [])
.filter('readableNumbers', function () {
	return function (number) {
		if (isNaN(parseFloat(number)) || !isFinite(number)) return '0';
		return format(number);

		function round(n, precision) {
			var prec = Math.pow(10, precision);
			return Math.round(n * prec) / prec;
		}
		
		function format(n) {
			var base = Math.floor(Math.log(Math.abs(n)) / Math.log(1000));
			var suffix = 'kmb'[base - 1];
			return suffix ? round(n / Math.pow(1000, base), 1) + suffix : '' + n;
		}
	};
});
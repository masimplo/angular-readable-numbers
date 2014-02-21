describe('mxa055.filters', function () {
    beforeEach(function() {
        module('mxa055.filters');
    });
	
	describe('Readable numbers filter', function() {
        it('has a readable numbers filter', inject(function ($filter) {
            expect($filter('readableNumbers')).not.toBeNull();
        }));

        it('should return 0 when the input is 0', inject(function (readableNumbersFilter) {
            expect(readableNumbersFilter(0)).toEqual('0');
        }));

        it('should return the full number when the input is less than 999', inject(function (readableNumbersFilter) {
            expect(readableNumbersFilter(1)).toEqual('1');
            expect(readableNumbersFilter(999)).toEqual('999');
        }));

        it('should return the number plus k when the input is a solid thousand up to 1m', inject(function (readableNumbersFilter) {
            expect(readableNumbersFilter(1000)).toEqual('1k');
            expect(readableNumbersFilter(10000)).toEqual('10k');
            expect(readableNumbersFilter(100000)).toEqual('100k');
            expect(readableNumbersFilter(999000)).toEqual('999k');
        }));

        it('should return a one point precision float when the input is a power of 10', inject(function (readableNumbersFilter) {
            expect(readableNumbersFilter(1100)).toEqual('1.1k');
            expect(readableNumbersFilter(1150)).toEqual('1.2k');
            expect(readableNumbersFilter(1190)).toEqual('1.2k');
            expect(readableNumbersFilter(10100)).toEqual('10.1k');
            expect(readableNumbersFilter(10150)).toEqual('10.2k');
            expect(readableNumbersFilter(100100)).toEqual('100.1k');
            expect(readableNumbersFilter(100150)).toEqual('100.2k');
            expect(readableNumbersFilter(100950)).toEqual('101k');

        }));

        it('should return number m when the input is a multiple of 1m', inject(function (readableNumbersFilter) {
            expect(readableNumbersFilter(999999)).toEqual('1m');
            expect(readableNumbersFilter(1000000)).toEqual('1m');
            expect(readableNumbersFilter(20000000)).toEqual('20m');
            expect(readableNumbersFilter(300000000)).toEqual('300m');
        }));

        it('should return a one point precision float m when the input is not a multiple of 1m', inject(function (readableNumbersFilter) {
            expect(readableNumbersFilter(1100000)).toEqual('1.1m');
            expect(readableNumbersFilter(20100000)).toEqual('20.1m');
            expect(readableNumbersFilter(300100000)).toEqual('300.1m');
        }));
    });
var topn = require("./topn");


describe("top n", function () {
    it("should find top n", function () {
        topn.N = 4;
        topn.process_lines([
            '1',
            '2',
            '3',
            '4',
            '5',
            '6'
        ]);
        expect(topn.get_top_n()).toEqual([6, 5, 4, 3]);

        topn.N = 4;
        topn.process_lines([
            '1',
            '2',
            '3',
            '4',
        ]);
        expect(topn.get_top_n()).toEqual([4, 3, 2, 1]);

        topn.N = 1;
        topn.process_lines([
            '1',
            '2',
            '3',
            '4',
        ]);
        expect(topn.get_top_n()).toEqual([4]);
    });
});

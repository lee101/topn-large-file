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
        expect(topn.top_n).toBe([6, 5, 4, 3]);
    });
});

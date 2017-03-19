var fs = require('fs');
var Heap = require('heap');
var readStream = fs.createReadStream('input.txt', {flags: 'r', encoding: 'utf8'});
writeStream = fs.createWriteStream('testdata/nodeoutput.txt');

exports.N = +process.argv[2];
exports.top_n = [];

var heap = Heap();

exports.process_lines = function(lines) {

}
var last_value = '';
readStream.on('data', function(chunk) {
    var p = chunk.length;
    var lines = chunk.split('\n');
    lines[0] = last_value + lines[0];
    last_value = lines.pop();

    process_lines(lines)

});
readStream.on('end', function () {
    process_lines([last_value])

    writeStream.write(exports.top_n.join('\n'));

});



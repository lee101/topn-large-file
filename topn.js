var fs = require('fs');
var es = require('event-stream');

var readStream = fs.createReadStream('input.txt', {flags: 'r', encoding: 'utf8'});
writeStream = fs.createWriteStream('testdata/nodeoutput.txt');

function process_lines(lines) {
    writeStream.write(lines.join('\n'));
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
});



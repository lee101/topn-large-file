var fs = require('fs');
var Heap = require('heap');

var heap = new Heap();
var heapified = false;

exports.process_lines = function (lines) {
    for (var i = 0; i < lines.length; i++) {
        var number = +lines[i];
        if (!heapified && heap.size() == exports.N) {
            heap.heapify();
            heapified = true;
        }

        if (heap.size() < exports.N) {
            heap.nodes.push(number)
        }
        else {
            heap.pushpop(number)
        }
    }
};

exports.get_top_n = function () {
    var top_n = [];
    var heap_size = heap.size();
    for (var i = 0; i < heap_size; i++) {
        top_n.push(heap.pop())
    }
    return top_n.reverse()
};

exports.N = +process.argv[2];

if (require.main === module) {
    var input_filename = process.argv[3];
    var output_filename = process.argv[4];


    var readStream = fs.createReadStream(input_filename, {flags: 'r', encoding: 'utf8'});
    var writeStream = fs.createWriteStream(output_filename);


    var last_value = '';
    readStream.on('data', function (chunk) {
        var p = chunk.length;
        var lines = chunk.split('\n');
        lines[0] = last_value + lines[0];
        last_value = lines.pop();

        exports.process_lines(lines)

    });
    readStream.on('end', function () {
        exports.process_lines([last_value]);

        writeStream.write(exports.get_top_n().join('\n'));

    });
}

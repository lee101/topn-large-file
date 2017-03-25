timing results on top 100 of file of 1M numbers:

### bash
the linux solution of `sort -nr input.txt | head -100 > output.txt` is too slow because it needlessly sorts the entire file

total ~.6s

### python

uses python 2.7 
usage `python topn.py 100 input.txt output.txt`
reading file 1.3s total ~7s :(

### node
`node topn.js 100 input.txt output.txt`

reading file: ~.4s total ~.5s

node solution is much faster with asynchronous reading of files

### running tests

`pip install -r requirements.txt`

`npm install`

`jasmine-node .`

`python test_topn.py`

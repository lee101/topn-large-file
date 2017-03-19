uses python 2.7 
usage `python topn.py 100 input.txt output.txt`

the linux solution of `sort -nr input.txt | head -100 > output.txt` is too slow because it needlessly sorts the entire file


timing tests:
python
sorted file: reading file 1.3s total ~7s


node
sorted file: reading file: ~.4s 

pip install
npm install

jasmine-node .
nosetests

import os
import unittest

import topn


class TestTopN(unittest.TestCase):
    def generate_file(self):
        file_name = 'input.txt'
        self.num_lines_in_file = 1000000
        if os.path.isfile(file_name):
            return file_name
        with open(file_name, "wb") as input_file:
            input_file.write('\n'.join([str(i) for i in xrange(self.num_lines_in_file)]))
        return file_name

    def test_top_n(self):
        file_name = self.generate_file()
        results = list(topn.get_top_n(100, file_name))
        self.assertEqual(len(results), 100)
        for i in xrange(100):
            self.assertEquals(results[i], self.num_lines_in_file - (i + 1))

    def test_top_n_from_lines(self):
        results = list(topn.get_top_n_from_lines(4, [1, 2, 3, 4]))
        self.assertEquals(results, [4, 3, 2, 1])

        results = list(topn.get_top_n_from_lines(4, [1, 2, 3, 4, 5, 6, 7, 8]))
        self.assertEquals(results, [8, 7, 6, 5])

        results = list(topn.get_top_n_from_lines(4, [8, 7, 6, 5, 4, 3, 2, 1]))
        self.assertEquals(results, [8, 7, 6, 5])

        results = list(topn.get_top_n_from_lines(4, ['1', '2', '3', '4']))
        self.assertEquals(results, [4, 3, 2, 1])

        results = list(topn.get_top_n_from_lines(1, [8, 7, 6, 5, 4, 3, 2, 1]))
        self.assertEquals(results, [8])


if __name__ == '__main__':
    unittest.main()

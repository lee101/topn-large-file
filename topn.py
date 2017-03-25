import heapq

import fire


def get_top_n_from_lines(N, lines):
    min_heap = [0] * N
    i = 0
    heapified = False
    for line in lines:
        number = int(line)
        if i == N and not heapified:
            heapq.heapify(min_heap)
            heapified = False

        if i < N:
            min_heap[i] = number
        else:
            if number > min_heap[0]:
                heapq.heappushpop(min_heap, number)
        i += 1

    return reversed([heapq.heappop(min_heap) for _ in xrange(N)])


def get_top_n(N, input_file):
    with open(input_file, 'r') as f:
        return get_top_n_from_lines(N, f)


def write_file(output, output_filename):
    with open(output_filename, 'wb') as f:
        f.write(output)


def top_n(N, input_file, output_file):
    top_n = get_top_n(N, input_file)
    write_file('\n'.join([str(n) for n in top_n]), output_file)


if __name__ == '__main__':
    fire.Fire(top_n)

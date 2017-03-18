import heapq

import fire

def get_top_n(N, input_file):
    min_heap = [0] * N
    i = 0
    with open(input_file, 'r') as f:
        for line in f:
            number = int(line)
            if i < N:
                min_heap[i] = number
            elif i == N:
                heapq.heapify(min_heap)
            else:
                if number > min_heap[0]:
                    heapq.heappushpop(min_heap, number)
            i += 1

    return reversed([heapq.heappop(min_heap) for _ in xrange(N)])

def write_file(output, output_filename):
    with open(output_filename, 'wb') as f:
        f.write(output)

def top_n(N, input_file, output_file):
    top_n = get_top_n(N, input_file)
    write_file(top_n, output_file)

if __name__ == '__main__':
    fire.Fire(top_n)

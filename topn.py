import fire
import boltons

def get_top_n(N, input_file):
    pass

def write_file(output, output_filename):
    pass

def top_n(N, input_file, output_file):
    top_n = get_top_n(N, input_file)
    write_file(top_n, output_file)

if __name__ == '__main__':
    fire.Fire(top_n)

import pickle
import os

def file_exists(filename):
    """Returns True if the file with the specified filename is an existing regular file, or False
    otherwise.
    """
    return os.path.isfile(filename)


def save_data(data, filename):
    """Saves the object 'data' to a file with the specified filename."""
    with open(filename, "wb") as file:
        pickle.dump(data, file)


def load_data(filename):
    """Returns an object that has previously been stored in a file with the specified filename.
    Precondition: The file exists and is a pickled representation of the object.
    """
    with open(filename, "rb") as file:
        data = pickle.load(file)
        return data

#function announce
def announce(f):
    def wrapper():
        print("About to run he function...")
        f()
        print("Done with the function")
    return wrapper

#use the announce decorator to add announce function to hello function
@announce
def hello():
    print("Hello, world!")

hello()

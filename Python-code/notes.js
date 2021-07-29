/**
 * This file contains some notes when learning the course
 * 
 * PRINT OUT 
 *Print Hello, World
 .print("Hello, World!")
 *
 *VARIABLES
 .a=28  int
 .b=1.5 float
 .c="Hello!"    str
 .d=True bool
 .e=None NoneType
 *
 *
 * PRINT OUT THE STORED VALUES
 *When wanting to receive an input and store it on a variable
 .name = input("Name: ")
 *
*Print the values which has already been stored on a variable
.print("Hello, " + name)
*
*F STRING
*f string in Python 3 (Short of formatted string)
.name = input("Name: ")
.print(f"Hello, {name}")//plug in the value of variable name
*
*CONDITIONS
.n = int(print("Number:"))
*We can use the function int() to convert the input to number
.
.if n>0
    print("n is positive")
.elif n<0
    print(n is negative)
.else
.   print(n is zero)
*
*
*SEQUENCE
. name = "Joseph"
. print(name[0])
.
.names = ["Lewis","Joseph","Mwantumu"]
.print(names)
.print(names[0])
*
*Tuple variable which can store more than one value
.coordinateX = 20.0
.coordinateY = 10.0
*
*
*Instead of doing the above
.coordinate = (20.0,10.0)
*
*
*DATA STRUCTURES
.list - sequence of mutable values[you can change the values]
.tuple - sequence of immutable values [ you can't change  the values]
*Note: list and tuples keep things in particular order , set don't
.set - collection of uniques values
.dict - collection of key-value pairs
*
*#-this sign is allows you to add comments on your code
*
*LIST
.names = ["Joseph","Amina","Joshua"]
*
*You can print all the values in a list 
.print(names)
*
*You can print a single values in a list
.print(names[0])
*
*Remember list is mutable, meaning you can change the values in a list
*So you can add values to a list using append() function
names.append("Draco")
*
*You can also sort the list using the sort() function
.names.sort()
*
*print(names)
*
*SET
*If you don't care about the order, but all the values are unique, you *can use set
*
*Create an empty set
.s = set()
*
*Add elements in a set
.s.add(1)
.s.add(2)
.s.add(3)
.s.add(4)
*
*Printing out set
.print(s)
*
*All the values entered in a set must be unique
*
*Remove element in a set
.s.remove(2)
.print(s)
*
*If you want to know the number of elements in a set you can use len() function
print(f"The set has {len(s)} elements.")
*
*
*LOOPS
*To create a for loop in python
.for i in [0,1,2,3,4,5]:
.   print(i)
*
*To achieve the same thing using the range function
.for i in range(6):
.   print(i)
*
*You can also have a list a loop through the list
names = ["Joseph","Peter","Anna"]
.for i in names:
.   print(i)
*
*DICTIONARIES
*You can also store values in a dictionary in key-value pair
.candidates = {"first":"Joseph", "Second":"Lewis", "Third":"Anna"}
*
*Print out elements in a dictionary using key
.print(candidates["First"])
*
*Adding element in a dictionary
.candidates["Fourth"] = "Baraka"
*
*You can check if the values was added using the key
print(candidates["Fourth"])
*
*
*FUNCTIONS
*To create a function you must you the def word
.def square(x):
    return x*x
*To use the function 
.for i in range(6):
    print(f"The square of {i} is {square(i)}")
*
*IMPORTING FUNCTION
*In python you can import function from another file
*Create a function file [funSquare.py], define the square function in this file
*Use the function Square from another file[Square.py], remember to add this words
.From funSquare import square
*
*
*OBJECT ORIENTED PROGRAMMING WITH PYTHON
// class Point():
//     def __init__(self, input1, input2):
//         self.x = input1
//         self.y = input2

// p = Point(2,8)
// print(p.x)
// print(p.y)

// class Flight():
//     #function to create a new Flight
//     def __init__(self,capacity):
//         self.capacity = capacity
//         self.passengers = []
    
//     #function to add passenger to the flight
//     def add_passenger(self, name):
//         if not self.open_seats():
//             return False
//         self.passengers.append(name)
//         return True

//     #function to check the numbers of seats you have
//     def open_seats(self):
//         return self.capacity - len(self.passengers)

// flight = Flight(3)

// people = ["Harry","Ron","Hermione","Ginny"]
// for person in people:
//     success = flight.add_passenger(person)
//     if success:
//         print(f"Added {person} to flight successfully.")
//     else:
//         print(f"No availabe seats for {person}") 
*
*
*FUNCTIONAL PROGRAMMING WITH PYTHON
*DECORATORS
// #function announce
// def announce(f):
//     def wrapper():
//         print("About to run he function...")
//         f()
//         print("Done with the function")
//     return wrapper

// #use the announce decorator to add announce function to hello function
// @announce
// def hello():
//     print("Hello, world!")

// hello()
*
*LAMBDA
//Dictionary in a list
// people = [
//     {"name":"Harry","house":"Gryffindor"},
//     {"name":"Cho","house":"Ravenclaw"},
//     {"name":"Draco","house":"Slytherin"}
// ]

// # def f(person):
// #     return person["house"]

// #sorting the data
// # people.sort(key=f)
// people.sort(key=lambda person:person["name"])

// print(people)
*/

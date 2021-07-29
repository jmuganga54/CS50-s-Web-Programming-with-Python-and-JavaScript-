#Create an empty set
s = set()

#Add elements to the set
s.add(1)
s.add(2)
s.add(3)
s.add(4)
s.add(3)

#print out the set
print(s)

#Remove element in a set
s.remove(2)

#Print after deleting an element
print(s)

#Print how many elements are there in a set
print(f"The set has {len(s)} elements")
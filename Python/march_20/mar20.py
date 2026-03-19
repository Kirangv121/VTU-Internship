# Creating sets
set_a = {1, 2, 3, 4}
set_b = {3, 4, 5, 6}

print("Set A:", set_a)
print("Set B:", set_b)


# add()
print("\nAdd Method")
set_a.add(7)
print("After adding 7:", set_a)


# remove()
print("\nRemove Method")
set_a.remove(2)
print("After removing 2:", set_a)


# union()
print("\nUnion Operation")
union_result = set_a.union(set_b)
print("Union:", union_result)


# union using operator
print("Union using | :", set_a | set_b)


# intersection()
print("\nIntersection Operation")
intersection_result = set_a.intersection(set_b)
print("Intersection:", intersection_result)


# intersection using operator
print("Intersection using & :", set_a & set_b)


# difference()
print("\nDifference Operation")
difference_result = set_a.difference(set_b)
print("Difference:", difference_result)


# difference using operator
print("Difference using - :", set_a - set_b)


# symmetric_difference()
print("\nSymmetric Difference Operation")
sym_diff_result = set_a.symmetric_difference(set_b)
print("Symmetric Difference:", sym_diff_result)


# symmetric difference using operator
print("Symmetric Difference using ^ :", set_a ^ set_b)
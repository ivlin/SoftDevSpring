def union(ar1,ar2):
    return [x for x in ar1 if x not in ar2]+[x for x in ar2] 

def intersection(ar1,ar2):
    return [x for x in ar1 if x in ar2]

def set_difference(ar1,ar2):
    return [x for x in ar1 if x not in ar2]

def symmetric_difference(ar1,ar2):
    return [x for x in ar1+ar2 if x not in intersection(ar1,ar2)]

def cartesian_product(ar1,ar2):
    return [(x,y) for x in ar1 for y in ar2]

print union([1,2,3],[2,3,4])
print intersection([1,2,3],[2,3,4])
print set_difference([1,2,3,4,5],[2,3,4,6])
print symmetric_difference([1,2,3,4],[2,3,4,5])
print cartesian_product(["one","two"],["ship","thing"])

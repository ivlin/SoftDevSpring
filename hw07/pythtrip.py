import random

def pt(n):
    trips=[]
    for hyp in xrange(n):
        for leg1 in xrange(hyp):
            for leg2 in xrange(hyp):
                if leg1*leg1 + leg2*leg2 == hyp*hyp:
                    trips.append((leg1,leg2,hyp))
    return trips

def pt2(n):
    return [(leg1,leg2,hyp) for hyp in xrange(n)
            for leg1 in xrange(hyp)
            for leg2 in xrange(leg1)
            if leg1*leg1 + leg2*leg2 == hyp*hyp]

def quicksort(arr):
    if len(arr)>0:
        ar1 = [n for n in arr if n < arr[len(arr)/2]]
        ar2 = [n for n in arr if n > arr[len(arr)/2]]
        return quicksort(ar1)+[arr[len(arr)/2]]+quicksort(ar2)
    return []

#pick pivot
#smaller to left bigger to right
#all vs<p are LH
#all vs>p are UH
#PIVOT in FRP
    
print quicksort([6,3,8,1,4])


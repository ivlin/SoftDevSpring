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
    return [quicksort(arr[:piv])+quicksort(arr[piv:])
            for ]

#pick pivot
#smaller to left bigger to right
#all vs<p are LH
#all vs>p are UH
#PIVOT in FRP
    
quicksort([6,3,8,1,4])


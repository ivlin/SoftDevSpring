import json

file = open("test.json","r")

ind = 0

data=[]
newdata=[]

while ind < 49:
    data.append(json.loads(file.readline()))
    ind+=1

leastind=0
while len(data) > 0:
    leastind=0
    for i in xrange(0,len(data)):
        if data[i]["state"] < data[leastind]["state"]:
            leastind=i
    newdata.append(data[leastind])
    data.pop(leastind)

newfile = open("revised.json","a")
for ind in xrange(0,len(newdata)):
    newfile.write(json.dumps(newdata[ind]))
    newfile.write(",\n")
    
'''
for line in xrange(0,len(data)){
    print line
}
'''
file.close()
newfile.close()

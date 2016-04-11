import time

def timer(f):
    def timed_func(*arg):
        start = time.time()
        a = f(*arg)
        return "execution time: "+str(time.time()-start)
    return timed_func

def argument_logger(f):
    def logger(*arg):
        args = ": ("
        index = 0
        while list(*arg[index:index+1])!=[]:
            args+=str(*arg[index:index+1])+","
            index+=1
        return f.func_name+args+")"
    return logger

@timer
def printer(string):
    return string

@argument_logger
def sum_array(arr,a):
    total=0
    for x in arr:
        total+=x
    return total

print printer("HI")
print sum_array([1,5,9],"A")

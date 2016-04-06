import math

UC_LETTERS="ABCDEFGHIJKLMNOPQRSTUVWXYZ"
LC_LETTERS=UC_LETTERS.lower()
NUMBERS="0123456789"
SYMBOLS=".?!&#,;:-_*"


def isMixed(p):
    check = [-1 if x in UC_LETTERS else 0 if x in LC_LETTERS else 1 if x in NUMBERS else False for x in p]
    return -1 in check and 0 in check and 1 in check

def ratePass(p):
    rating = 0
    rating += (len(p) - 8)
    check = [-1 if x in UC_LETTERS else 1 if x in NUMBERS else 0 for x in p]
    rating += 10 - sum(check)
    check = [1 if x in NUMBERS or x in SYMBOLS else 0 for x in p]
    rating += 20.0*sum(check)/len(check)
    return math.floor(10*len(p)/rating)

print ratePass("aB1-")
print ratePass("WAHAHAHAHsdfoafnwoa3rqw9ah0roqwp;'342;'4")
print ratePass("hellohle12")
print ratePass("122348952835")

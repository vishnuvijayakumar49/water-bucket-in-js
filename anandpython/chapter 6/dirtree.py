
def dirtree(dir1):
    import os
    print dir1.split('/')[-1]
    a=os.listdir(dir1)
    for c in a:
        if os.path.isdir(c):
            i=len(dir1.split('/'))-2
            for j in range(i):
                print '|  ',
            if c==a[-1]:
                print '\__',dirtree(os.path.join(dir1,c))
            else:
                print '|__',dirtree(os.path.join(dir1,c))
        else:
            i=len(dir1.split('/'))-2
            for j in range(i):
                print '|  ',
            if c==a[-1]:
                print '\__',c
            else:
                print '|__',c
            
                        



dirtree('/home/vvv')
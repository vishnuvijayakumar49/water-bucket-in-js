var seen={};
var queue=[];


function addState(parentState,newState)
      {
         for (element in seen)
                if (element==newState)
                        return;
        seen[newState.toString()]=parentState.toString();
        queue=queue.concat([newState]);
      }
function getState()
       {
         if (queue.length==0)
                {
                   return NaN;
				}
         var state=queue[0];
         queue=queue.slice(1);
         return state;
        }

function getSolution()
        {
         var solution=[];
         state=queue[queue.length-1];
         while (state.length)
              { 
		solution=solution.concat('['+state.toString()+']');
                state=getParent(state);
              }
         solution.reverse();
         return solution;
          }
function getParent(childState)
        {
         try
             { 
		return seen[childState.toString()];
             }
         catch(err)
             { 
		return NaN;
             }
          }
function test(oldState,newState,goal)
        {
      	   var newA=newState[0];
      	   var newB=newState[1];
      	   won =(newA==goal || newB==goal);
      	   addState(oldState,newState);
      	   return won;
        }

function playgame(aMax,bMax,goal)
        {
         	addState('',[0,0])
         	while (true)
                {
                 	oldState=getState();
                 	aHas=oldState[0];
                 	bHas=oldState[1];
                 	if (test (oldState, [aMax,bHas],goal))
                 	         break ;
                 	if (test (oldState, [0   ,bHas],goal))
                 		  break ;
                	if (test (oldState, [aHas,bMax],goal))
                	          break;
                 	if (test (oldState, [aHas,0   ],goal))
                 	          break;
                 	howmuch =Math.min(aHas, bMax-bHas)
                 	if (test (oldState, [aHas-howmuch,bHas+howmuch],goal))
                        	 break;
                 	howmuch =Math.min(bHas, aMax-aHas)
                 	if (test (oldState, [aHas+howmuch,bHas-howmuch],goal))
                        	 break;

                }
              console.log('Solution is');
              console.log(getSolution(),'\n');

        }
console.log(playgame(7,11,10))

import { interval } from "rxjs"
import { take, map, groupBy, mergeAll, count } from "rxjs/operators"

const numbersObservable = interval(500).pipe(take(5))

numbersObservable
  .pipe(
    groupBy(x => x % 2),
    map(innerObs => innerObs.pipe(count())),
    mergeAll()
  )
  .subscribe(x => console.log(x))

/*
--0--1--2--3--4|

 groupBy(x => x % 2)
 
--+--+---------|
  \  \
  \  1-----3---|
  0-----2-----4|
  
 map(innerObs => innerObs.count())
 
--+--+---------|
  \  \
  \  ---------2|
  ------------3|
  
 mergeAll
 
--------------(3,2)|

*/

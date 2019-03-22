import { fromEvent, interval } from "rxjs"
import { window, map, switchAll, count } from "rxjs/operators"

const clickObservable = fromEvent(document, "click")
const clockObservable = interval(1000)

const resultObservable = clockObservable.pipe(
  window(clickObservable),
  map(obs => obs.pipe(count())),
  switchAll()
)

resultObservable.subscribe(x => console.log(x))

/*
--0--1--2--3--4--5--6--7--8-- clockObservable
-------c-------c---c--------- clickObservable

    window
 
+------+-------+---+---------
\      \       \   \
 -0--1-|2--3--4|-5-|6--7--8--
 
  map(obs => obs.count())
  
+------+-------+---+--
\      \       \   \
 -----2|------3|--1|---
          
    switch
 
------2-------3---1----

*/

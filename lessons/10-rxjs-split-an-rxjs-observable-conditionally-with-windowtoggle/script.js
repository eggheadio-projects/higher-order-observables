import { fromEvent, interval } from "rxjs"
import { mergeAll, windowToggle } from "rxjs/operators"

const clickObservable = fromEvent(document, "click")
const clockObservable = interval(1000)
const downObservable = fromEvent(document, "mousedown")
const upObservable = fromEvent(document, "mouseup")

const resultObservable = clockObservable.pipe(
  windowToggle(downObservable, () => upObservable),
  mergeAll()
)

resultObservable.subscribe(x => console.log(x))

/*
--0--1--2--3--4--5--6--7--8--9--
----------D-------------D------- downObservable
-------------------U------------ upObservable

 windowToggle
 
----------+-------------+-------
          \3--4--5-|    \-8--9--
          
 mergeAll
 
-----------3--4--5--------8--9--

*/

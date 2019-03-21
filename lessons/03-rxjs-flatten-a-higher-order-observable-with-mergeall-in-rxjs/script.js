import { interval, fromEvent } from "rxjs"
import { map, mergeAll } from "rxjs/operators"

const clickObservable = fromEvent(document, "click")

const clockObservable = clickObservable.pipe(
  map(click => interval(1000)),
  mergeAll(3)
)

clockObservable.subscribe(x => console.log(x))

// flattening
// Observable<Observable<number>> ---> Observable<number>

/*
--------+--------+------------------------
        \        \
         -0-1-2-3 -0-1-2-3-4-5-6
         
         mergeAll
         
----------0-1-2-3-405162738495...
*/

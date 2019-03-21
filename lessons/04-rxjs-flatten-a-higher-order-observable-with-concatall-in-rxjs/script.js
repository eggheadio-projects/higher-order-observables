import { interval, fromEvent } from "rxjs"
import { map, concatAll, take } from "rxjs/operators"

const clickObservable = fromEvent(document, "click")

const clockObservable = clickObservable.pipe(
  map(click => interval(1000).pipe(take(5))),
  concatAll()
)

clockObservable.subscribe(x => console.log(x))

// flattening
// Observable<Observable<number>> ---> Observable<number>

/*
--------+--------------+-+----
        \        
         -0-1-2-3-4|
         
         concatAll
         
----------0-1-2-3-4-----0-1-2-3-4--0-1-2-3-4
*/

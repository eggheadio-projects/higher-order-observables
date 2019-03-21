import { interval, fromEvent } from 'rxjs'
import { map, switchAll } from 'rxjs/operators'

const clickObservable = fromEvent(document, 'click');

const clockObservable = clickObservable
  .pipe(
    map(click => interval(1000)),
    switchAll()
  )
  

clockObservable.subscribe(x => console.log(x));

// flattening
// Observable<Observable<number>> ---> Observable<number>

/*
--------+--------+------------------------
        \        \
         -0-1-2-3 -0-1-2-3-4-5-6
         
         switch
         
----------0-1-2-3--0-1-2-3-4-5-6

*/


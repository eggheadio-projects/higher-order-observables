import { interval, of } from "rxjs"
import { mergeMap, take } from "rxjs/operators"

const sourceObservable = interval(500).pipe(take(5))

const resultObservable = sourceObservable.pipe(
  mergeMap(x => {
    if (x % 2 === 0) {
      return of(x)
    } else {
      return of(x + 1, x + 2)
    }
  })
)

resultObservable.subscribe(x => console.log(x))

/*
---0---1---2---3---4|

---+---+---+---+---+|
   \   \   \   \   \
   0|  23|  2| 45| 4|
   
---0---23--2---45--4|
*/

// mergeMap
// concatMap
// switchMap

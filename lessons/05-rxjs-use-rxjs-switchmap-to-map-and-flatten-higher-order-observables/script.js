import { fromEvent } from "rxjs"
import { switchMap } from "rxjs/operators"

const clickObservable = fromEvent(document, "click")

function performRequest() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(res =>
    res.json()
  )
}

// Observable<Event> ---> Observable<Response>
const responseObservable = clickObservable.pipe(
  switchMap(click => performRequest())
)

// switchMap = map ... + ... switch

responseObservable.subscribe(x => console.log(x.email))

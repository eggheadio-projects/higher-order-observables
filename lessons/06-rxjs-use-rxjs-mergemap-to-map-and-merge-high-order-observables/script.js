import { fromEvent } from "rxjs"
import { mergeMap } from "rxjs/operators"

const clickObservable = fromEvent(document, "click")

function performRequest() {
  return fetch("https://jsonplaceholder.typicode.com/users/1").then(res =>
    res.json()
  )
}

const emailObservable = clickObservable.pipe(
  mergeMap(click => performRequest(), (click, res) => res.email, 3)
)

// mergeMap = map ... + ... mergeAll

emailObservable.subscribe(
  email => console.log(email)
)

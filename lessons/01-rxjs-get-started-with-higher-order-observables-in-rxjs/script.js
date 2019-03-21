import { interval, fromEvent } from 'rxjs'
import { map } from 'rxjs/operators'

const clickObservable = fromEvent(document, 'click')

const clockObservable = clickObservable
  .pipe(map(click => interval(1000)))

clockObservable
  .subscribe(clock => clock.subscribe(tick => console.log(tick)))

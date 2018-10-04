import { Subject } from 'rxjs-compat/Subject';
import { Subscription } from 'rxjs-compat/Subscription';

const IDEEventEmitter: Subject<any> = new Subject<any>();

export class IDE {
    public static subscribe(fn): Subscription {
        return IDEEventEmitter.subscribe(fn)
    }

    public static send(message) {
        IDEEventEmitter.next(message);
    }
}
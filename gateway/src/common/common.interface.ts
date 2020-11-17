import { Observable } from 'rxjs'

export interface CommonSerivce {
    test({}): Observable<any>
}
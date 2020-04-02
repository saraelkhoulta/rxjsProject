import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { tap } from 'rxjs/operators';
import { Subject, BehaviorSubject } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class UserService {
  numberSubject:Subject<number>=new Subject();
  numberBehaviorSubject:BehaviorSubject<number>=new BehaviorSubject(0);

  constructor(private http:HttpClient) { }

  getUsersObservable(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(tap(users=>
      {console.log('Observable',users);
      })
    );
  }

  getUsersPromises(){
    return this.http.get('https://jsonplaceholder.typicode.com/users')
    .pipe(tap(users=>
      {console.log('PROMISES',users);
      })
    )
    .toPromise();
  }
}

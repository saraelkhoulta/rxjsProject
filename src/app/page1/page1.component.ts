import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Observer, from, interval, Subscription } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.scss']
})
export class Page1Component implements OnInit ,OnDestroy{

  constructor(private userService:UserService) { }
  subscription:Subscription;

//RXJS
ngOnInit(){
  //const numbers =[1,5,10,1,5,10,1,5,10,1,5,10,1,5,10];
  /*  const source=from(numbers);//=====>observable
  

  //1
  const observer:Observer<Number>={ //======>observer
     next:(value)=>{console.log('Next',value)}
     ,error:(err)=>{console.log('Error',err)}
     ,complete:()=>{console.log('Complete!')}
  }
  source.subscribe(observer);
  //ou 2
  source.subscribe(
                  (value)=>{console.log('Next',value)}
                  ,(err)=>{console.log('Error',err)}
                  ,()=>{console.log('Complete!')}
  )
  
  //ou 3
  const source1=Observable.create((observer:Observer<number>)=>{
    for (const number of numbers){
     // if(number==10){observer.error('someting went wrong');}
      observer.next(number);
    }
    observer.complete();
  });
  
  source1.subscribe(
    (value)=>{console.log('Next',value)}
    ,(err)=>{console.log('Error',err)}
    ,()=>{console.log('Complete!')}
  )
  */

  
  //const source2=interval(1000);
  
 /* this.subscription= source2.subscribe(
    (value)=>{console.log('Next',value)}
    ,(err)=>{console.log('Error',err)}
    ,()=>{console.log('Complete!')}
  )*/


  this.userService.getUsersObservable().subscribe();
  this.userService.getUsersPromises();

  /*this.userService.numberSubject.next(0);
  this.userService.numberSubject.next(1);
  this.userService.numberSubject.next(2);

  this.userService.numberSubject.subscribe((value)=>console.log('observer1',value)); //Subject il ne prend pas en consédération ce qu est avant comme 0,1,2
  this.userService.numberSubject.subscribe((value)=>console.log('observer2',value));

  this.userService.numberSubject.next(3);
  this.userService.numberSubject.next(4);
  this.userService.numberSubject.next(5);*/

 
   this.userService.numberBehaviorSubject.next(1); //sans cette ligne les observers vont affiher 0(par défaut) ,sinon a la place 0 va etre 1


  this.userService.numberBehaviorSubject.subscribe((value)=>console.log('observer1',value)); 
  this.userService.numberBehaviorSubject.subscribe((value)=>console.log('observer2',value));
  this.userService.numberBehaviorSubject.next(3);
  this.userService.numberBehaviorSubject.next(4);

  }

  ngOnDestroy(){         
   console .log('page1 unsubscribe/Destroyed ')                            
 this.subscription.unsubscribe();
  }
}

import { Component, OnInit, ViewChild, ElementRef, AfterViewInit } from '@angular/core';
import { fromEvent } from 'rxjs';
import{map,filter, debounce, debounceTime, distinctUntilChanged} from "rxjs/operators"

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.scss']
})
export class Page2Component implements AfterViewInit {
@ViewChild('name') name: ElementRef;
  constructor() { }

  ngAfterViewInit () {
    fromEvent(this.name.nativeElement,'keyup')
    .pipe(
      map((event:any)=>event.target.value),
      filter((text:string)=>text.length>2),
      debounceTime(1000),        //une longue liste de résultats, et un champ de recherche permettant
      //de modifier le contenu de cette liste. Comme on ne veut pas mettre à jour la liste après chaque
       //saisie d’un nouveau caractère, on peut utiliser debounceTime.              
     
      distinctUntilChanged() )       //émettra seulement des valeurs si la nouvelle valeur est différente  l’ancienne.    
    .subscribe((text)=>console.log('API CALL',text))
  }
}

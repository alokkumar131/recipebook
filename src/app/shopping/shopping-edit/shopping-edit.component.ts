import { 
   Component,
   OnInit, 
   ViewChild, 
   ElementRef, 
   Output,
   EventEmitter  } from '@angular/core';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  @ViewChild('nameRef', {static: true}) nameRef: ElementRef;
  @ViewChild('amountRef', {static: true}) amountRef: ElementRef;
  @Output() newIngradients = new EventEmitter<any>();

  constructor() { }

  ngOnInit(): void {
  }
  OnAddInGradients(){
   this.newIngradients.emit({
    name: this.nameRef.nativeElement.value,
    amount: this.amountRef.nativeElement.value
   });
     
  }

}

import { Component, ElementRef, EventEmitter, OnInit, Output, ViewChild } from '@angular/core';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-shopping-list-edit',
  templateUrl: './shopping-list-edit.component.html',
  styleUrls: ['./shopping-list-edit.component.scss']
})
export class ShoppingListEditComponent  implements OnInit{
  
  @ViewChild("inputName",{static:true})inputNameRef!:ElementRef;
  @ViewChild("inputAmount",{static:true})inputAmountRef!:ElementRef;
  @Output() ingredientCreated:EventEmitter<Ingredient>=new EventEmitter();
  constructor(){

  }
  ngOnInit(): void {
      
  }

  addIngredient = ()=>{
    // this.ingredientCreated.emit({
      const ingredientName = this.inputNameRef.nativeElement.value;
      const ingredientAmount = this.inputAmountRef.nativeElement.value;
    // })
    const ingredient = new Ingredient(ingredientName,ingredientAmount);
    this.ingredientCreated.emit(ingredient)
  }
}

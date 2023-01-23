import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss']
})
export class RecipeListComponent  implements OnInit{
  @Output() selectedRecipe:EventEmitter<Recipe> = new EventEmitter();
  constructor(){
  }

  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', '/assets/img/recipe1.jpeg'),
    new Recipe('Another Test Recipe', 'This is simply a test', '/assets/img/recipe2.jpeg')
  ];

  ngOnInit(){
  }

  onSelectRecipe  = (selectedRecipe:Recipe) => {
   this.selectedRecipe.emit(selectedRecipe)
  }


}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { RecipeHttpService } from 'src/app/_services/recipe-http.service';
import { RecipeInformation } from './recipe-information';
import { Recipe } from './recipe';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.scss'],
})
export class RecipeListComponent implements OnInit {
  @Output() selectedRecipe: EventEmitter<Recipe> = new EventEmitter();
  recipes!: RecipeInformation;
  constructor(private recipeHttpService: RecipeHttpService) {}

  ngOnInit() {
    this.recipeHttpService
      .getAllRecipes()
      .subscribe((data: RecipeInformation) => {
        console.log('data', data.recipes);
        this.recipes = data;
      });
  }

  onSelectRecipe = (selectedRecipe: Recipe) => {
    console.log('recipe', selectedRecipe);
    this.selectedRecipe.emit(selectedRecipe);
  };
}

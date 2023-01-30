import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Recipe } from '../recipe';

@Component({
  selector: 'app-recipe-list-item',
  templateUrl: './recipe-list-item.component.html',
  styleUrls: ['./recipe-list-item.component.scss'],
})
export class RecipeListItemComponent implements OnInit {
  @Output() recipeSelected: EventEmitter<void> = new EventEmitter();
  @Input() recipe!: Recipe;
  constructor() {}
  ngOnInit(): void {}

  onSelectRecipe = () => {
    this.recipeSelected.emit();
  };
}

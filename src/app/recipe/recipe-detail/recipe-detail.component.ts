import { Location } from '@angular/common';
import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Data } from '@angular/router';
// import { Recipe } from '../recipe-list/recipe';
import { RecipeDetail } from './recipe-detail';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.scss'],
})
export class RecipeDetailComponent implements OnInit {
  recipeDetail!: RecipeDetail;
  constructor(private route: ActivatedRoute, private location: Location) {}
  ngOnInit(): void {
    this.route.data.subscribe((data: Data) => {
      this.recipeDetail = data['recipeDetail'].recipe;
    });
  }

  // goBack() {
  //   this.location.back(); // Navigates back in the platform's history
  // }
}

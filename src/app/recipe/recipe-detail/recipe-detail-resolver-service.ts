import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { RecipeHttpService } from 'src/app/_services/recipe-http.service';
import { Recipe } from '../recipe-list/recipe';

@Injectable({
  providedIn: 'root',
})
export class RecipeDetailResolver implements Resolve<Recipe> {
  constructor(private httpRecipeService: RecipeHttpService) {}
  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Recipe> | Promise<Recipe> | Recipe {
    return this.httpRecipeService.getRecipeDetails(route.params['id']);
  }
}

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Recipe } from '../recipe/recipe-list/recipe';
import { RecipeInformation } from '../recipe/recipe-list/recipe-information';

@Injectable({
  providedIn: 'root',
})
export class RecipeHttpService {
  baseURL: string = 'https://forkify-api.herokuapp.com/api/';
  key: string = '462b1cc8d4f2730081462fbc65136320';
  constructor(private http: HttpClient) {}

  // this function to get all recipes from api link in the text file of apis
  // : observable to be able to make subscribe above it
  getAllRecipes(): Observable<RecipeInformation> {
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('key', this.key);
    params = params.append('q', 'pizza');
    // .post take url , body to post in the api
    return this.http.get<RecipeInformation>(this.baseURL + 'search', {
      params: params,
    });
  }

  getRecipeDetails(id: string): Observable<Recipe> {
    // Initialize Params Object
    let params = new HttpParams();

    // Begin assigning parameters
    params = params.append('key', this.key);
    params = params.append('rId', id);
    // .post take url , body to post in the api
    return this.http.get<Recipe>(this.baseURL + 'get', {
      params: params,
    });
  }
}

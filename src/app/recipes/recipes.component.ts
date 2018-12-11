import { Component, OnInit } from '@angular/core';
import { Recipe } from './recipe.model';
import { RecipeServices } from '../services/recipe.service';

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css'],
  providers: [RecipeServices]
})
export class RecipesComponent implements OnInit {
 recipeSelected : Recipe;
  constructor(private recipeService: RecipeServices) { }

  ngOnInit() {
   
  }
}

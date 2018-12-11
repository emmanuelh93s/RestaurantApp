import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import {Recipe} from '../recipe.model';  
import { RecipeServices } from '../../services/recipe.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
 @Output() recipeWasSelected = new EventEmitter<Recipe>();
 recipes: Recipe[];
 private subscirbe: Subscription;
  constructor(private recipeService:RecipeServices, private router: Router,
    private route:ActivatedRoute) { }
 
  ngOnInit() {
  this.recipes = this.recipeService.getRecipes();
  this.subscirbe= this.recipeService.recipesChanged.subscribe((recipes:Recipe[])=>{
    this.recipes=recipes;

  })
  }

 onNewRecipe(){
this.router.navigate(['new'],{relativeTo: this.route});
 }
}

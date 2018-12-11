import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { RecipeServices } from 'src/app/services/recipe.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-recipes-detail',
  templateUrl: './recipes-detail.component.html',
  styleUrls: ['./recipes-detail.component.css']
})
export class RecipesDetailComponent implements OnInit {
 recipe: Recipe;
 id: number;
  constructor(private recipeService: RecipeServices, private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
    this.route.params.subscribe((param:Params) =>{
      this.id = +param['id'];
      this.recipe= this.recipeService.getRecipe(this.id);
  });
  }
  onAddToShoppingList(){
    this.recipeService.addIngredientsToShoppingList(this.recipe.ingredients);
  }
  onEditRecipe(){
    this.router.navigate(['edit'],{relativeTo:this.route})
  }
  onDelateRecipe(){
    this.route.params.subscribe((param:Params) =>{
      this.id = +param['id'];
      this.recipeService.onDelateRecipe(this.id);
      this.router.navigate(['../'],{relativeTo:this.route});
  });
  }
}

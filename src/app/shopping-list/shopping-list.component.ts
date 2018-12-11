import { Component, OnInit, OnDestroy } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';
import { IngredientsService } from '../services/ingredients.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-list',
  templateUrl: './shopping-list.component.html',
  styleUrls: ['./shopping-list.component.css']

})
export class ShoppingListComponent implements OnInit, OnDestroy {
ingredients :Ingredient[];
private subscribe:Subscription;
  constructor(private ingredientsService: IngredientsService) { }

  ngOnInit() {
    this.subscribe= this.ingredientsService.ingrdientsChanged.subscribe( (event) =>{
      this.ingredients = this.ingredientsService.getIngredients();
      
    });
    
    
    this.ingredients = this.ingredientsService.getIngredients();
    
  }
  ngOnDestroy(){
    this.subscribe.unsubscribe();
  }
  
  onEditItem(index:number){
    this.ingredientsService.startedEditing.next(index);
  }

}


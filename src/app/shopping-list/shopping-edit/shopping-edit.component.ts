import { Component, OnInit, ViewChild, ElementRef, OnDestroy } from '@angular/core';
import { IngredientsService } from '../../services/ingredients.service';
import { Ingredient } from '../../shared/ingredient.model';
import { NgForm } from '@angular/forms';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit, OnDestroy {
  private subscription:Subscription;
   editedItem:Ingredient;
   @ViewChild('f')slForm:NgForm;
   editModel=false;
   indexEditedItem:number;
   
  constructor( private ingredientsService:IngredientsService) {
    
   }
  
  ngOnInit() {
    this.subscription= this.ingredientsService.startedEditing.subscribe((index:number)=>{
      this.indexEditedItem=index;
      this.editedItem= this.ingredientsService.getIngredient(index);
      this.editModel=true;
      this.slForm.setValue({
        name:this.editedItem.name,amount:this.editedItem.amount
      })
    });
  }
  ngOnDestroy(){
     this.subscription.unsubscribe();
  }
  onAddItem(form: NgForm){
  const value = form.value;
  var newingredient= new Ingredient(value.name, value.amount);
  if (this.editModel) {
    this.ingredientsService.updateIngredient(this.indexEditedItem, newingredient);
    
  }else{
    this.ingredientsService.addIngredient(newingredient);
  }
 
  this.clear();
  }
  delateIngredient(){
    this.ingredientsService.delateIngredient(this.indexEditedItem);
    this.clear();
  }
  clear(){
    this.slForm.reset();
    this.editModel=false;
  }
}

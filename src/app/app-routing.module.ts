import {Routes, RouterModule} from '@angular/router';
import { RecipesComponent } from './recipes/recipes.component';
import { ShoppingListComponent } from './shopping-list/shopping-list.component';
import { NgModule, Component } from '@angular/core';
import { RecipeStartComponent } from './recipes/recipe-start/recipe-start.component';
import { RecipesDetailComponent } from './recipes/recipes-detail/recipes-detail.component';
import { RecipeEditComponent } from './recipes/recipe-edit/recipe-edit.component';
import { AuthGuard } from './guards/auth.guard';
import { SigninComponent } from './auth/signin/signin.component';
const routes: Routes=[

    {
       
        path:'', redirectTo:'/signin', pathMatch:'full'
    },
    
    {
        path: 'recipes', component:RecipesComponent

        ,children:[
            {path: 'signin', component: SigninComponent},
             {path:'', component: RecipeStartComponent},
             {path:'new', component:RecipeEditComponent},
            { path:':id', component: RecipesDetailComponent},
            { path:':id/edit', component: RecipeEditComponent},
            

            ],canActivate:[AuthGuard]
    },
    {
        path: 'shoppinglist', component:ShoppingListComponent
    },
    {
        path: 'signin', component:SigninComponent
    }
]
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{

}
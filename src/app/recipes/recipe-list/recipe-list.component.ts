import {Component, Input, OnInit, Output, EventEmitter} from '@angular/core';
import {Recipe} from "../recipes.model";

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A Test Recipe', 'This is simply a test', 'https://picsum.photos/300/300\n'),
    new Recipe('Another Test Recipe', 'This is simply a test', 'https://picsum.photos/300/300\n'),
  ];
  @Output() recipeWasSelected = new EventEmitter<Recipe>()

  constructor() {
  }

  ngOnInit(): void {
  }

  onRecipeSelected(recipe: Recipe){
    this.recipeWasSelected.emit(recipe)
  }

}

import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipe.model';

@Component({
  selector: 'app-recipes-list',
  templateUrl: './recipes-list.component.html',
  styleUrls: ['./recipes-list.component.css']
})
export class RecipesListComponent implements OnInit {
  recipes: Recipe[] = [
    new Recipe('A test Recipe', 'This is simply a test', 'https://www.das-koehle.at/uploads/tx_bh/food_web_008.jpg')
  ];

  constructor() { }

  ngOnInit(): void {
  }

}

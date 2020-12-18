import { Component, OnInit, Input } from '@angular/core';
import { Dish } from '../shared/dish';

@Component({
  selector: 'app-dishdetail',
  templateUrl: './dishdetail.component.html',
  styleUrls: ['./dishdetail.component.scss']
})
export class DishdetailComponent implements OnInit {
  //Do not use the Dish type from the dish.ts file to declare either the const DISH or the variable dish below to be of the type Dish. 
  //We need to update the Dish type which will be done in the next module.
  //*What is in the class is what is accessible in the html template
  @Input()
  dish = Dish;
  constructor() { }

  ngOnInit(): void {
  }

}

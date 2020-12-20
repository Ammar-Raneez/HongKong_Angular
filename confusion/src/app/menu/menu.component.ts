import { Component, OnInit } from '@angular/core';
import { Dish } from '../shared/dish';

//importing things directly isn't ideal, the ideal way is to use a service to solely fetch our data, as such
//what we're basically doing is separating concerns
import { DishService } from '../services/dish.service' 
import { baseURL } from '../shared/baseurl';

//typescript syntax -> variable: variable type = data
@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {
  dishes: Dish[];

  //(get access to the DishService class upon import)
  constructor(private dishService: DishService) { }

  //Angular lifecycle method - this is run whenever the component is instantiated (something like a constructor)
  //we can use this to initialize our dishes variable using the DishService class that we got access to via the 
  //constructor after importing
  ngOnInit(): void {
    this.dishService.getDishes()
      .subscribe(dishes => this.dishes = dishes)
  }

  getBaseUrl() {
    return baseURL;
  }
}

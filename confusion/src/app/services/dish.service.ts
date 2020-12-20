import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { delay } from 'rxjs/operators';
import { Dish } from '../shared/dish';
import { DISHES } from '../shared/dishes';

//by using this injectable decorator we make the class injectable into our application
//this is what enables us to use Dependency Injection within our app
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor() { }

  getDishes(): Observable<Dish[]> {
    // return new Promise(
    //   resolve => setTimeout(() => resolve(DISHES), 2000)
    // )
    return of(DISHES).pipe(delay(2000));
  }

  getDish(id: string): Observable<Dish> {
    // return new Promise(
    //   resolve => setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000)
    // )
    return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));
  }

  getFeaturedDish(): Observable<Dish> {
    // return new Promise(
    //   resolve => setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000)
    // )
    return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
  }

  getDishIds(): Observable<string[] | any> {
    return of(DISHES.map(dish => dish.id ));
  }
}

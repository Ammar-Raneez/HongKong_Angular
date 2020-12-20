import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { Dish } from '../shared/dish';

//by using this injectable decorator we make the class injectable into our application
//this is what enables us to use Dependency Injection within our app
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private httpClient : HttpClient) { }

  getDishes(): Observable<Dish[]> {
    // return new Promise(
    //   resolve => setTimeout(() => resolve(DISHES), 2000)
    // )
    // return of(DISHES).pipe(delay(2000));

    return this.httpClient.get<Dish[]>(baseURL + "dishes");
  }

  getDish(id: string): Observable<Dish> {
    // return new Promise(
    //   resolve => setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000)
    // )
    // return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));

    return this.httpClient.get<Dish>(baseURL + "dishes/" + id);
  }

  getFeaturedDish(): Observable<Dish> {
    // return new Promise(
    //   resolve => setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000)
    // )
    // return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
    
    return this.httpClient.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]));
  }

  getDishIds(): Observable<string[] | any> {
    // return of(DISHES.map(dish => dish.id ));

    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)));
  }
}

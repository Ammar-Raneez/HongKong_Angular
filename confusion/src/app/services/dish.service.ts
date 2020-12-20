import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { baseURL } from '../shared/baseurl';
import { Dish } from '../shared/dish';
import { ProcessHttpmsgService } from './process-httpmsg.service';

//by using this injectable decorator we make the class injectable into our application
//this is what enables us to use Dependency Injection within our app
@Injectable({
  providedIn: 'root'
})
export class DishService {

  constructor(private httpClient : HttpClient, private processHttpmsgService : ProcessHttpmsgService) { }

  getDishes(): Observable<Dish[]> {
    // return new Promise(
    //   resolve => setTimeout(() => resolve(DISHES), 2000)
    // )
    // return of(DISHES).pipe(delay(2000));

    return this.httpClient.get<Dish[]>(baseURL + "dishes")
      .pipe(catchError(this.processHttpmsgService.handleError));
  }

  getDish(id: string): Observable<Dish> {
    // return new Promise(
    //   resolve => setTimeout(() => resolve(DISHES.filter((dish) => (dish.id === id))[0]), 2000)
    // )
    // return of(DISHES.filter((dish) => (dish.id === id))[0]).pipe(delay(2000));

    return this.httpClient.get<Dish>(baseURL + "dishes/" + id)
      .pipe(catchError(this.processHttpmsgService.handleError));
  }

  getFeaturedDish(): Observable<Dish> {
    // return new Promise(
    //   resolve => setTimeout(() => resolve(DISHES.filter((dish) => dish.featured)[0]), 2000)
    // )
    // return of(DISHES.filter((dish) => dish.featured)[0]).pipe(delay(2000));
    
    return this.httpClient.get<Dish[]>(baseURL + 'dishes?featured=true').pipe(map(dishes => dishes[0]))
      .pipe(catchError(this.processHttpmsgService.handleError));
  }

  getDishIds(): Observable<string[] | any> {
    // return of(DISHES.map(dish => dish.id ));

    return this.getDishes().pipe(map(dishes => dishes.map(dish => dish.id)))
      .pipe(catchError(this.processHttpmsgService.handleError));
  }

  putDish(dish: Dish): Observable<Dish> {
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json'
      })
    };
    return this.httpClient.put<Dish>(baseURL + 'dishes/' + dish.id, dish, httpOptions)
      .pipe(catchError(this.processHttpmsgService.handleError));
  }
}

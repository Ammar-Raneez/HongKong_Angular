import { enableProdMode } from '@angular/core';
//enables us to bootstrap your angular application by taking your root module as a parameter
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppModule } from './app/app.module';
import { environment } from './environments/environment';

if (environment.production) {
  enableProdMode();
}

//the root module is bootstrapped here (remember the root module is the main module - angular modular architecture)
//the app module is used as the root module (takes the AppModule as root module)
platformBrowserDynamic().bootstrapModule(AppModule)
  .catch(err => console.error(err));

import { ApplicationConfig, importProvidersFrom, provideZoneChangeDetection } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { provideStore } from '@ngrx/store';
import { reducers, metaReducers } from './reducers';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';


export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes)
    , provideStore(reducers, { metaReducers }),importProvidersFrom(BrowserAnimationsModule)]
};

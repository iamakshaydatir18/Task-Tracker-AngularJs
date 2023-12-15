import { ApplicationConfig } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app.routes';
import { provideHttpClient } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';


export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes), provideHttpClient(), FormsModule]
};

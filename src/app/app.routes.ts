import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { SearchZipCodesComponent } from './search-zip-codes/search-zip-codes.component';
import { HistoryComponent } from './history/history.component';

export const routes: Routes = [
  {
    path: '',
    component: AppComponent,
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'sign-up',
    component: SignUpComponent,
  },
  {
    path: 'search',
    component: SearchZipCodesComponent,
  },
  {
    path: 'history',
    component: HistoryComponent,
  },
];

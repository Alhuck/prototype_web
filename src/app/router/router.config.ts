import {RouterConfig, provideRouter} from '@angular/router';
import {DashboardComponent} from '../modules/dashboard.component';
import {HomeComponent} from '../modules/home.component';

const routes: RouterConfig = [
    {
        path: 'home',
        component: HomeComponent      
    },
    {
        path: 'dashboard',
        component: DashboardComponent      
    },
    {
        path: '',
        component: HomeComponent      
    }
];
export const appRouteProvider  = [
    provideRouter(routes)
]
    

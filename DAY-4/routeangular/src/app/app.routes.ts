import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutusComponent } from './components/aboutus/aboutus.component';
import { ContactusComponent } from './components/contactus/contactus.component';
import { ComingsoonComponent } from './components/comingsoon/comingsoon.component';
import { HelpComponent } from './components/help/help.component';
import { LoginComponent } from './components/login/login.component';
import { myauthGuard } from './myauth.guard';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    { path: 'home', component: HomeComponent, title: 'HOME' },
    { path: 'aboutus', component: AboutusComponent, title: 'ABOUT US' },
    { path: 'contactus', component: ContactusComponent, canActivate: [myauthGuard], title: 'CONTACT US' },
    { path: 'careers', component: ComingsoonComponent, title: 'CAREERS' },
    { path: 'help', component: HelpComponent, outlet: 'helpoutlet', title: 'HELP' },
    { path: 'login', component: LoginComponent, title: 'LOGIN' },
    { path: '**', component: ComingsoonComponent, title: 'COMING SOON' },

];

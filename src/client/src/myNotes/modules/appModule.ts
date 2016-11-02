import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {LocationStrategy, HashLocationStrategy} from '@angular/common';
import {RootComponent} from '../components/root/root';
import {FooterComponent} from '../components/footer/footer';
import {HeaderComponent} from '../components/header/header';
import {RouterModule} from '@angular/router';
import {DashboardComponent} from '../components/dashboard/dashboard';
import {SearchComponent} from '../components/search/search';

const routes = [
    {path: '', component: DashboardComponent},
    {path: '*', redirectTo: ''}
];

@NgModule({
    declarations: [
        DashboardComponent,
        SearchComponent,
        HeaderComponent,
        FooterComponent,
        RootComponent
    ],
    imports: [
        RouterModule.forRoot(routes),
        BrowserModule,
        FormsModule,
        HttpModule
    ],
    providers: [
        { provide: LocationStrategy, useClass: HashLocationStrategy }
    ],
    bootstrap: [RootComponent]
})
export class AppModule {
}

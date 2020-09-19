import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { YouFirstComponent } from './you-first/you-first.component';
import { MoreComponent } from './more/more.component';

import { TakeActionComponent } from './take-action/take-action.component';
import { CountdownComponent } from './countdown/countdown.component';
import { CampaignersComponent } from './campaigners/campaigners.component';

const appRoutes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'CARD', component: HomeComponent },
  { path: 'you-first', component: YouFirstComponent },
  { path: 'more', component: MoreComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    YouFirstComponent,
    MoreComponent,
    TakeActionComponent,
    CountdownComponent,
    CampaignersComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

// Doesn't work https://stackoverflow.com/questions/50907736/refreshing-the-page-results-in-404-error-angular-6

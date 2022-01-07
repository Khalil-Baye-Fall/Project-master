import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { DatePipe } from '@angular/common';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TopNavigationComponent } from './Shared/top-navigation/top-navigation.component';
import { LeftNavigationComponent } from './Shared/left-navigation/left-navigation.component';
import { FooterComponent } from './Shared/footer/footer.component';
import { SignInComponent } from './Auth/sign-in/sign-in.component';
import { SignUpComponent } from './Auth/sign-up/sign-up.component';
import { ForToForComponent } from './for-to-for/for-to-for.component';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { AuthServiceService } from './Auth/auth-service.service';
import { ConfirmationComponent } from './Shared/confirmation/confirmation.component';
import { LoginGuardService } from './Services/login-guard.service';
import { AuthGuardService } from './Services/auth-guard.service';
import { ProjectsComponent } from './Features/projects/projects.component';
import { HomeComponent } from './Main/home/home.component';



const appRoutes: Routes = [
  
  { path: '',  component: HomeComponent },
  { path: 'home', component: HomeComponent },
 

  //  Authentication
  { path:"login", canActivate:[LoginGuardService], component: SignInComponent },
  { path:"register",canActivate:[LoginGuardService], component: SignUpComponent },

  // confirmation page
  { path:"confirmation",canActivate:[LoginGuardService],  component: ConfirmationComponent },

 
  // capture for unexcept request or page

  {path: 'not-found', component: ForToForComponent},
  {path: '**', redirectTo: '/not-found'}

]
@NgModule({
  declarations: [
    AppComponent,
    TopNavigationComponent,
    LeftNavigationComponent,
    FooterComponent,
    SignInComponent,
    SignUpComponent,
    ForToForComponent,
    ConfirmationComponent,
    ProjectsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule,
    FormsModule
  ],
  providers: [
    AuthServiceService,
    DatePipe,
    LoginGuardService,
    AuthGuardService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

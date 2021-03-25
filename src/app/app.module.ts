import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
//import { HttpClientModule} from '@angular/common/http';
import { appRoutingModule } from './app.routing';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule,
        //HttpClientModule,
        appRoutingModule
    ],
    declarations: [
        AppComponent,
        LoginComponent,
        RegisterComponent
    ],
    providers: [], //services
    bootstrap: [AppComponent]
})
export class AppModule {};
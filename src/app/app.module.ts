import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { EmailToUserPipe } from './pipes/email-to-user/email-to-user.pipe';
import { ContentComponent } from './layouts/content/content.component';
import { FullComponent } from './layouts/full/full.component';
import { HomeComponent } from './pages/home/home.component';
import { TableComponent } from './components/table/table.component';
import { CadastroComponent } from './pages/cadastro/cadastro.component';
import { FilterTermPipe } from './pipes/filter-term/filter-term.pipe';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    NotFoundComponent,
    EmailToUserPipe,
    ContentComponent,
    FullComponent,
    HomeComponent,
    TableComponent,
    CadastroComponent,
    FilterTermPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

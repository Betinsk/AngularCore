import { NgModule} from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';


import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';





import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { VendasListagemComponent } from './vendas-listagem/vendas-listagem.component';
import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';
import { LOCALE_ID } from '@angular/core';
import { produtosListagemComponent } from './produtos-listagem/produtos-listagem.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    VendasListagemComponent,
    VendaCadastroComponent,
    produtosListagemComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    TableModule,
    HttpClientModule,
    DropdownModule,
    InputTextModule,
    PanelModule,
    FormsModule
    
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
  ],
  bootstrap: [AppComponent],

})
export class AppModule { }

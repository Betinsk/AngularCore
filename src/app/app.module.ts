import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, LOCALE_ID } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import localePt from '@angular/common/locales/pt';
import { registerLocaleData } from '@angular/common';
import { FormGroup, FormsModule } from '@angular/forms';

import { MessageService } from 'primeng/api';
import { TableModule } from 'primeng/table';
import { DropdownModule } from 'primeng/dropdown';
import { InputTextModule } from 'primeng/inputtext';
import { PanelModule } from 'primeng/panel';
import { ButtonModule } from 'primeng/button';

import { AppComponent } from './app.component';

import { VendaCadastroComponent } from './venda-cadastro/venda-cadastro.component';
import { ClienteComponent } from './cliente/cliente.component';
import { VendaComponent } from './venda/venda.component';
import { ProdutoComponent } from './produto/produto.component';
import { VendaSimplesComponent } from './venda-simples/venda-simples.component';


registerLocaleData(localePt);

@NgModule({
  declarations: [
    AppComponent,
    
    VendaCadastroComponent,
    ClienteComponent,
    VendaComponent,
    ProdutoComponent,
    VendaSimplesComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
    

    
    TableModule,
    DropdownModule,
    InputTextModule,
    PanelModule,
    ButtonModule,
    
  ],
  providers: [
    { provide: LOCALE_ID, useValue: 'pt' },
    MessageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
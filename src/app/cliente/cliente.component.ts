import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

 
  clientes: Array<any> = [];

  constructor(private vendaService: VendasService) { }

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes() {
    this.vendaService.listarClientes()
      .subscribe(response => this.clientes = response);
  }

}
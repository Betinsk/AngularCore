import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  cliente: any
  clientes: Array<any> = [];

  constructor(private vendaService: VendasService) { }

  ngOnInit() {
    this.listarClientes();
  }

  listarClientes() {
    this.vendaService.listarClientes()
      .subscribe(response => this.clientes = response);
  }



  adicionar(frm: FormGroup) {
    this.vendaService.adicionar(this.cliente).subscribe(response => {

      this.vendaService.adicionar(response);

    });

}
}
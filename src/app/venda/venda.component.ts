import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {
  
  vendas: Array<any> = [];
  item: any;
  clientes: Array<any> = [];
  produtos: Array<any> = [];
  
  constructor(private vendaService: VendasService) { }

  ngOnInit(): void {
    this.listarClientes()
    
    setTimeout(() => {
      this.listar()
    }, 1000);

  }
    async listar() {
    await this.vendaService.listar().subscribe(response => {
    this.vendas = response
    this.vendas.forEach((e:any)  => {
      let cliente = this.clientes.filter( y => y.id_cliente === e.id_cliente)[0]
      e.cliente = cliente;
    });
    console.log(this.vendas)
  })
      
    }

    
    
    async listarClientes() {
      await this.vendaService.listarClientes().subscribe(response => this.clientes = response )
  }

}

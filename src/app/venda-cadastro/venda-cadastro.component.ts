import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda-cadastro',
  templateUrl: './venda-cadastro.component.html',
  styleUrls: ['./venda-cadastro.component.css']
})
export class VendaCadastroComponent implements OnInit {

  clientes: Array<any> =[]

  constructor(private vendaService: VendasService) { }

  ngOnInit(): void {
    this.vendaService.listarClientes().subscribe(Response =>this.clientes = Response)
    
  }

}

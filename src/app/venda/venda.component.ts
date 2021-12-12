import { Component, OnInit } from '@angular/core';
import { VendasService } from '../vendas/vendas.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {
  vendas: Array<any> = [];

  constructor(private vendaService: VendasService) { }

  ngOnInit(): void {
    this.listar()
  }
    listar() {
      this.vendaService.listar().subscribe(response => this.vendas = response )
    }
}
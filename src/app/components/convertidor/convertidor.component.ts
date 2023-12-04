import { Component } from '@angular/core';

@Component({
  selector: 'app-convertidor',
  templateUrl: './convertidor.component.html',
  styleUrls: ['./convertidor.component.css']
})
export class ConvertidorComponent {
  cantidad = 0;
  tengo = 'COP';
  quiero = 'USD';
  total = 0;

  monedas: string[] = ['COP', 'USD', 'AUD' ]
  constructor() {}

  ngOnInit(): void {

  }

  convertir() {

    switch(this.tengo) {
      case 'COP':
        if(this.quiero === 'COP') {
          this.total = this.cantidad;
        }
        if(this.quiero === 'USD') {
          this.total = this.cantidad * 0.00025;
        }
        if(this.quiero === 'AUD') {
          this.total = this.cantidad * 0.00038;
        }
        break;
      case 'USD':
        if(this.quiero === 'COP') {
          this.total = this.cantidad * 4019;
        }
        if(this.quiero === 'USD') {
          this.total = this.cantidad;
        }
        if(this.quiero === 'AUD') {
          this.total = this.cantidad * 1.51;
        }
        break;
      case 'AUD':
        if(this.quiero === 'COP') {
          this.total = this.cantidad * 2655;
        }
        if(this.quiero === 'USD') {
          this.total = this.cantidad * 0.66;
        }
        if(this.quiero === 'AUD') {
          this.total = this.cantidad;
        }
        break;
    }
  }
}

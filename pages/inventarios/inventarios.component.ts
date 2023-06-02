import { Component, OnInit } from '@angular/core';
import { InventariosService } from '../../services/inventarios.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-inventarios',
  templateUrl: './inventarios.component.html',
  styleUrls: ['./inventarios.component.css']
})
export class InventariosComponent implements OnInit {

  formData: any = {};

  constructor(private service: InventariosService,  private router: Router) { }

  ngOnInit(): void {
  }

  submitForm(form: any) {

    if (form.valid) {

      const farmacia = form.value.farmacia;

      switch (farmacia) {
        case 'Farmacia 1':
          console.log('Seleccionaste Farmacia 1');
          this.service.postInventario(form.value.clave,form.value.descripcion, form.value.lote,form.value.caducidad,form.value.cantidad)
          .subscribe( (resp:any) => {
    
            console.log(resp);
            form.reset(); // Limpiar el formulario
            this.router.navigate(['/home']); // Redirigir al home
      
          }, err => {
            console.log(err.status);
          });
          break;
    
        case 'Farmacia 2':
          console.log('Seleccionaste Farmacia 1');
          this.service.postInventario2(form.value.clave,form.value.descripcion, form.value.lote,form.value.caducidad,form.value.cantidad)
          .subscribe( (resp:any) => {
    
            console.log(resp);
            form.reset(); // Limpiar el formulario
            this.router.navigate(['/home']); // Redirigir al home
      
          }, err => {
            console.log(err.status);
          });
          break;
    
        case 'Farmacia 3':
          console.log('Seleccionaste Farmacia 3');
          this.service.postInventario3(form.value.clave,form.value.descripcion, form.value.lote,form.value.caducidad,form.value.cantidad)
          .subscribe( (resp:any) => {
    
            console.log(resp);
            form.reset(); // Limpiar el formulario
            this.router.navigate(['/home']); // Redirigir al home
      
          }, err => {
            console.log(err.status);
          });
          break;
    
        case 'Farmacia 4':
          console.log('Seleccionaste Farmacia 4');
          this.service.postInventario4(form.value.clave,form.value.descripcion, form.value.lote,form.value.caducidad,form.value.cantidad)
          .subscribe( (resp:any) => {
    
            console.log(resp);
            form.reset(); // Limpiar el formulario
            this.router.navigate(['/home']); // Redirigir al home
      
          }, err => {
            console.log(err.status);
          });
          break;
    
        default:
          console.log('Farmacia no reconocida');
          // Acciones para cualquier otro valor de farmacia que no esté contemplado en los casos anteriores
          break;
      }

      console.log(form.value);
      

    }
    
  }

}

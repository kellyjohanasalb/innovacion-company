import { Routes } from '@angular/router';
import { ProductosComponent } from './componentes/productos/productos.component';

export const routes: Routes = [
  { path: '', redirectTo: '/productos', pathMatch: 'full' },
  { path: 'productos', component: ProductosComponent }
];

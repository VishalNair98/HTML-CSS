import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';



const routes: Routes = [
  {
    path:'employees',
    loadChildren: () => import('./employees/employees.module').then(mod=>mod.EmployeesModule)
  },
  {
    path: 'products',
    loadChildren:()=> import('./products/products.module').then(mod=>mod.ProductsModule)
  } 
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

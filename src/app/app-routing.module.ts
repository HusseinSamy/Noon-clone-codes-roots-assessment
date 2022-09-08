import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [
  {
    path: "",
    redirectTo: "/product",
    pathMatch: 'full'
  },
  {
    path: "product",
    loadChildren: () => import('./products-page/products-page.module').then(m => m.ProductsPageModule)
  },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}

import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainPageComponent} from "./main-page/main-page.component";
import {ArticulosPageComponent} from "./articulos-page/articulos-page.component";
import {FotosPageComponent} from "./fotos-page/fotos-page.component";
import {FotosDetailPageComponent} from "./fotos-detail-page/fotos-detail-page.component";


const routes: Routes = [
  {
    path: '',
    component: MainPageComponent
  },
  {
    path: 'articulos',
    component: ArticulosPageComponent
  },
  {
    path: 'fotos',
    component: FotosPageComponent
  },
  {
    path: 'fotos-details/:id',
    component: FotosDetailPageComponent,
  },




];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PaginasRoutingModule {
}
